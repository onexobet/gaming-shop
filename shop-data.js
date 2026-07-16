// MORESEAT 공유 상품/카테고리/후기 데이터 (프로토타입)
const P = (id, w) => `https://images.unsplash.com/photo-${id}?fm=jpg&q=75&w=${w || 900}&auto=format&fit=crop`;

const D = [
  '1636487658592-db4db6e729a7', '1636487658581-a7d60d465e35', '1723792306904-c417c0da40e3',
  '1636489953081-c4ebbd50fa3a', '1636488363495-a06805603784', '1610366398516-46da9dec5931',
  '1601467075935-7e5c5c607074', '1708481480603-b47ea65c80b6', '1614624532983-4ce03382d63d',
  '1495954222046-2c427ecb546d', '1603481588273-2f908a9a7a1b', '1594501252356-79ebbbb10dd9',
  '1518455027359-f3f8164ba6bd', '1611486212557-88be5ff6f941', '1593062096033-9a26b09da705',
  '1519710164239-da123dc03ef4', '1497215728101-856f4ea42174', '1533090161767-e6ffed986c88',
];
const C = [
  '1633545486613-feaf749f7805', '1628358011851-c85d8fa59557', '1676862450129-c2fc0a6ffd37',
  '1670946839270-cc4febd43b09', '1598550487031-0898b4852123', '1598550511769-875ef2a01663',
  '1612011213721-3936d387f318', '1580480095047-4aa43ab3bd1d', '1596162954151-cdcb4c0f70a8',
  '1592078615290-033ee584e267', '1580480055273-228ff5388ef8', '1505843490538-5133c6c7d0e1',
  '1519947486511-46149fa0a254', '1517705008128-361805f42e86', '1598300042247-d088f8ab3a91',
];

const CATEGORIES = [
  { slug: 'gaming-desk',    name: '게이밍 데스크',   sub: '몰입을 위한 넓은 상판',   photo: P(D[0], 800) },
  { slug: 'standing-desk',  name: '스탠딩 데스크',   sub: '앉고 서는 전동 조절',     photo: P(D[3], 800) },
  { slug: 'corner-desk',    name: '코너·L형 데스크', sub: '듀얼모니터 여유 공간',    photo: P(D[6], 800) },
  { slug: 'compact-desk',   name: '컴팩트 데스크',   sub: '작은 방에 딱 맞는 크기',  photo: P(D[9], 800) },
  { slug: 'gaming-chair',   name: '게이밍 체어',     sub: '장시간에도 편안하게',     photo: P(C[1], 800) },
  { slug: 'ergonomic-chair',name: '인체공학 체어',   sub: '바른 자세를 지켜주는',    photo: P(C[7], 800) },
  { slug: 'mesh-chair',     name: '메쉬 체어',       sub: '사계절 통기성 데일리',    photo: P(C[6], 800) },
  { slug: 'accessory',      name: '데스크 주변기기',   sub: '셋업을 완성하는 주변기기', photo: P('1616763355548-1b606f439f86', 800) },
];

