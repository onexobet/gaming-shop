// netlify/functions/create-payment.js
// 브라우저 → (이 함수) → 윈글로벌페이 결제요청. 카드 결제 전용.
// 브라우저는 PayKey를 모르고, 서버가 대신 로그인하여 결제 URL만 돌려줍니다.

const { SERVER_URL, TMN_ID, SITE_URL, hasCredentials, getToken, json } = require('./_winpay');
const PRICES = require('./_prices');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return json(405, { success: false, message: 'POST만 허용됩니다.' });
  }

  if (!hasCredentials()) {
    return json(500, {
      success: false,
      message: '결제 자격증명이 설정되지 않았습니다. Netlify 환경변수(WINPAY_TMN_ID, WINPAY_PAYKEY)를 등록하세요.',
    });
  }

  let body;
  try {
    body = JSON.parse(event.body || '{}');
  } catch (e) {
    return json(400, { success: false, message: '요청 형식이 올바르지 않습니다.' });
  }

  const ordNm = (body.ordNm || '').trim();
  const email = (body.email || '').trim();
  const productCode = (body.productCode || 'MORESEAT').trim();
  const items = Array.isArray(body.items) ? body.items : [];

  // ── 입력 검증 ──
  if (!ordNm || !email) {
    return json(400, { success: false, message: '주문 정보(주문자·이메일)가 부족합니다.' });
  }
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) {
    return json(400, { success: false, message: '유효한 이메일 주소가 아닙니다.' });
  }

  // ── 금액 재계산 (보안 핵심) ──
  // 브라우저가 보낸 금액은 신뢰하지 않고, 서버 가격표로 다시 계산합니다.
  if (items.length === 0) {
    return json(400, { success: false, message: '주문 상품이 없습니다.' });
  }
  let amount = 0;
  let names = [];
  for (const it of items) {
    const price = PRICES[String(it.id)];
    const qty = parseInt(it.qty, 10);
    if (price == null) {
      return json(400, { success: false, message: `존재하지 않는 상품입니다. (id: ${it.id})` });
    }
    if (!qty || qty <= 0) {
      return json(400, { success: false, message: '수량이 올바르지 않습니다.' });
    }
    amount += price * qty;
    names.push(it.id);
  }
  if (!amount || amount <= 0) {
    return json(400, { success: false, message: '유효한 결제 금액이 아닙니다.' });
  }
  const goodsName = (body.goodsName || (names.length > 1 ? `주문상품 ${names.length}건` : '주문상품')).trim();

  try {
    const token = await getToken();
    const tid = 'ORDER_' + Date.now();

    const res = await fetch(`${SERVER_URL}/api/payment/request`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        tid,
        amt: amount,
        tmnId: TMN_ID,
        goodsName,
        productCode,
        productType: '2',        // 실물상품
        payMethod: 'CARD',       // 신용카드
        ordNm,
        email,
        taxFreeCd: '00',         // 과세
        cashReceipt: 0,
        // 결제 완료 후 PG가 호출/이동하는 주소
        returnUrl: `${SITE_URL}/.netlify/functions/payment-callback`,
        redirectUrl: `${SITE_URL}/order-complete.html`,
      }),
    });

    const data = await res.json();

    if (data && data.success) {
      return json(200, { success: true, paymentUrl: data.paymentUrl, tid });
    }
    return json(200, { success: false, message: (data && data.message) || '결제 요청에 실패했습니다.' });
  } catch (err) {
    return json(502, { success: false, message: '결제 서버 통신 오류: ' + err.message });
  }
};
