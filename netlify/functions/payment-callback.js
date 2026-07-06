// netlify/functions/payment-callback.js
// 윈글로벌페이가 결제 완료 후 호출/이동하는 returnUrl.
// 결과 파라미터를 받아 부모 창(장바구니)에 알리고 팝업을 닫습니다.

exports.handler = async (event) => {
  // GET(쿼리) / POST(폼) 양쪽에서 결과 파라미터 수집
  let params = {};
  if (event.httpMethod === 'POST' && event.body) {
    const ct = (event.headers['content-type'] || event.headers['Content-Type'] || '');
    if (ct.includes('application/json')) {
      try { params = JSON.parse(event.body); } catch (e) { params = {}; }
    } else {
      params = Object.fromEntries(new URLSearchParams(event.body));
    }
  } else {
    params = event.queryStringParameters || {};
  }

  // 성공 여부 추정: success=true 또는 결과코드 0000 등
  const successFlag = String(params.success);
  const resultCode = params.resultCode || params.resultCd || params.code || '';
  const isSuccess =
    successFlag === 'true' ||
    resultCode === '0000' ||
    resultCode === '00';

  const tid = params.tid || params.ordNo || '';
  const message = params.message || params.resultMsg || (isSuccess ? '결제가 완료되었습니다.' : '결제가 취소되었거나 실패했습니다.');

  const payload = JSON.stringify({ type: 'WINPAY_RESULT', success: isSuccess, tid, message, raw: params });

  const html = `<!DOCTYPE html><html lang="ko"><head><meta charset="UTF-8">
<title>결제 결과 처리 중…</title>
<style>body{font-family:'Malgun Gothic',sans-serif;display:flex;align-items:center;justify-content:center;height:100vh;margin:0;color:#333;}</style>
</head><body>
<div>결제 결과를 처리하고 있습니다…</div>
<script>
  var data = ${payload};
  try {
    if (window.opener && !window.opener.closed) {
      window.opener.postMessage(data, '*');
      window.close();
    } else {
      // 팝업이 아니라 리다이렉트로 온 경우 결과 페이지로 이동
      location.replace('/order-complete.html?success=' + data.success + '&tid=' + encodeURIComponent(data.tid) + '&message=' + encodeURIComponent(data.message));
    }
  } catch (e) {
    location.replace('/order-complete.html?success=' + data.success + '&tid=' + encodeURIComponent(data.tid));
  }
</script>
</body></html>`;

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' },
    body: html,
  };
};