const PRODUCTS = [
  // ── 게이밍 데스크 (7)
  { id: 1,  catSlug: 'gaming-desk', name: 'VORTEX 게이밍 데스크 1400', price: 219000, stock: 34, rating: 4.8, reviews: 126, featured: true,  badge: 'BEST',
    desc: 'RGB 라이트 채널과 헤드셋 홀더를 갖춘 1400mm 게이밍 데스크.', photo: P(D[0]),
    features: ['1400×600mm 카본 텍스처 상판', 'RGB 라이트 스트립 내장', '헤드셋 홀더·컵홀더 기본'] },
  { id: 2,  catSlug: 'gaming-desk', name: 'VORTEX RGB 데스크 1600', price: 289000, stock: 21, rating: 4.9, reviews: 88, featured: true, badge: 'NEW',
    desc: '넓은 1600mm 상판과 앱 제어 RGB로 완성하는 프로게이머 셋업.', photo: P(D[1]),
    features: ['1600×700mm 대형 상판', '앱 제어 RGB 조명', '풀사이즈 마우스패드 포함'] },
  { id: 3,  catSlug: 'gaming-desk', name: 'NEXUS 카본 게이밍 데스크', price: 259000, stock: 12, rating: 4.7, reviews: 54, featured: false, badge: '',
    desc: '견고한 Z형 스틸 프레임과 카본 상판의 밸런스형 게이밍 데스크.', photo: P(D[2]),
    features: ['Z형 스틸 프레임', '카본 텍스처 상판', '케이블 트레이 기본'] },
  { id: 4,  catSlug: 'gaming-desk', name: 'PHANTOM 곡면 게이밍 데스크 1500', price: 269000, stock: 18, rating: 4.8, reviews: 63, featured: false, badge: '',
    desc: '몸을 감싸는 곡면 설계로 몰입감을 높인 1500mm 데스크.', photo: P(D[4]),
    features: ['인체공학 곡면 상판', '넓은 팔 지지 공간', '무광 스크래치 방지 코팅'] },
  { id: 5,  catSlug: 'gaming-desk', name: 'STRIKE 컴뱃 게이밍 데스크 1200', price: 189000, stock: 40, rating: 4.6, reviews: 47, featured: false, badge: '',
    desc: '가성비 좋은 입문형 1200mm 게이밍 데스크.', photo: P(D[10]),
    features: ['1200×600mm 상판', '헤드셋 후크', '조립 20분 완성'] },
  { id: 6,  catSlug: 'gaming-desk', name: 'APEX ARENA 대형 게이밍 데스크 1800', price: 349000, stock: 9, rating: 4.9, reviews: 72, featured: true, badge: '',
    desc: '트리플 모니터도 여유로운 1800mm 대형 게이밍 데스크.', photo: P(D[7]),
    features: ['1800×800mm 초대형 상판', '트리플 모니터 지원', '강화 스틸 프레임'] },
  { id: 7,  catSlug: 'gaming-desk', name: 'PULSE 미니 게이밍 데스크 1000', price: 159000, stock: 28, rating: 4.5, reviews: 33, featured: false, badge: '',
    desc: '좁은 방에도 들어가는 1000mm 콤팩트 게이밍 데스크.', photo: P(D[2]),
    features: ['1000×550mm 상판', 'RGB 라이트 후면', '컵홀더 기본'] },

  // ── 스탠딩 데스크 (6)
  { id: 8,  catSlug: 'standing-desk', name: 'ELEVATE 전동 데스크', price: 389000, stock: 42, rating: 4.9, reviews: 210, featured: true, badge: 'BEST',
    desc: '버튼 하나로 앉고 서는 전동 높이조절, 4단 메모리 지원.', photo: P(D[3]),
    features: ['전동 높이조절 72~120cm', '4단 높이 메모리', '최대 하중 80kg'] },
  { id: 9,  catSlug: 'standing-desk', name: 'ELEVATE 듀얼모터 데스크', price: 459000, stock: 18, rating: 4.9, reviews: 76, featured: true, badge: 'NEW',
    desc: '듀얼 모터로 더 조용하고 빠르게. 무거운 셋업도 흔들림 없이.', photo: P(D[4]),
    features: ['듀얼 모터 초저소음', '최대 하중 120kg', '충돌 방지 센서'] },
  { id: 10, catSlug: 'standing-desk', name: 'RISE 수동 스탠딩 데스크', price: 179000, stock: 27, rating: 4.6, reviews: 41, featured: false, badge: '',
    desc: '크랭크 방식으로 부담 없이 시작하는 스탠딩 데스크.', photo: P(D[5]),
    features: ['크랭크 수동 조절', '73~118cm 조절 범위', '방수 멜라민 상판'] },
  { id: 11, catSlug: 'standing-desk', name: 'LIFT 컴팩트 전동 데스크', price: 299000, stock: 22, rating: 4.7, reviews: 58, featured: false, badge: '',
    desc: '원룸에 맞는 작은 사이즈의 전동 스탠딩 데스크.', photo: P(D[7]),
    features: ['1000mm 컴팩트 상판', '3단 메모리', '조용한 단일 모터'] },
  { id: 12, catSlug: 'standing-desk', name: 'SUMMIT 프리미엄 전동 데스크', price: 549000, stock: 7, rating: 4.9, reviews: 39, featured: false, badge: '',
    desc: '원목 상판과 3단 컬럼으로 완성한 최상위 전동 데스크.', photo: P(D[5]),
    features: ['3단 컬럼 초저소음', '천연 원목 상판', '최대 하중 140kg'] },
  { id: 13, catSlug: 'standing-desk', name: 'FLOW 스탠딩 컨버터', price: 129000, stock: 31, rating: 4.5, reviews: 44, featured: false, badge: '',
    desc: '기존 책상 위에 올려 쓰는 높이조절 스탠딩 컨버터.', photo: P(D[11]),
    features: ['설치 불필요·올려두기', '가스 스프링 높이조절', '키보드 트레이 포함'] },

  // ── 코너·L형 데스크 (5)
  { id: 14, catSlug: 'corner-desk', name: 'CORNER L-데스크', price: 259000, stock: 15, rating: 4.7, reviews: 63, featured: true, badge: '',
    desc: 'L자형 코너 설계로 듀얼 모니터와 작업 공간을 넉넉하게.', photo: P(D[6]),
    features: ['L자 코너 설계', '듀얼 모니터 최적', '케이블 트레이 포함'] },
  { id: 15, catSlug: 'corner-desk', name: 'CORNER XL 코너 데스크', price: 319000, stock: 9, rating: 4.8, reviews: 37, featured: false, badge: '',
    desc: '넓은 XL 코너 상판으로 방송·작업까지 한 번에.', photo: P(D[7]),
    features: ['1800mm XL 코너 상판', '모니터암 호환', '수납 선반 2단'] },
  { id: 16, catSlug: 'corner-desk', name: 'ANGLE 세폭 코너 데스크', price: 229000, stock: 20, rating: 4.6, reviews: 28, featured: false, badge: '',
    desc: '벽 코너에 딱 맞는 세폭 설계, 공간 활용 극대화.', photo: P(D[8]),
    features: ['코너 맞춤 세폭 설계', '스틸 X 프레임', '높이 조절 발통'] },
  { id: 17, catSlug: 'corner-desk', name: 'UNITY ㄷ자 코너 데스크', price: 379000, stock: 6, rating: 4.8, reviews: 24, featured: false, badge: 'NEW',
    desc: '세 방향을 감싸는 ㄷ자 배치로 작업 몰입을 극대화.', photo: P(D[2]),
    features: ['ㄷ자 3면 배치', '모듈형 결합', '넉넉한 수납 공간'] },
  { id: 18, catSlug: 'corner-desk', name: 'NOOK 우드 코너 데스크', price: 279000, stock: 13, rating: 4.7, reviews: 31, featured: false, badge: '',
    desc: '따뜻한 우드톤으로 인테리어에 어울리는 코너 데스크.', photo: P(D[9]),
    features: ['우드 무늬 상판', 'L자 코너', '라운드 모서리 가공'] },

  // ── 컴팩트 데스크 (6)
  { id: 19, catSlug: 'compact-desk', name: 'COMPACT 1200 데스크', price: 149000, stock: 55, rating: 4.7, reviews: 92, featured: true, badge: 'BEST',
    desc: '작은 방에도 딱 맞는 1200mm 컴팩트, 견고한 스틸 프레임.', photo: P(D[9]),
    features: ['1200×600mm 상판', '견고한 스틸 프레임', '방수 코팅 상판'] },
  { id: 20, catSlug: 'compact-desk', name: 'COMPACT 1000 미니 데스크', price: 119000, stock: 48, rating: 4.5, reviews: 60, featured: false, badge: '',
    desc: '원룸·기숙사에 최적화된 1000mm 미니 데스크.', photo: P(D[10]),
    features: ['1000×550mm 컴팩트', '조립 10분 완성', '3색 상판 선택'] },
  { id: 21, catSlug: 'compact-desk', name: 'STUDY 학생 데스크 1200', price: 139000, stock: 33, rating: 4.6, reviews: 45, featured: false, badge: '',
    desc: '수납 선반이 있는 학생용 데스크, 공부방에 안성맞춤.', photo: P(D[11]),
    features: ['상단 수납 선반', '눈부심 없는 무광 상판', '넉넉한 다리 공간'] },
  { id: 22, catSlug: 'compact-desk', name: 'SLIM 폭좁은 데스크 800', price: 99000, stock: 62, rating: 4.4, reviews: 38, featured: false, badge: '',
    desc: '폭 400mm 슬림 설계로 좁은 공간에 딱.', photo: P(D[8]),
    features: ['800×400mm 슬림', '벽면 밀착 설치', '경량 프레임'] },
  { id: 23, catSlug: 'compact-desk', name: 'FOLD 접이식 데스크', price: 89000, stock: 41, rating: 4.3, reviews: 29, featured: false, badge: '',
    desc: '안 쓸 때 접어두는 공간 절약형 접이식 데스크.', photo: P(D[7]),
    features: ['원터치 접이식', '이동 편한 경량', '보관 시 두께 8cm'] },
  { id: 24, catSlug: 'compact-desk', name: 'CUBE 수납형 데스크', price: 169000, stock: 26, rating: 4.6, reviews: 34, featured: false, badge: '',
    desc: '서랍과 선반이 있어 정리까지 되는 컴팩트 데스크.', photo: P(D[2]),
    features: ['3단 서랍 내장', '측면 수납 선반', '1200mm 상판'] },

  // ── 게이밍 체어 (8)
  { id: 25, catSlug: 'gaming-chair', name: 'RECON 리클라이닝 체어', price: 229000, stock: 24, rating: 4.7, reviews: 118, featured: true, badge: 'BEST',
    desc: '최대 155° 리클라이닝과 풋레스트로 게임과 휴식을 한 번에.', photo: P(C[0]),
    features: ['155° 리클라이닝', '풋레스트 내장', '요추·목 쿠션 포함'] },
  { id: 26, catSlug: 'gaming-chair', name: 'TITAN 게이밍 체어', price: 279000, stock: 16, rating: 4.8, reviews: 71, featured: true, badge: 'NEW',
    desc: '넓은 좌판과 4D 팔걸이로 대형 체형도 편안한 게이밍 체어.', photo: P(C[1]),
    features: ['와이드 좌판', '4D 팔걸이', '최대 하중 130kg'] },
  { id: 27, catSlug: 'gaming-chair', name: 'BLAZE 레이싱 체어', price: 199000, stock: 30, rating: 4.5, reviews: 52, featured: false, badge: '',
    desc: '레이싱 버킷 디자인의 감성 게이밍 체어.', photo: P(C[2]),
    features: ['버킷 시트 디자인', '2D 팔걸이', '통기성 PU 레더'] },
  { id: 28, catSlug: 'gaming-chair', name: 'VENOM 프로 게이밍 체어', price: 329000, stock: 11, rating: 4.9, reviews: 66, featured: false, badge: '',
    desc: '프로 선수용 세팅을 담은 하이엔드 게이밍 체어.', photo: P(C[4]),
    features: ['메모리폼 시트', '마그네틱 헤드필로우', '5년 무상 A/S'] },
  { id: 29, catSlug: 'gaming-chair', name: 'ROOKIE 입문 게이밍 체어', price: 149000, stock: 45, rating: 4.4, reviews: 43, featured: false, badge: '',
    desc: '처음 시작하기 좋은 가성비 게이밍 체어.', photo: P(C[5]),
    features: ['기본 리클라이닝 135°', '2D 팔걸이', '3색 컬러'] },
  { id: 30, catSlug: 'gaming-chair', name: 'COMMANDER 대형 게이밍 체어', price: 359000, stock: 8, rating: 4.8, reviews: 37, featured: false, badge: '',
    desc: '큰 체형을 위한 초대형 프레임 게이밍 체어.', photo: P(C[1]),
    features: ['최대 하중 150kg', '와이드 등판', '강화 가스실린더'] },
  { id: 31, catSlug: 'gaming-chair', name: 'FURY 컴팩트 게이밍 체어', price: 179000, stock: 33, rating: 4.5, reviews: 40, featured: false, badge: '',
    desc: '작은 체형과 좁은 방에 맞춘 컴팩트 게이밍 체어.', photo: P(C[2]),
    features: ['컴팩트 사이즈', '허리 쿠션 포함', '조용한 캐스터'] },
  { id: 32, catSlug: 'gaming-chair', name: 'STORM RGB 게이밍 체어', price: 309000, stock: 14, rating: 4.7, reviews: 48, featured: false, badge: 'NEW',
    desc: '등판 RGB 조명이 들어오는 감성 게이밍 체어.', photo: P(C[0]),
    features: ['등판 RGB 조명', '리클라이닝 160°', '풋레스트 내장'] },

  // ── 인체공학 체어 (6)
  { id: 33, catSlug: 'ergonomic-chair', name: 'APEX 인체공학 체어', price: 349000, stock: 28, rating: 4.9, reviews: 187, featured: true, badge: 'BEST',
    desc: '요추 지지대·3D 헤드레스트·4D 팔걸이 풀옵션 인체공학 체어.', photo: P(C[3]),
    features: ['조절식 요추 지지대', '3D 헤드레스트', '4D 팔걸이'] },
  { id: 34, catSlug: 'ergonomic-chair', name: 'APEX Pro 헤드레스트 체어', price: 429000, stock: 11, rating: 4.9, reviews: 64, featured: true, badge: 'NEW',
    desc: '자동 무게 감지 틸트와 프리미엄 메쉬의 최상위 모델.', photo: P(C[4]),
    features: ['자동 체중 감지 틸트', '프리미엄 메쉬 등판', '5년 무상 A/S'] },
  { id: 35, catSlug: 'ergonomic-chair', name: 'POSTURE 요추지지 체어', price: 259000, stock: 22, rating: 4.7, reviews: 49, featured: false, badge: '',
    desc: '강력한 요추 지지로 재택근무 자세를 잡아주는 체어.', photo: P(C[5]),
    features: ['강화 요추 지지', '높이·틸트 조절', '2D 팔걸이'] },
  { id: 36, catSlug: 'ergonomic-chair', name: 'BALANCE 자동틸트 체어', price: 389000, stock: 15, rating: 4.8, reviews: 42, featured: false, badge: '',
    desc: '몸을 따라 기울어지는 자동 틸트의 인체공학 체어.', photo: P(C[8]),
    features: ['자동 틸트 메커니즘', '조절식 헤드레스트', '통기성 메쉬'] },
  { id: 37, catSlug: 'ergonomic-chair', name: 'ALIGN 메쉬 인체공학 체어', price: 299000, stock: 19, rating: 4.7, reviews: 55, featured: false, badge: '',
    desc: '메쉬 등판과 요추 지지를 결합한 인체공학 체어.', photo: P(C[6]),
    features: ['풀메쉬 등판', '허리 지지 조절', '3D 팔걸이'] },
  { id: 38, catSlug: 'ergonomic-chair', name: 'EXECUTIVE 임원용 체어', price: 519000, stock: 6, rating: 4.9, reviews: 27, featured: false, badge: '',
    desc: '가죽 마감과 묵직한 무게감의 임원용 인체공학 체어.', photo: P(C[7]),
    features: ['프리미엄 가죽 마감', '중후한 하이백', '체중 감지 리클라이닝'] },

  // ── 메쉬 체어 (5)
  { id: 39, catSlug: 'mesh-chair', name: 'FLOW 메쉬 체어', price: 179000, stock: 63, rating: 4.6, reviews: 140, featured: true, badge: 'BEST',
    desc: '통기성 풀메쉬 등판으로 사계절 쾌적한 데일리 체어.', photo: P(C[6]),
    features: ['풀메쉬 등판', '탄성 좌판', '심플 디자인'] },
  { id: 40, catSlug: 'mesh-chair', name: 'FLOW Air 풀메쉬 체어', price: 219000, stock: 26, rating: 4.7, reviews: 58, featured: false, badge: '',
    desc: '좌판까지 메쉬로 마감한 초경량 통기성 체어.', photo: P(C[7]),
    features: ['좌판까지 풀메쉬', '초경량 프레임', '헤드레스트 옵션'] },
  { id: 41, catSlug: 'mesh-chair', name: 'BREEZE 데일리 메쉬 체어', price: 139000, stock: 44, rating: 4.5, reviews: 39, featured: false, badge: '',
    desc: '가성비 좋은 입문형 메쉬 체어, 어디에나 잘 어울리는 디자인.', photo: P(C[6]),
    features: ['통기성 메쉬', '조립 간편', '3색 선택'] },
  { id: 42, catSlug: 'mesh-chair', name: 'AERO 경량 메쉬 체어', price: 189000, stock: 30, rating: 4.6, reviews: 34, featured: false, badge: '',
    desc: '가볍게 움직이는 경량 프레임의 메쉬 체어.', photo: P(C[8]),
    features: ['초경량 5kg대', '롤링 캐스터', '허리 지지 곡선'] },
  { id: 43, catSlug: 'mesh-chair', name: 'COOL 통풍 메쉬 체어', price: 159000, stock: 37, rating: 4.5, reviews: 31, featured: false, badge: '',
    desc: '여름에도 시원한 강력 통풍 메쉬 체어.', photo: P(C[2]),
    features: ['3D 입체 메쉬', '통풍 극대화 설계', '높이 조절'] },

  // ── 모니터암·액세서리 (4)
  { id: 44, catSlug: 'accessory', name: '모니터 스탠드 라이저', price: 59000, stock: 80, rating: 4.7, reviews: 96, featured: false, badge: '',
    desc: '모니터를 눈높이로 올려주는 원목 상판 모니터 스탠드.', photo: P('1616763355548-1b606f439f86'),
    features: ['원목 상판','하부 수납 공간','미끄럼 방지 패드'] },
  { id: 45, catSlug: 'accessory', name: '27형 QHD 모니터', price: 99000, stock: 47, rating: 4.8, reviews: 62, featured: true, badge: '',
    desc: '선명한 QHD 해상도의 27인치 사무·작업용 모니터.', photo: P('1527443154391-507e9dc6c5cc'),
    features: ['QHD 2560×1440','75Hz IPS 패널','플리커 프리'] },
  { id: 46, catSlug: 'accessory', name: '무선 오버이어 헤드셋', price: 29000, stock: 120, rating: 4.6, reviews: 33, featured: false, badge: '',
    desc: '노이즈 캔슬링을 지원하는 무선 오버이어 헤드셋.', photo: P('1550009158-9ebf69173e03'),
    features: ['액티브 노이즈 캔슬링','최대 30시간 재생','저지연 게이밍 모드'] },
  { id: 47, catSlug: 'accessory', name: 'RGB 게이밍 라이트바', price: 39000, stock: 95, rating: 4.7, reviews: 51, featured: false, badge: '',
    desc: '책상 뒤를 밝히는 RGB 앰비언트 라이트바.', photo: P('1593305841991-05c297ba4575'),
    features: ['1600만 컬러','앱 제어','USB 전원'] },

  // ── 프리미엄 · 미니멀 라인
  { id: 48, catSlug: 'gaming-desk', name: 'MONO 게이밍 데스크 1600', price: 329000, stock: 17, rating: 4.8, reviews: 0, featured: true, badge: 'NEW',
    desc: '무광 블랙 상판의 미니멀 게이밍 데스크. 군더더기 없는 라인이 공간을 정돈합니다.', photo: P(D[2]),
    features: ['1600×700mm 무광 상판', '히든 케이블 채널', '논슬립 풋 패드'] },
  { id: 49, catSlug: 'gaming-desk', name: 'EDGE 프리미엄 게이밍 데스크', price: 379000, stock: 10, rating: 4.9, reviews: 0, featured: false, badge: '',
    desc: '엣지 마감을 살린 프리미엄 게이밍 데스크. 견고함과 감각을 동시에.', photo: P(D[7]),
    features: ['CNC 엣지 가공', '강화 스틸 프레임', '매트 텍스처 상판'] },
  { id: 50, catSlug: 'standing-desk', name: 'PURE 전동 스탠딩 데스크', price: 429000, stock: 14, rating: 4.9, reviews: 0, featured: true, badge: '',
    desc: '버튼과 라인만 남긴 순수한 디자인의 전동 데스크.', photo: P(D[4]),
    features: ['초저소음 전동 모터', '메모리 4단', '심리스 컨트롤러'] },
  { id: 51, catSlug: 'standing-desk', name: 'LINE 슬림 전동 데스크', price: 399000, stock: 12, rating: 4.8, reviews: 0, featured: false, badge: '',
    desc: '얇은 상판과 슬림 프레임으로 완성한 미니멀 전동 데스크.', photo: P(D[3]),
    features: ['18mm 슬림 상판', '듀얼 스테이지 컬럼', '터치 컨트롤'] },
  { id: 52, catSlug: 'corner-desk', name: 'ARC 코너 데스크', price: 349000, stock: 9, rating: 4.8, reviews: 0, featured: false, badge: '',
    desc: '부드러운 곡선 코너의 프리미엄 L형 데스크.', photo: P(D[6]),
    features: ['라운드 코너 가공', 'L형 와이드 상판', '케이블 매니지먼트'] },
  { id: 53, catSlug: 'corner-desk', name: 'FRAME L형 프리미엄 데스크', price: 389000, stock: 7, rating: 4.9, reviews: 0, featured: false, badge: '',
    desc: '프레임 라인을 강조한 건축적 디자인의 코너 데스크.', photo: P(D[8]),
    features: ['알루미늄 프레임', 'L형 확장 상판', '높이 조절 풋'] },
  { id: 54, catSlug: 'compact-desk', name: 'MUJI 미니멀 데스크 1000', price: 169000, stock: 30, rating: 4.7, reviews: 0, featured: true, badge: '',
    desc: '어떤 공간에도 어울리는 담백한 미니멀 데스크.', photo: P(D[9]),
    features: ['1000×550mm 상판', '내추럴 톤', '조립 간편'] },
  { id: 55, catSlug: 'compact-desk', name: 'NOTE 원목 컴팩트 데스크', price: 189000, stock: 22, rating: 4.8, reviews: 0, featured: false, badge: '',
    desc: '따뜻한 원목 질감의 컴팩트 데스크.', photo: P(D[11]),
    features: ['천연 원목 무늬', '라운드 엣지', '컴팩트 사이즈'] },
  { id: 56, catSlug: 'gaming-chair', name: 'ONYX 프리미엄 게이밍 체어', price: 389000, stock: 11, rating: 4.9, reviews: 0, featured: true, badge: 'NEW',
    desc: '올블랙 톤으로 정제한 프리미엄 게이밍 체어.', photo: P(C[1]),
    features: ['프리미엄 PU 레더', '4D 팔걸이', '메모리폼 시트'] },
  { id: 57, catSlug: 'gaming-chair', name: 'CARBON 게이밍 체어', price: 349000, stock: 13, rating: 4.8, reviews: 0, featured: false, badge: '',
    desc: '카본 텍스처로 마감한 절제된 디자인의 게이밍 체어.', photo: P(C[4]),
    features: ['카본 텍스처', '틸트 락', '조용한 캐스터'] },
  { id: 58, catSlug: 'ergonomic-chair', name: 'SIGNATURE 인체공학 체어', price: 559000, stock: 6, rating: 4.9, reviews: 0, featured: true, badge: 'BEST',
    desc: '브랜드의 정수를 담은 플래그십 인체공학 체어.', photo: P(C[3]),
    features: ['자동 무게 감지 틸트', '프리미엄 메쉬', '5년 무상 A/S'] },
  { id: 59, catSlug: 'ergonomic-chair', name: 'ZEN 이그제큐티브 체어', price: 489000, stock: 8, rating: 4.9, reviews: 0, featured: false, badge: '',
    desc: '고요한 라인의 이그제큐티브 인체공학 체어.', photo: P(C[7]),
    features: ['하이백 설계', '조절식 요추', '무광 알루미늄 베이스'] },
  { id: 60, catSlug: 'mesh-chair', name: 'AIR 프리미엄 메쉬 체어', price: 259000, stock: 20, rating: 4.8, reviews: 0, featured: false, badge: '',
    desc: '가볍고 통기성 좋은 프리미엄 풀메쉬 체어.', photo: P(C[6]),
    features: ['풀메쉬 등판', '경량 프레임', '헤드레스트 옵션'] },
  { id: 61, catSlug: 'mesh-chair', name: 'PURE 메쉬 체어', price: 229000, stock: 24, rating: 4.7, reviews: 0, featured: false, badge: '',
    desc: '심플함의 정석, 데일리 프리미엄 메쉬 체어.', photo: P(C[8]),
    features: ['3D 입체 메쉬', '틸트 조절', '미니멀 디자인'] },
  { id: 62, catSlug: 'accessory', name: '무선 멤브레인 키보드', price: 119000, stock: 40, rating: 4.8, reviews: 0, featured: true, badge: '',
    desc: '조용한 타건감의 무선 멤브레인 키보드.', photo: P('1587829741301-dc798b83add3'),
    features: ['저소음 멤브레인','2.4G 무선','풀사이즈 배열'] },
  { id: 63, catSlug: 'accessory', name: '슬림 무선 키보드', price: 59000, stock: 60, rating: 4.8, reviews: 0, featured: false, badge: '',
    desc: '얇고 가벼운 미니멀 슬림 무선 키보드.', photo: P('1541140532154-b024d705b90a'),
    features: ['초슬림 디자인','팬터그래프 키','멀티페어링'] },

  // ── 추가 컬렉션
  { id: 64, catSlug: 'gaming-desk', name: 'AXIS 게이밍 데스크', price: 210000, stock: 32, rating: 4.7, reviews: 0, featured: false, badge: '',
    desc: '미니멀한 라인으로 정돈한 게이밍 데스크.', photo: P(D[0]),
    features: ['와이드 무광 상판','히든 케이블 채널','견고한 스틸 프레임'] },
  { id: 65, catSlug: 'gaming-desk', name: 'VESTA 게이밍 데스크', price: 234000, stock: 33, rating: 4.7, reviews: 0, featured: false, badge: '',
    desc: '미니멀한 라인으로 정돈한 게이밍 데스크.', photo: P(D[1]),
    features: ['와이드 무광 상판','히든 케이블 채널','견고한 스틸 프레임'] },
  { id: 66, catSlug: 'gaming-desk', name: 'LUMEN 게이밍 데스크', price: 258000, stock: 34, rating: 4.7, reviews: 0, featured: false, badge: 'NEW',
    desc: '미니멀한 라인으로 정돈한 게이밍 데스크.', photo: P(D[2]),
    features: ['와이드 무광 상판','히든 케이블 채널','견고한 스틸 프레임'] },
  { id: 67, catSlug: 'gaming-desk', name: 'NOVA 게이밍 데스크', price: 282000, stock: 35, rating: 4.7, reviews: 0, featured: false, badge: '',
    desc: '미니멀한 라인으로 정돈한 게이밍 데스크.', photo: P(D[4]),
    features: ['와이드 무광 상판','히든 케이블 채널','견고한 스틸 프레임'] },
  { id: 68, catSlug: 'gaming-desk', name: 'ORBIT 게이밍 데스크', price: 306000, stock: 36, rating: 4.7, reviews: 0, featured: false, badge: '',
    desc: '미니멀한 라인으로 정돈한 게이밍 데스크.', photo: P(D[7]),
    features: ['와이드 무광 상판','히든 케이블 채널','견고한 스틸 프레임'] },
  { id: 69, catSlug: 'standing-desk', name: 'HALO 전동 스탠딩 데스크', price: 360000, stock: 37, rating: 4.7, reviews: 0, featured: false, badge: '',
    desc: '앉고 서는 리듬을 만드는 전동 스탠딩 데스크.', photo: P(D[3]),
    features: ['전동 높이조절','메모리 4단','초저소음 모터'] },
  { id: 70, catSlug: 'standing-desk', name: 'ATLAS 전동 스탠딩 데스크', price: 386000, stock: 38, rating: 4.7, reviews: 0, featured: false, badge: '',
    desc: '앉고 서는 리듬을 만드는 전동 스탠딩 데스크.', photo: P(D[4]),
    features: ['전동 높이조절','메모리 4단','초저소음 모터'] },
  { id: 71, catSlug: 'standing-desk', name: 'ECHO 전동 스탠딩 데스크', price: 412000, stock: 39, rating: 4.7, reviews: 0, featured: false, badge: '',
    desc: '앉고 서는 리듬을 만드는 전동 스탠딩 데스크.', photo: P(D[5]),
    features: ['전동 높이조절','메모리 4단','초저소음 모터'] },
  { id: 72, catSlug: 'standing-desk', name: 'FORMA 전동 스탠딩 데스크', price: 438000, stock: 40, rating: 4.7, reviews: 0, featured: true, badge: '',
    desc: '앉고 서는 리듬을 만드는 전동 스탠딩 데스크.', photo: P(D[7]),
    features: ['전동 높이조절','메모리 4단','초저소음 모터'] },
  { id: 73, catSlug: 'standing-desk', name: 'KORE 전동 스탠딩 데스크', price: 464000, stock: 41, rating: 4.7, reviews: 0, featured: false, badge: '',
    desc: '앉고 서는 리듬을 만드는 전동 스탠딩 데스크.', photo: P(D[5]),
    features: ['전동 높이조절','메모리 4단','초저소음 모터'] },
  { id: 74, catSlug: 'corner-desk', name: 'LUNA 코너 데스크', price: 250000, stock: 42, rating: 4.7, reviews: 0, featured: false, badge: '',
    desc: '듀얼 모니터도 여유로운 L형 코너 데스크.', photo: P(D[6]),
    features: ['L형 와이드 상판','케이블 트레이','높이 조절 풋'] },
  { id: 75, catSlug: 'corner-desk', name: 'MESA 코너 데스크', price: 272000, stock: 43, rating: 4.7, reviews: 0, featured: false, badge: '',
    desc: '듀얼 모니터도 여유로운 L형 코너 데스크.', photo: P(D[7]),
    features: ['L형 와이드 상판','케이블 트레이','높이 조절 풋'] },
  { id: 76, catSlug: 'corner-desk', name: 'VELA 코너 데스크', price: 294000, stock: 44, rating: 4.7, reviews: 0, featured: false, badge: '',
    desc: '듀얼 모니터도 여유로운 L형 코너 데스크.', photo: P(D[8]),
    features: ['L형 와이드 상판','케이블 트레이','높이 조절 풋'] },
  { id: 77, catSlug: 'corner-desk', name: 'ARIA 코너 데스크', price: 316000, stock: 45, rating: 4.7, reviews: 0, featured: false, badge: 'NEW',
    desc: '듀얼 모니터도 여유로운 L형 코너 데스크.', photo: P(D[2]),
    features: ['L형 와이드 상판','케이블 트레이','높이 조절 풋'] },
  { id: 78, catSlug: 'corner-desk', name: 'CIRRUS 코너 데스크', price: 338000, stock: 46, rating: 4.7, reviews: 0, featured: false, badge: '',
    desc: '듀얼 모니터도 여유로운 L형 코너 데스크.', photo: P(D[9]),
    features: ['L형 와이드 상판','케이블 트레이','높이 조절 풋'] },
  { id: 79, catSlug: 'compact-desk', name: 'DELTA 컴팩트 데스크', price: 110000, stock: 47, rating: 4.7, reviews: 0, featured: false, badge: '',
    desc: '작은 공간을 알뜰하게 쓰는 컴팩트 데스크.', photo: P(D[9]),
    features: ['공간 절약 사이즈','방수 코팅 상판','조립 간편'] },
  { id: 80, catSlug: 'compact-desk', name: 'EON 컴팩트 데스크', price: 126000, stock: 8, rating: 4.7, reviews: 0, featured: false, badge: '',
    desc: '작은 공간을 알뜰하게 쓰는 컴팩트 데스크.', photo: P(D[10]),
    features: ['공간 절약 사이즈','방수 코팅 상판','조립 간편'] },
  { id: 81, catSlug: 'compact-desk', name: 'FLUX 컴팩트 데스크', price: 142000, stock: 9, rating: 4.7, reviews: 0, featured: true, badge: '',
    desc: '작은 공간을 알뜰하게 쓰는 컴팩트 데스크.', photo: P(D[11]),
    features: ['공간 절약 사이즈','방수 코팅 상판','조립 간편'] },
  { id: 82, catSlug: 'compact-desk', name: 'HORIZON 컴팩트 데스크', price: 158000, stock: 10, rating: 4.7, reviews: 0, featured: false, badge: '',
    desc: '작은 공간을 알뜰하게 쓰는 컴팩트 데스크.', photo: P(D[8]),
    features: ['공간 절약 사이즈','방수 코팅 상판','조립 간편'] },
  { id: 83, catSlug: 'compact-desk', name: 'IRIS 컴팩트 데스크', price: 174000, stock: 11, rating: 4.7, reviews: 0, featured: false, badge: '',
    desc: '작은 공간을 알뜰하게 쓰는 컴팩트 데스크.', photo: P(D[2]),
    features: ['공간 절약 사이즈','방수 코팅 상판','조립 간편'] },
  { id: 84, catSlug: 'compact-desk', name: 'JUNO 컴팩트 데스크', price: 190000, stock: 12, rating: 4.7, reviews: 0, featured: false, badge: '',
    desc: '작은 공간을 알뜰하게 쓰는 컴팩트 데스크.', photo: P(D[10]),
    features: ['공간 절약 사이즈','방수 코팅 상판','조립 간편'] },
  { id: 85, catSlug: 'gaming-chair', name: 'KITE 게이밍 체어', price: 190000, stock: 13, rating: 4.7, reviews: 0, featured: false, badge: '',
    desc: '절제된 디자인의 게이밍 체어.', photo: P(C[1]),
    features: ['리클라이닝','2D/4D 팔걸이','메모리폼 시트'] },
  { id: 86, catSlug: 'gaming-chair', name: 'LOFT 게이밍 체어', price: 212000, stock: 14, rating: 4.7, reviews: 0, featured: false, badge: '',
    desc: '절제된 디자인의 게이밍 체어.', photo: P(C[4]),
    features: ['리클라이닝','2D/4D 팔걸이','메모리폼 시트'] },
  { id: 87, catSlug: 'gaming-chair', name: 'MERIDIAN 게이밍 체어', price: 234000, stock: 15, rating: 4.7, reviews: 0, featured: false, badge: '',
    desc: '절제된 디자인의 게이밍 체어.', photo: P(C[2]),
    features: ['리클라이닝','2D/4D 팔걸이','메모리폼 시트'] },
  { id: 88, catSlug: 'gaming-chair', name: 'NIMBUS 게이밍 체어', price: 256000, stock: 16, rating: 4.7, reviews: 0, featured: false, badge: 'NEW',
    desc: '절제된 디자인의 게이밍 체어.', photo: P(C[5]),
    features: ['리클라이닝','2D/4D 팔걸이','메모리폼 시트'] },
  { id: 89, catSlug: 'gaming-chair', name: 'OASIS 게이밍 체어', price: 278000, stock: 17, rating: 4.7, reviews: 0, featured: false, badge: '',
    desc: '절제된 디자인의 게이밍 체어.', photo: P(C[1]),
    features: ['리클라이닝','2D/4D 팔걸이','메모리폼 시트'] },
  { id: 92, catSlug: 'ergonomic-chair', name: 'RIDGE 인체공학 체어', price: 280000, stock: 20, rating: 4.7, reviews: 0, featured: false, badge: '',
    desc: '바른 자세를 잡아주는 인체공학 체어.', photo: P(C[3]),
    features: ['조절식 요추 지지','헤드레스트','틸트 조절'] },
  { id: 93, catSlug: 'ergonomic-chair', name: 'SOLIS 인체공학 체어', price: 314000, stock: 21, rating: 4.7, reviews: 0, featured: false, badge: '',
    desc: '바른 자세를 잡아주는 인체공학 체어.', photo: P(C[7]),
    features: ['조절식 요추 지지','헤드레스트','틸트 조절'] },
  { id: 94, catSlug: 'ergonomic-chair', name: 'TERRA 인체공학 체어', price: 348000, stock: 22, rating: 4.7, reviews: 0, featured: false, badge: '',
    desc: '바른 자세를 잡아주는 인체공학 체어.', photo: P(C[5]),
    features: ['조절식 요추 지지','헤드레스트','틸트 조절'] },
  { id: 95, catSlug: 'ergonomic-chair', name: 'VERTEX 인체공학 체어', price: 382000, stock: 23, rating: 4.7, reviews: 0, featured: false, badge: '',
    desc: '바른 자세를 잡아주는 인체공학 체어.', photo: P(C[8]),
    features: ['조절식 요추 지지','헤드레스트','틸트 조절'] },
  { id: 96, catSlug: 'ergonomic-chair', name: 'WAVE 인체공학 체어', price: 416000, stock: 24, rating: 4.7, reviews: 0, featured: false, badge: '',
    desc: '바른 자세를 잡아주는 인체공학 체어.', photo: P(C[6]),
    features: ['조절식 요추 지지','헤드레스트','틸트 조절'] },
  { id: 97, catSlug: 'ergonomic-chair', name: 'XENON 인체공학 체어', price: 450000, stock: 25, rating: 4.7, reviews: 0, featured: false, badge: '',
    desc: '바른 자세를 잡아주는 인체공학 체어.', photo: P(C[3]),
    features: ['조절식 요추 지지','헤드레스트','틸트 조절'] },
  { id: 98, catSlug: 'mesh-chair', name: 'ZEPHYR 메쉬 체어', price: 150000, stock: 26, rating: 4.7, reviews: 0, featured: false, badge: '',
    desc: '사계절 통기성 좋은 메쉬 체어.', photo: P(C[6]),
    features: ['풀메쉬 등판','경량 프레임','미니멀 디자인'] },
  { id: 99, catSlug: 'mesh-chair', name: 'ASH 메쉬 체어', price: 168000, stock: 27, rating: 4.7, reviews: 0, featured: true, badge: 'NEW',
    desc: '사계절 통기성 좋은 메쉬 체어.', photo: P(C[8]),
    features: ['풀메쉬 등판','경량 프레임','미니멀 디자인'] },
  { id: 100, catSlug: 'mesh-chair', name: 'BIRCH 메쉬 체어', price: 186000, stock: 28, rating: 4.7, reviews: 0, featured: false, badge: '',
    desc: '사계절 통기성 좋은 메쉬 체어.', photo: P(C[6]),
    features: ['풀메쉬 등판','경량 프레임','미니멀 디자인'] },
  { id: 101, catSlug: 'mesh-chair', name: 'CEDAR 메쉬 체어', price: 204000, stock: 29, rating: 4.7, reviews: 0, featured: false, badge: '',
    desc: '사계절 통기성 좋은 메쉬 체어.', photo: P(C[2]),
    features: ['풀메쉬 등판','경량 프레임','미니멀 디자인'] },
  { id: 102, catSlug: 'mesh-chair', name: 'DUNE 메쉬 체어', price: 222000, stock: 30, rating: 4.7, reviews: 0, featured: false, badge: '',
    desc: '사계절 통기성 좋은 메쉬 체어.', photo: P(C[7]),
    features: ['풀메쉬 등판','경량 프레임','미니멀 디자인'] },
  { id: 103, catSlug: 'accessory', name: '게이밍 마우스', price: 39000, stock: 31, rating: 4.7, reviews: 0, featured: false, badge: '',
    desc: '정밀 센서를 탑재한 유선 게이밍 마우스.', photo: P('1563297007-0686b7003af7'),
    features: ['최대 16000 DPI','인체공학 그립','매크로 버튼'] },
  { id: 104, catSlug: 'accessory', name: '미니멀 데스크 오거나이저', price: 53000, stock: 32, rating: 4.7, reviews: 0, featured: false, badge: '',
    desc: '데스크를 깔끔하게 정리하는 미니멀 오거나이저.', photo: P('1526657782461-9fe13402a841'),
    features: ['모듈형 구성','친환경 소재','논슬립 바닥'] },
  { id: 105, catSlug: 'accessory', name: '곡면 게이밍 모니터', price: 67000, stock: 33, rating: 4.7, reviews: 0, featured: false, badge: '',
    desc: '몰입감을 높이는 곡면 게이밍 모니터.', photo: P('1591370874773-6702e8f12fd8'),
    features: ['1500R 곡률','165Hz 주사율','1ms 응답속도'] },
  { id: 106, catSlug: 'accessory', name: '블루투스 스피커', price: 81000, stock: 34, rating: 4.7, reviews: 0, featured: false, badge: '',
    desc: '풍부한 사운드의 휴대용 블루투스 스피커.', photo: P('1544244015-0df4b3ffc6b0'),
    features: ['방수 IPX7','최대 12시간 재생','베이스 부스트'] },
  { id: 107, catSlug: 'accessory', name: '무선 키보드·마우스 세트', price: 95000, stock: 35, rating: 4.7, reviews: 0, featured: false, badge: '',
    desc: '데스크를 완성하는 무선 키보드·마우스 콤보.', photo: P('1629429407759-01cd3d7cfb38'),
    features: ['키보드+마우스 세트','통합 USB 리시버','마우스패드 포함'] },
  { id: 108, catSlug: 'accessory', name: '게이밍 기계식 키보드', price: 109000, stock: 36, rating: 4.7, reviews: 0, featured: true, badge: '',
    desc: '경쾌한 타건감의 RGB 게이밍 기계식 키보드.', photo: P('1595044426077-d36d9236d54a'),
    features: ['적축 스위치','RGB 백라이트','N키 롤오버'] },
];

