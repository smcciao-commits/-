// TOP EDU PWA Service Worker - Auto Cache Purge + v83 공부 알림 (v107: 숙제 1초 체크 시트 저장 + 시트 단어세트 연동)
const CACHE_NAME = 'topedu-pwa-v107';
const STATE_DB = 'topedu_sw_state';

/* v83: 알림 아이콘은 실제 PNG 파일만 사용합니다.
   안드로이드 크롬은 SVG/data URI 아이콘이 오면 showNotification 을 조용히 실패시키는 경우가 있어요. */
function notifIconUrl() {
  try { return new URL('icon-192.png', self.registration.scope).href; }
  catch (e) { return './icon-192.png'; }
}

self.addEventListener('install', function(e) {
  self.skipWaiting();
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.map(function(k) {
          return caches.delete(k);
        })
      );
    }).then(function() {
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', function(e) {
  // Always fetch fresh network first
  e.respondWith(
    fetch(e.request).catch(function() {
      return caches.match(e.request);
    })
  );
});

/* ===== v82: 알림 ===== */
function notifOptions(data) {
  var icon = notifIconUrl();
  var opts = {
    body: data.body || '',
    icon: icon,
    badge: icon,
    tag: data.tag || 'topedu-streak',
    renotify: true,
    data: { url: data.url || './' }
  };
  try { opts.vibrate = [140, 70, 140, 70, 220]; } catch (e) {}
  return opts;
}

// 페이지에서 직접 띄울 때(안드로이드 크롬은 new Notification() 미지원 → SW 필수)
self.addEventListener('message', function(e) {
  var d = (e.data && typeof e.data === 'object') ? e.data : {};
  if (d.type === 'SHOW_NOTIFICATION') {
    e.waitUntil(self.registration.showNotification(d.title || '탑에듀', notifOptions(d)));
  } else if (d.type === 'CLOSE_NOTIFICATIONS') {
    e.waitUntil(self.registration.getNotifications().then(function(list) {
      list.forEach(function(n) { n.close(); });
    }));
  }
});

self.addEventListener('notificationclick', function(e) {
  e.notification.close();
  var url = (e.notification.data && e.notification.data.url) || './';
  e.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function(list) {
      for (var i = 0; i < list.length; i++) {
        if (list[i].url.indexOf('/-/') >= 0 || list[i].url.indexOf('index.html') >= 0) {
          try { list[i].focus(); } catch (err) {}
          return;
        }
      }
      if (self.clients.openWindow) return self.clients.openWindow(url);
    })
  );
});

/* ===== v82: 백그라운드 주기 동기화(PeriodicSync) — 지원되는 안드로이드 PWA에서만 ===== */
function idbState() {
  return new Promise(function(resolve) {
    try {
      var req = indexedDB.open(STATE_DB, 1);
      req.onupgradeneeded = function() {
        try { req.result.createObjectStore('kv'); } catch (e) {}
      };
      req.onsuccess = function() {
        try {
          var db = req.result;
          var tx = db.transaction('kv', 'readonly');
          var g = tx.objectStore('kv').get('state');
          g.onsuccess = function() { var v = g.result || null; try { db.close(); } catch (e) {} resolve(v); };
          g.onerror = function() { try { db.close(); } catch (e) {} resolve(null); };
        } catch (e) { resolve(null); }
      };
      req.onerror = function() { resolve(null); };
    } catch (e) { resolve(null); }
  });
}

function todayStr() {
  var d = new Date();
  return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2);
}

function minutesNow() {
  var d = new Date();
  return d.getHours() * 60 + d.getMinutes();
}

self.addEventListener('periodicsync', function(e) {
  if (e.tag !== 'topedu-streak-check') return;
  e.waitUntil(idbState().then(function(st) {
    if (!st || !st.enabled || !st.name) return;
    if (st.doneDate === todayStr()) return;
    var parts = String(st.time || '20:00').split(':');
    var due = ((+parts[0]) || 20) * 60 + ((+parts[1]) || 0);
    if (minutesNow() < due) return;
    return self.registration.showNotification('🔥 ' + st.name + ' 학생, 오늘 학습 아직!', notifOptions({
      body: (st.streak > 0 ? (st.streak + '일 연속 스트릭이 오늘 끊길 수 있어. ') : '10분만 하면 끝나!'),
      tag: 'topedu-nag-' + todayStr(),
      url: './index.html'
    }));
  }));
});
