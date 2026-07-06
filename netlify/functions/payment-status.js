// netlify/functions/payment-status.js
// 결제창이 닫힌 뒤 tid로 최종 결제 상태를 조회합니다.
// GET /.netlify/functions/payment-status?tid=ORDER_xxxxx

const { SERVER_URL, hasCredentials, getToken, json } = require('./_winpay');

exports.handler = async (event) => {
  if (event.httpMethod !== 'GET') {
    return json(405, { success: false, message: 'GET만 허용됩니다.' });
  }

  if (!hasCredentials()) {
    return json(500, { success: false, message: '결제 자격증명이 설정되지 않았습니다.' });
  }

  const tid = (event.queryStringParameters && event.queryStringParameters.tid) || '';
  if (!tid) {
    return json(400, { success: false, message: 'tid가 필요합니다.' });
  }

  try {
    const token = await getToken();
    const res = await fetch(`${SERVER_URL}/api/payment/status/${encodeURIComponent(tid)}`, {
      method: 'GET',
      headers: { 'Authorization': `Bearer ${token}` },
    });

    if (!res.ok) {
      return json(200, { success: false, message: `상태 조회 실패 (${res.status})` });
    }
    const data = await res.json();
    return json(200, data);
  } catch (err) {
    return json(502, { success: false, message: '상태 조회 통신 오류: ' + err.message });
  }
};