// ── 사진 분산 + 가격대 다양화 (자동 정규화)
(function(){
  // 액세서리 전용 이미지 풀 (모니터+스탠드 / 데스크 소품)
  const A = [
    '1616763355548-1b606f439f86', '1526657782461-9fe13402a841', '1527443154391-507e9dc6c5cc',
    '1593305841991-05c297ba4575', '1550009158-9ebf69173e03', '1587829741301-dc798b83add3',
    '1541140532154-b024d705b90a', '1527864550417-7fd91fc51a46',
  ];
  const POOL = { desk: D, chair: C, accessory: A };
  const typeImg = (slug) => slug.indexOf('chair') >= 0 ? 'chair' : (slug === 'accessory' ? 'accessory' : 'desk');
  // 카테고리별 시작 오프셋 — 카테고리 안에서 이미지가 겹치지 않게 (풀 크기 > 카테고리 상품 수)
  const OFF = { 'gaming-desk': 0, 'standing-desk': 5, 'corner-desk': 10, 'compact-desk': 14,
                'gaming-chair': 0, 'ergonomic-chair': 6, 'mesh-chair': 12 };
  const catCtr = {};
  PRODUCTS.forEach(p => {
    if (p.catSlug === 'accessory') return;
    const t = typeImg(p.catSlug); const pool = POOL[t];
    catCtr[p.catSlug] = (catCtr[p.catSlug] || 0);
    const idx = ((OFF[p.catSlug] || 0) + catCtr[p.catSlug]) % pool.length;
    p.photo = P(pool[idx]);
    catCtr[p.catSlug]++;
  });
  const RANGE = {
    'gaming-desk': [190000, 540000], 'standing-desk': [330000, 890000], 'corner-desk': [240000, 690000],
    'compact-desk': [89000, 330000], 'gaming-chair': [150000, 640000], 'ergonomic-chair': [240000, 980000],
    'mesh-chair': [130000, 450000], 'accessory': [25000, 190000],
  };
  const byCat = {};
  PRODUCTS.forEach(p => { (byCat[p.catSlug] = byCat[p.catSlug] || []).push(p); });
  Object.keys(byCat).forEach(slug => {
    const arr = byCat[slug]; const r = RANGE[slug] || [100000, 400000]; const lo = r[0], hi = r[1]; const n = arr.length;
    arr.forEach((p, i) => {
      const t = n > 1 ? (((i * 7 + 3) % n) / (n - 1)) : 0;
      let v = lo + (hi - lo) * t;
      v = Math.round(v / 1000) * 1000;
      p.price = v;
    });
  });
  // ── 정가(listPrice)=오른쪽 표기, 판매가(price)=왼쪽 할인가·1원 단위(끝자리 0 제거)
  PRODUCTS.forEach(p => {
    p.listPrice = p.price;
    const rate = 0.05 + ((p.id * 37) % 130) / 1000;   // 5.0% ~ 17.9% 할인
    let sale = Math.round(p.listPrice * (1 - rate));
    if (sale % 10 === 0) sale -= (1 + (p.id % 9));      // 1원 단위 0 제거
    p.price = sale;
  });
})();

