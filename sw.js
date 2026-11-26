// TOP EDU PWA Service Worker - Auto Cache Purge + v83 공부 알림 + v121~v122 Firebase 웹 푸시(FCM) / v123~v124 JSONP 차단 우회(fetch omit) / v125 대시보드 반 필터 자동 생성 / v126 SW unregister 제거(푸시 구독 유지) / v127 하린 앱 쪽지 카드 / v128 자기주도 설정 동기화·중2 문장 정리·한빛중2 통합 / v129 자기주도 내 문장·문제 직접 추가 / v139 어순배열 칩 큰따옴표 이스케이프(reading.html) / v140 화면 이탈 1회 유예(2회부터 기록) - reading.html·index.html / v141 이탈 5회 오탐·누적 수리(블러·전체화면 감지 제거, 시험마다 0회 초기화, 잠금 화면 없이 토스트) / v142 오늘의 학습 완료 표시 전 반 확대(index.html) - reading.html·index.html / v143 스페셜 숙제 완료 버튼·완료 배지 추가(index.html) / v144 어순배열 칩 취소(reading.html·index.html 자기주도 2단계) + 스페셜 숙제는 실제 완료 기록만(index.html·reading.html) / v145 모의고사 선지 어디를 눌러도 즉시 답 선택(reading.html 선지 단어 뜻보기 가로채기 제거) / v146 자기주도 1·2·3단계 오답 100% 재도전 필수(틀린 단어·문장·문제를 모두 맞출 때까지 다음 단계·완주 잠금) / v147 오늘의 학습 하루 2 Day·부엉이 카드는 오늘 학습 전용(자기주도는 아래 카드만)·학생 폰 오늘 학습/자기주도 완료 분리 표시·현황판 완료 소요시간·이탈 횟수와 밖에서 머문 시간(awaySec) / v148 오늘의 학습 2 Day 교재 자동 인식(과별 어휘 세트가 앞에 있어도)·끝낸 Day를 저장 진도로 재확인(연속학습/출석/현황판 미완료 어긋남 수리)·현황판이 받은 상태를 폰에 남겨 새로고침·재시작 후에도 오늘 완료 유지(어제 완주는 오늘 완료로 안 보이게) / v149 선생님 전용 📝 반별 수업일지(시트 '수업일지' 탭 저장·조회, 카톡 단톡방 복사용 문구) / v150 하린이 초5 천재(함) 12과 단어·문장 3일 특훈(금11/27·토28·일29, 단어 스펠링 20 + 문장 어순·빈칸 12, 날짜별 ✅ 분리 기록, 원장님 미리보기) - index.html·harin.html / v150.1 특훈 화면이 홈 재렌더로 덮이지 않게 가드 - index.html / v151 초6 서호준 에듀키즈·캐츠훈련관 개방(캐츠 훈련관 버튼 초5+풍덕초6, edukids는 로그인한 학생 기준으로 스트릭·포인트·푸시·쪽지 분리) - index.html·edukids.html / v151.1 캐츠 훈련관(cats.html)도 같은 기준·하린 플래너 바로가기 숨김 / v152 오늘 자기주도 완주 후 다시 시작해 완료 기록·현황판 '완료'가 덮어쓰이던 문제 수리(완주 시 홈 버튼 잠금·ssEntry 차단·같은 날 done:false 덮어쓰기 방어) / v153 학생 홈을 부엉이 카드 1장으로 통일(오늘의 집 숙제·오늘의 학습·오늘 스페셜 통합, 수업일엔 부엉이+자기주도 2개만)·수지중1·2 기말 자기주도 3단계 개편(단어+영영 10+10=20문항, 본문 28문장, OX 내용이해 10 + 어법 고치기 10)·선생님 화면 🙋 한눈에 보기(자기주도 화목/수금 완료·미완료, 전 학년 일일학습 날짜별·7일 성실 기록)·시트 저장 응답 확인+자동 재시도 대기열+일일완료/자기주도완주 행·새로고침 버튼 옆 버전 표시 / v154 수지중1·수지중2 3단계 교과서 본문 OX 내용이해를 한글 5문장 + 영어 5문장으로(정답 O/X 5:5 균형, 해설은 한국어 유지) / v155 예비고1 자기주도 3단계 신설 — 빠바 기초세우기 13강(관계사의 이해 1, 11/26~11/30) → 14강(관계사의 이해 2, 12/1부터) 자동 전환, 강마다 관계사 문법 20 + 지문 OX 10(한글 5·영어 5) / v156 예비고1 자기주도 2단계 — 빠바 기초세우기 13강(11/26~11/30)·14강(12/1부터) 문법 설명 대표 예문 28문장씩 문장 배열 - index.html / v157 🎯 스페셜 숙제를 학생 폰으로 실제 전달(반별 시각 비교·보내기 전 합치기, 옛 기본 숙제 제거)·수지중1·2 어법 고치기 보기 섞기(정답 ① 쏠림 해소)·예비고1 2단계 강 예문 28문장 전부·새벽 부엉이 문구 - index.html / v158 예비고1 빠바 13강(관계사) 5지문 독해·변형 50제 + 집 숙제·배너 13강 연결 / v159 자기주도 이어하기 기록 학생별 저장(다른 학생 이름·반으로 바뀌던 문제) / v160 수지중1·2 기말 집중(~12/13): 오늘의 학습·집 숙제 단어를 시험범위 세트만, 능률보카 멈춤 / v161 수업일에도 단어 목록 항상 펼침 / v162 예비고1 어원편 11/26부터 Day 20 차례대로(Day 1 초기화 방지) / v163 자기주도 단어 암기 화면 최소 1~2분 뒤 시험 / v164 예비고1 자기주도 Day 4개 채우기 / v165 홍천고1 단어 = 외부지문 1~16 + 10월 모의 6지문 (어원편 대신) / v166 로그인 화면 반 목록을 서버 응답 전에 기본 10개로 즉시 표시(index.html) / v167 자기주도 이어하기 — 3시간 제한 폐지(오늘 하루 종일)·기기가 바뀌어도 ntfy 원격 스냅샷으로 이어하기·[처음부터] 2단 확인·홈 카드 진행률 표시(index.html) / v168 선생님 한눈에 보기·자기주도 현황판이 구글 시트 진도DB의 '자기주도완주' 행을 함께 확인 — ntfy 기록이 빠진 학생도 오늘 완주로 표시(index.html) / v169 날짜별·알림톡 — 자기주도 수업일(수지중1 수·금 / 수지중2·예비고1 화·목)은 '자기주도완주'가 있어야 완료로 표시(단어만 한 학생은 진행 중·미완료), 완주 학생 문구에 2단계 문장배열·3단계 문법/독해OX 점수와 전체 완주(소요 시간·이탈) 표시, 완주 시 2·3단계 점수도 진도DB에 저장(index.html) / v170 일일 단어 테스트(⑦ 마지막 테스트)와 자기주도 1단계 단어 시험 모두 80점 이상이어야 통과·완료(80점 미만은 재시험 필요·다시 시험 보기) - index.html / v171 문법 필수 구문 세트 2개(동명사 관용표현 72·수동태 전치사 관용표현 65, 수지중1·2·예비고1·고등 4반) + 뜻 겹치는 표현 오답 보기 제외 - index.html / v172 필수 구문 세트 137개 전부 카드 예문·해석 추가(수동태 57개는 프린트 예문) - index.html / v173 자기주도 1단계 안내 오타(재시험을 보게)·시작 화면 시험 문항 수를 실제 문항 수(기말 testEach)로 표시 - index.html / v174 🎧 예비고1 모의고사 영어듣기 신설(listening.html) — 2024·2025·2026학년도 고1·고2 전국연합학력평가 3·6·9·10월 24회 듣기 mp3(모노 48k)·문제·정답·대본·문항별 시작 초, 학년/연도 탭·배속 0.8/1.0/1.2·문항별 다시 듣기·대본 보기·최고점 저장·진도DB 저장 - index.html·listening.html / v175 ✅ 숙제 1초 체크 ⇄ 📅 날짜별·알림톡 한 문구 통합(숙제 완료·미완료 + 그날 온라인·자기주도 결과를 학부모 문자 하나로, 두 화면 같은 문구)·📩 학부모 리포트 펼칠 때 마지막 학생까지 스크롤되게 수정(index.html) / v178 예비고1 자기주도 🎧 0단계 듣기평가 — 수업마다 전국모의고사 듣기 17문항 1회분(고1 3월부터)을 자기주도 화면 안에서 풀고 채점해야 1단계 단어가 열림(index.html·listening.html)
const CACHE_NAME = 'topedu-pwa-v178';
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
