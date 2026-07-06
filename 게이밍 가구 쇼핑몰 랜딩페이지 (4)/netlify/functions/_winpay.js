// netlify/functions/_winpay.js
// 윈글로벌페이 공통 헬퍼 — PayKey는 서버(환경변수)에서만 사용되고 브라우저로 절대 나가지 않습니다.

const SERVER_URL = process.env.WINPAY_SERVER_URL || 'https://jh.winglobalpay.com';
const TMN_ID = process.env.WINPAY_TMN_ID || '';
const PAYKEY = process.env.WINPAY_PAYKEY || '';
// 배포된 사이트 주소 (returnUrl/redirectUrl 구성용). 예: https://your-site.netlify.app
const SITE_URL = process.env.SITE_URL || '';

// 자격증명이 세팅되어 있는지
function hasCredentials() {
  return Boolean(TMN_ID && PAYKEY);
}

// 터미널 로그인 → 결제용 JWT 발급
async function getToken() {
  const res = await fetch(`${SERVER_URL}/api/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${PAYKEY}`,
    },
    body: JSON.stringify({ tmnId: TMN_ID }),
  });
  if (!res.ok) throw new Error(`터미널 인증 실패 (${res.status})`);
  const data = await res.json();
  if (!data.token) throw new Error('토큰을 받지 못했습니다.');
  return data.token;
}

// JSON 응답 헬퍼
function json(statusCode, obj) {
  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
    },
    body: JSON.stringify(obj),
  };
}

module.exports = { SERVER_URL, TMN_ID, PAYKEY, SITE_URL, hasCredentials, getToken, json };