const R_FIRST = ['김민준','이서연','박도현','최지우','정하윤','강태양','윤서아','임재현','한소율','오은채','서지훈','배유진','신동욱','조아라','홍지민','문세영','양준혁','구예린','남기훈','도지원','한지후','유서준','고나윤','장태호','권민서','노하람','천유빈','류시우','명채원','봉준서','설다인','안태현','엄지호','옥주하','편성민','표한결','황보람','계지안','국서율','반예준','전예나','민찬우','석하은','추민재','방시연','조민','김하니','이레','박솔','정우'];

// ===== 리뷰 문장 풀 (긴글/짧은글/이모지/구어체 섞음) =====

// 아주 짧은 한 줄 반응
const TINY = [
  '굿굿','만족만족~','대만족!!','완전 강추 ㅋㅋ','재구매각','인정합니다','최고예요 👍','짱이에요','ㅜㅜ 진작 살걸','돈값한다','후회없음','칭찬해 👏','갓성비','또 살래요','사랑입니다 ❤️','wow','두번 삽니다','별5도 부족',
];
// 짧은 반응
const SHORT = [
  '감사합니다 잘 쓸게요!!','생각보다 훨씬 좋아요 ㅎㅎ','완전 이득 봤네요','친구한테도 추천했어요!','기대 이상이에요 👍','진짜 편해요 ㅋㅋ','배송 빨라서 놀랐어요','포장 진짜 꼼꼼하더라구요','실물 보고 반했습니다','가격 대비 최고예요!','튼튼하고 예뻐요','이거 사길 진짜 잘했다','생각보다 고급스러워요','자취 필수템 인정 ㅋㅋ','볼 때마다 기분 좋아요 😊','잘 쓰고 있어요~','품질 진심 좋네요','완전 마음에 들어요!!','만족스럽습니다 :)','생각보다 퀄 좋아요',
];
// 아쉬운 반응 (평점 3~4)
const NEG = [
  '배송이 좀 늦었어요 ㅠㅠ','조립이 살짝 빡셌어요','설명서가 좀 부실하네요','색이 사진보다 어두워요','나사 하나가 빠져 있었어요 ㅠ','생각보다 많이 무거워요','새 제품 냄새가 며칠 나요','받았을 때 살짝 스크래치 있어서 아쉬웠어요','가격은 좀 나가는 편이에요','기대만큼은 아니었네요','높이 조절이 살짝 뻑뻑해요','미세하게 흔들리는 느낌이 있어요','포장 박스가 찌그러져 왔어요 ㅠㅠ','A/S 문의 답변이 좀 늦었어요','사이즈가 생각보다 크네요 ㅋㅋ','기능은 좋은데 무게가 좀…',
];
const NEG_TAIL = [' 그래도 제품 자체는 만족해요','',' 별 하나 뺐지만 쓸만해요',' 근데 쓰다보니 적응됐어요 ㅎㅎ','',' 전체적으론 괜찮습니다'];

