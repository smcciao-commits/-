// TOP EDU PWA Service Worker - Auto Cache Purge + v83 공부 알림 + v121~v122 Firebase 웹 푸시(FCM) / v123~v124 JSONP 차단 우회(fetch omit) / v125 대시보드 반 필터 자동 생성 / v126 SW unregister 제거(푸시 구독 유지) / v127 하린 앱 쪽지 카드 / v128 자기주도 설정 동기화·중2 문장 정리·한빛중2 통합 / v129 자기주도 내 문장·문제 직접 추가 / v139 어순배열 칩 큰따옴표 이스케이프(reading.html) / v140 화면 이탈 1회 유예(2회부터 기록) - reading.html·index.html / v141 이탈 5회 오탐·누적 수리(블러·전체화면 감지 제거, 시험마다 0회 초기화, 잠금 화면 없이 토스트) / v142 오늘의 학습 완료 표시 전 반 확대(index.html) - reading.html·index.html / v143 스페셜 숙제 완료 버튼·완료 배지 추가(index.html) / v144 어순배열 칩 취소(reading.html·index.html 자기주도 2단계) + 스페셜 숙제는 실제 완료 기록만(index.html·reading.html) / v145 모의고사 선지 어디를 눌러도 즉시 답 선택(reading.html 선지 단어 뜻보기 가로채기 제거) / v146 자기주도 1·2·3단계 오답 100% 재도전 필수(틀린 단어·문장·문제를 모두 맞출 때까지 다음 단계·완주 잠금) / v147 오늘의 학습 하루 2 Day·부엉이 카드는 오늘 학습 전용(자기주도는 아래 카드만)·학생 폰 오늘 학습/자기주도 완료 분리 표시·현황판 완료 소요시간·이탈 횟수와 밖에서 머문 시간(awaySec) / v148 오늘의 학습 2 Day 교재 자동 인식(과별 어휘 세트가 앞에 있어도)·끝낸 Day를 저장 진도로 재확인(연속학습/출석/현황판 미완료 어긋남 수리)·현황판이 받은 상태를 폰에 남겨 새로고침·재시작 후에도 오늘 완료 유지(어제 완주는 오늘 완료로 안 보이게) / v149 선생님 전용 📝 반별 수업일지(시트 '수업일지' 탭 저장·조회, 카톡 단톡방 복사용 문구) / v150 하린이 초5 천재(함) 12과 단어·문장 3일 특훈(금11/27·토28·일29, 단어 스펠링 20 + 문장 어순·빈칸 12, 날짜별 ✅ 분리 기록, 원장님 미리보기) - index.html·harin.html / v150.1 특훈 화면이 홈 재렌더로 덮이지 않게 가드 - index.html / v151 초6 서호준 에듀키즈·캐츠훈련관 개방(캐츠 훈련관 버튼 초5+풍덕초6, edukids는 로그인한 학생 기준으로 스트릭·포인트·푸시·쪽지 분리) - index.html·edukids.html / v151.1 캐츠 훈련관(cats.html)도 같은 기준·하린 플래너 바로가기 숨김
const CACHE_NAME = 'topedu-pwa-v151';
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

/* ===== v121: Firebase 웹 푸시(FCM) — 앱을 꺼 둬도 학원 공지·쪽지가 폰 상단에 뜹니다.
   gstatic SDK를 못 받아오면(오프라인 등) 조용히 넘어가고 기존 PWA 기능은 그대로 동작합니다. */
var TOPEDU_FCM_CONFIG = {
  apiKey: 'AIzaSyB7dY-zIk5p9gvM7OVV7plOLAPGZfx8eEI',
  authDomain: 'topedu-push.firebaseapp.com',
  projectId: 'topedu-push',
  storageBucket: 'topedu-push.firebasestorage.app',
  messagingSenderId: '799252180174',
  appId: '1:799252180174:web:0d49cfa9d24f848b7d349f',
  measurementId: 'G-3RCPXNE3S0'
};

try {
  importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js');
  importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js');
} catch (e) { /* SDK 없이도 앱은 정상 동작 */ }

try {
  if (self.firebase && firebase.messaging) {
    if (!firebase.apps || !firebase.apps.length) firebase.initializeApp(TOPEDU_FCM_CONFIG);
    var topeduMessaging = firebase.messaging();
    /* notification 페이로드가 있으면 브라우저가 자동 표시하므로 여기서 또 띄우지 않습니다.
       data-only 메시지가 오면 여기서 직접 띄웁니다. */
    topeduMessaging.onBackgroundMessage(function(payload) {
      payload = payload || {};
      var n = payload.notification || {};
      var d = payload.data || {};
      if (!n.title && !d.body) return;
      return self.registration.showNotification(n.title || '📢 수지탑에듀 알림', notifOptions({
        body: n.body || d.body || '',
        tag: 'topedu-note',
        url: d.url || './index.html'
      }));
    });
  }
} catch (e) { /* FCM 초기화 실패해도 PWA 기능은 유지 */ }

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