// 의자 상세
const CHAIR = [
  '허리가 진짜 편해졌어요','종일 앉아 있어도 안 아파요','자세가 저절로 잡히는 느낌','쿠션 푹신한데 안 꺼져요','등판 통풍 잘 돼서 여름에 딱','목받침이 신의 한 수네요','팔걸이 조절되는 거 완전 편함','리클라이닝 각도가 넉넉해요','오래 앉아도 다리 안 저려요','앉자마자 아 이거다 싶었어요','등받이가 허리를 딱 받쳐줘요','바퀴가 조용하고 부드럽게 굴러가요','메모리폼이라 오래 써도 그대로','틸트 고정되니까 편하게 기대요',
];
// 책상 상세
const DESK = [
  '상판 넓어서 진짜 시원해요','듀얼 모니터 올려도 여유롭습니다','높이 조절 버튼 반응 빠름','서서 일하니까 안 졸려요 ㅋㅋ','케이블 정리되니까 책상이 깔끔','흔들림이 하나도 없어요','조립 혼자서도 금방 했어요','다리 공간 넉넉해서 안 답답','무광이라 지문 안 남아서 좋음','방 사이즈에 딱 맞아요','작업 공간이 확 넓어졌어요','모서리 마감이 매끈합니다','메모리 기능으로 높이 한번에 맞아요','발통 덕에 바닥 고르지 않아도 안정적',
];
// 액세서리/주변기기 상세
const ACC = [
  '설치 5분컷이에요','전선 정리 끝판왕이네요','책상이 확 넓어졌어요','각도 조절이 부드러워요','생각보다 훨씬 단단해요','가성비 진짜 갑','고정 확실하게 됩니다','있으니까 훨씬 편하네요','디자인도 깔끔해서 만족','호환 잘 돼서 바로 썼어요',
];

// 긴 후기 오프너 (구매 계기)
const LONG_OPEN = [
  '재택 3년차인데 이제야 제대로 된 걸 샀네요.','오래 고민하다 큰맘 먹고 결제했습니다.','기존에 쓰던 게 너무 불편해서 큰맘 먹고 바꿨어요.','후기 진짜 많이 비교하고 이걸로 골랐습니다.','학생이라 예산 빠듯했는데 무리해서 질렀어요.','허리 통증 때문에 큰맘 먹고 구매했어요.','방 이사하면서 분위기 맞춰 새로 들였습니다.','게임이랑 작업 둘 다 하는 편이라 신중히 골랐어요.',
];
const LONG_CLOSE = [
  '결론은 대만족, 주변에도 다 추천 중이에요 ㅎㅎ','한동안은 바꿀 일 없을 것 같습니다. 강추!','고민 중이시면 그냥 사세요, 후회 안 해요 👍','이 가격에 이 퀄이면 진짜 잘 산 거예요.','다음에 하나 더 살 생각입니다 :)','진작 살 걸 그랬다는 생각뿐이에요 ㅠㅠ','별 다섯 개도 아깝지 않아요!','전체적으로 흠잡을 데가 없네요.',
];

const TAIL = ['','','',' 강추','!',' ㅎㅎ',' ㅋㅋ',' 굿','',' 추천해요','',' 👍','',' 최고',''];

function _rseed(n){ return function(){ n = (n * 1664525 + 1013904223) % 4294967296; return n / 4294967296; }; }
function _pad(n){ return n < 10 ? '0' + n : '' + n; }
function _typeOf(slug){ return slug.indexOf('chair') >= 0 ? 'chair' : (slug === 'accessory' ? 'accessory' : 'desk'); }
function _pick(arr, rand){ return arr[Math.floor(rand() * arr.length)]; }

const REVIEWS = [];
const _usedText = {};
let _rid = 1;
PRODUCTS.forEach((p, pi) => {
  const type = _typeOf(p.catSlug);
  const detail = type === 'chair' ? CHAIR : (type === 'accessory' ? ACC : DESK);
  const rand = _rseed(p.id * 7919 + 17);
  // 후기 수 다양화: 인기(featured)는 많이, 나머지는 랜덤하게 (일부는 0개)
  let count;
  if (p.featured) {
    count = 18 + Math.floor(rand() * 25);        // 18~42
  } else {
    const roll = rand();
    if (roll < 0.18) count = 0;
    else if (roll < 0.45) count = 1 + Math.floor(rand() * 4);
    else if (roll < 0.80) count = 5 + Math.floor(rand() * 8);
    else count = 13 + Math.floor(rand() * 12);
  }
  let sum = 0;
  for (let k = 0; k < count; k++) {
    let text, rating, guard = 0;
    do {
      const mode = rand();
      if (mode < 0.16) {                    // 아주 짧은 반응
        text = _pick(TINY, rand);
        rating = rand() < 0.85 ? 5 : 4;
      } else if (mode < 0.36) {             // 짧은 반응
        text = _pick(SHORT, rand);
        rating = rand() < 0.8 ? 5 : 4;
      } else if (mode < 0.52) {             // 아쉬운 후기
        text = _pick(NEG, rand) + _pick(NEG_TAIL, rand);
        rating = rand() < 0.55 ? 3 : 4;
      } else if (mode < 0.70) {             // 상세 한 줄 (+가끔 꼬리)
        text = _pick(detail, rand) + _pick(TAIL, rand);
        rating = rand() < 0.85 ? 5 : 4;
      } else if (mode < 0.86) {             // 상세 두 개 조합
        let a = _pick(detail, rand), b = _pick(detail, rand), g2 = 0;
        while (b === a && g2 < 5) { b = _pick(detail, rand); g2++; }
        text = a + '. ' + b + _pick(TAIL, rand);
        rating = 5;
      } else {                              // 긴 후기
        text = _pick(LONG_OPEN, rand) + ' ' + _pick(detail, rand) + '. ' + _pick(detail, rand) + '. ' + _pick(LONG_CLOSE, rand);
        rating = rand() < 0.9 ? 5 : 4;
      }
      guard++;
    } while (_usedText[text] && guard < 50);
    _usedText[text] = true;
    sum += rating;
    const name = R_FIRST[(p.id * 5 + k * 11) % R_FIRST.length];
    const dd = new Date(2026, 6, 16); const back = Math.max(0, Math.floor((pi + k) * 0.8) - 1 + Math.floor(rand() * 3)); dd.setDate(dd.getDate() - back);
    const date = dd.getFullYear() + '-' + _pad(dd.getMonth() + 1) + '-' + _pad(dd.getDate());
    REVIEWS.push({ id: _rid++, productId: p.id, product: p.name, name: name, initial: name.charAt(0), rating: rating, date: date, role: '', text: text });
  }
  p.reviews = count;
  p.rating = count ? Math.round((sum / count) * 10) / 10 : 0;
});
REVIEWS.sort((a, b) => a.date < b.date ? 1 : (a.date > b.date ? -1 : 0));

const SHOP = { categories: CATEGORIES, products: PRODUCTS, reviews: REVIEWS };
export { SHOP };
export default SHOP;
if (typeof window !== 'undefined') window.SHOP = SHOP;
