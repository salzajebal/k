export const PHONE = "1577-4318";
export const KAKAO_URL = "http://pf.kakao.com/_xdxiexgb/chat";
export const DIAGNOSIS_URL = "http://zrumgil505.com";

export interface HeroSlide {
  image: string;
  title: string;
  description: string;
}

export const heroSlides: HeroSlide[] = [
  {
    image: "slide_02.jpg",
    title: "혼자 끙끙 앓지 마세요\n개인회생, 답이 있습니다",
    description:
      "· 전화 · 카카오톡 1:1 비대면 비밀상담\n· 압류 걱정 끝, 신속한 금지명령 조치",
  },
  {
    image: "slide_01.jpg",
    title: "부담 없이 시작하는\n화민 로펌 솔루션",
    description:
      "· 근무 중에도 30초 간편 무료진단!\n· 서류 발급부터 진행상황 확인까지 한 번에",
  },
  {
    image: "slide_03.png",
    title: "14년 노하우가 만든\n제로백 회생·파산",
    description:
      "· 도산전문변호사가 사건을 직접 관리\n· 기각 걱정 없는 책임 관리 시스템",
  },
  {
    image: "slide_04.jpg",
    title: "수임료 부담은 낮추고\n해결책은 확실하게",
    description:
      "· 일용직 · 알바 · 주부 · 자영업도 소득만 있으면 신청 OK!\n· 형편에 맞춘 분납 등 유연한 수임료 방식",
  },
  {
    image: "slide_05.jpg",
    title: "아직 연체 전이라도\n지금 준비할 수 있어요",
    description: "· 최근 6개월 내 대출이 있어도 신청 가능\n· 이자 전액 탕감까지 노려보세요",
  },
];

export interface YoutubeVideo {
  seq: number;
  href: string;
  image: string;
  title: string;
  caption: string;
}

export const youtubeSlideGroups: YoutubeVideo[][] = [
  [
    {
      seq: 1,
      href: "https://www.youtube.com/watch?v=Vf6dkTIvirg",
      image: "https://i.ytimg.com/vi/Vf6dkTIvirg/hqdefault.jpg",
      title: "회생·파산 절차의 시작",
      caption: "나의 채무는 어디에 얼마나 있을까?\n모든 채무 한번에 확인하는 방법",
    },
    {
      seq: 2,
      href: "https://www.youtube.com/watch?v=Mq8c9Zc6iXM",
      image: "https://i.ytimg.com/vi/Mq8c9Zc6iXM/hqdefault.jpg",
      title: "3일도 길다?!",
      caption: "승소판결 이후 강제집행을 위한\n채무자 재산 가장 빠르게 찾는 법",
    },
    {
      seq: 3,
      href: "https://www.youtube.com/watch?v=Cdl2LcseQYs",
      image: "https://i.ytimg.com/vi/Cdl2LcseQYs/hqdefault.jpg",
      title: "모르는 돈이 입금됐다면",
      caption: "통장 협박, 계좌 거래정지\n이렇게 해결하세요",
    },
  ],
  [
    {
      seq: 4,
      href: "https://www.youtube.com/watch?v=fhMxpdgH17U",
      image: "https://i.ytimg.com/vi/fhMxpdgH17U/hqdefault.jpg",
      title: "신종 사기 '테크사기' 주의",
      caption: "재테크를 빙자한 신종 사기 수법\n법원의 판단 기준과 피해자 유의사항",
    },
    {
      seq: 5,
      href: "https://www.youtube.com/watch?v=Mf6TwDGzy6E",
      image: "https://i.ytimg.com/vi/Mf6TwDGzy6E/hqdefault.jpg",
      title: "조정위원 출신 변호사가 말하는",
      caption: "조정의 필승 전략\n모르면 상대방 요구대로 끌려갑니다",
    },
    {
      seq: 6,
      href: "https://www.youtube.com/watch?v=AKWg3HNVD9Q",
      image: "https://i.ytimg.com/vi/AKWg3HNVD9Q/hqdefault.jpg",
      title: "증거의견 하나로 뒤바뀌는 소송",
      caption: "진정성립, 부인, 부지\n민사소송 결과를 바꾸는 핵심 포인트",
    },
  ],
];

export const marqueeIcons = Array.from({ length: 14 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return { image: `3d-icon-${n}.png`, alt: `mainicon${i + 1}` };
});

export interface ShortsCard {
  url: string;
  image: string;
  alt: string;
  title: string;
  subtitle: string;
}

export const shortsCards: ShortsCard[] = [
  {
    url: "https://www.youtube.com/shorts/wPHIQunGbGs",
    image: "shorts_thumb1.jpg",
    alt: "자영업자 후기",
    title: "창업 후 프랜차이즈에 밀린 자영업자",
    subtitle: "'빚 탕감 상담 한 번에 마음이 편해졌습니다'",
  },
  {
    url: "https://www.youtube.com/shorts/lVZMOY-pfGo",
    image: "shorts_thumb2.jpg",
    alt: "신속채무조정 후기",
    title: "'이자도 전부 없애줘요'",
    subtitle: "신속채무조정 대신 개인회생을 택한 이유",
  },
  {
    url: "https://youtube.com/shorts/GGGp1nceeWs",
    image: "shorts_thumb3.jpg",
    alt: "40대 회사원 후기",
    title: "가게 2번 폐업한 40대 엄마의 빚 탈출",
    subtitle: "빚 6,000만 원 → 월 15만 원 개인회생",
  },
  {
    url: "https://youtube.com/shorts/NDV1S-QMMmE",
    image: "shorts_thumb4.jpg",
    alt: "60대 농업인 후기",
    title: "'이런 제도가 있는 줄 몰랐어!'",
    subtitle: "60대 농업인 빚 4,800만 원 회생 후기",
  },
  {
    url: "https://youtube.com/shorts/HA_U9hlwGjA",
    image: "shorts_thumb5.jpg",
    alt: "40대 직장인 후기",
    title: "신용점수에 집착하면 안 되는 이유?",
    subtitle: "부모님 빚 대신 갚았던 30대 직장인",
  },
];

export interface TickerEntry {
  type: string;
  name: string;
  status: string;
  statusClass: "on-track" | "consult-done" | "received" | "reserved";
}

const statusClassMap: Record<string, TickerEntry["statusClass"]> = {
  개시결정: "on-track",
  인가결정: "on-track",
  면책결정: "on-track",
  상담완료: "consult-done",
  신청완료: "consult-done",
  접수완료: "received",
  서류발송: "received",
  방문예약: "reserved",
};

const rawTicker: [string, string, string][] = [
  ["개인회생", "박**", "개시결정"],
  ["개인회생", "신**", "서류발송"],
  ["개인파산", "권**", "접수완료"],
  ["개인회생", "이**", "접수완료"],
  ["개인파산", "채**", "접수완료"],
  ["법인파산", "김**", "방문예약"],
  ["워크아웃", "김**", "상담완료"],
  ["개인회생", "이**", "인가결정"],
  ["개인파산", "박**", "면책결정"],
  ["개인회생", "송**", "방문예약"],
  ["개인회생", "권**", "신청완료"],
  ["개인파산", "서**", "접수완료"],
  ["워크아웃", "최**", "방문예약"],
  ["개인회생", "박**", "개시결정"],
  ["개인회생", "김**", "상담완료"],
  ["개인파산", "안**", "방문예약"],
  ["개인파산", "조**", "접수완료"],
  ["개인회생", "강**", "상담완료"],
  ["법인파산", "김**", "접수완료"],
  ["개인회생", "김**", "방문예약"],
];

export const tickerEntries: TickerEntry[] = rawTicker.map(([type, name, status]) => ({
  type,
  name,
  status,
  statusClass: statusClassMap[status] ?? "received",
}));

export interface Office {
  name: string;
  suffix: string;
  image: string;
  mapUrl: string;
}

export const offices: Office[] = [
  { name: "서울", suffix: "본사", image: "office01-seoul.jpg", mapUrl: "https://naver.me/G7V4f37R" },
  { name: "수원", suffix: "분사무소", image: "office02-suwon.jpg", mapUrl: "https://naver.me/565r8Sub" },
  { name: "대구", suffix: "분사무소", image: "office04-daegu.jpg", mapUrl: "https://naver.me/FnmwcC3a" },
];

export const certificateImages = ["paper02.jpg", "paper03.jpg", "paper05.jpg"];

export interface SuccessCase {
  image: string;
  label: string;
}

export const successCases: SuccessCase[] = [
  ...Array.from({ length: 20 }, (_, i) => ({
    image: `success/success-${i + 1}.jpg`,
    label: "개인회생 개시결정문",
  })),
  ...Array.from({ length: 5 }, (_, i) => ({
    image: `success/success-${i + 21}.jpg`,
    label: "파산면책결정문",
  })),
];

export interface Lawyer {
  name: string;
  image: string;
  href: string;
}

export const lawyers: Lawyer[] = [
  {
    name: "이상혁 대표변호사",
    image: "lawyer-rep.png",
    href: "https://505zrg.com/default/about/doctor/sub2_1.php?top=1&sub=2",
  },
];

export interface FaqItem {
  cats: string[];
  badge?: { label: string; kind: "hot" | "new" };
  question: string;
  answerHtml: string;
  cta: { label: string; href: string; kakao?: boolean }[];
  defaultOpen?: boolean;
}

export const faqCategories = [
  { key: "all", label: "전체" },
  { key: "recovery", label: "개인회생" },
  { key: "bankruptcy", label: "개인파산" },
  { key: "corporate", label: "법인파산" },
  { key: "seizure", label: "압류·추심" },
  { key: "credit", label: "신용불량·채무" },
  { key: "cost", label: "비용·절차" },
];

export const faqItems: FaqItem[] = [
  {
    cats: ["recovery"],
    question: "개인회생이란?",
    answerHtml:
      "개인회생제도는 <strong>재정적 어려움으로 인하여 파탄에 직면하고 있는 개인 채무자로서 장래에 계속적으로 또는 반복적으로 수입을 얻을 가능성이 있는 자에 대해<br> 채권자·주주·지분권자 등 이해관계인의 법률관계를 조정</strong>함으로써 채무자의 효율적 회생과 채권자의 이익을 도모하기 위해 마련된 절차입니다.",
    cta: [
      { label: "📞 무료 상담 1577-4318", href: "tel:1577-4318" },
      { label: "💬 카카오로 확인하기", href: KAKAO_URL, kakao: true },
    ],
  },
  {
    cats: ["recovery", "cost"],
    badge: { label: "인기", kind: "hot" },
    question: "개인회생 신청자격 조건이 어떻게 되나요?",
    defaultOpen: true,
    answerHtml:
      "<strong>수입이 있다면 누구든 개인회생을 신청할 수 있습니다.</strong> 직장인·아르바이트·자영업 등 꾸준한 소득이 있고, 무담보 채무 10억 원 / 담보 채무 15억 원 이하라면 신청 자격이 됩니다." +
      '<ul><li><span class="check">✔</span>신용불량자·연체 중이어도 신청 가능</li>' +
      '<li><span class="check">✔</span>채무의 최대 90%를 법원이 감면</li>' +
      '<li><span class="check">✔</span>나머지 금액을 3~5년 분할 상환 후 면책</li>' +
      '<li><span class="check">✔</span>압류·추심 즉시 중단 (포괄적 금지명령)</li>' +
      '<li><span class="check">✔</span>개인회생 완료 후 신용점수 정상 회복 가능</li></ul>' +
      "개인회생신청자격이 되는지 지금 바로 무료로 확인해드립니다.",
    cta: [
      { label: "📞 자격 무료 확인 1577-4318", href: "tel:1577-4318" },
      { label: "💬 카카오로 확인하기", href: KAKAO_URL, kakao: true },
    ],
  },
  {
    cats: ["bankruptcy"],
    question: "개인파산이란?",
    answerHtml:
      "개인파산제도는 <strong>개인 채무자가 자신의 사업 또는 소비활동의 결과로 재산을 모두 청산하더라도 모든 채무를 변제 할 수 없는 경우,<br>채무를 정리하기 위해 스스로 파산 신청</strong>을 하는 것입니다. 법원의 결정에 의해 파산 절차를 진행하면 변제되지 못한 채무에는 면책을 구할 수 있습니다.",
    cta: [
      { label: "📞 무료 상담 1577-4318", href: "tel:1577-4318" },
      { label: "💬 카카오로 확인하기", href: KAKAO_URL, kakao: true },
    ],
  },
  {
    cats: ["bankruptcy", "cost"],
    badge: { label: "인기", kind: "hot" },
    question: "개인파산 신청방법과 파산신청 자격은 어떻게 되나요?",
    answerHtml:
      "<strong>수입이 없거나 매우 적어 채무 상환이 불가능한 경우 개인파산을 신청할 수 있습니다.</strong> 개인파산신청방법은 관할 법원에 파산신청서를 제출하는 것으로 시작합니다." +
      '<ul><li><span class="check">✔</span><strong>파산신청자격</strong>: 재산(부동산, 보험 등) &lt; 채무(빚) 이고 상환 능력 없는 경우</li>' +
      '<li><span class="check">✔</span><strong>개인파산 절차</strong>: 신청 → 파산선고 → 면책심사 → 면책결정 (통상 6~12개월)</li>' +
      '<li><span class="check">✔</span><strong>개인파산면책</strong>: 면책 확정 시 세금·벌금 등 일부 제외한 모든 채무 소멸</li>' +
      '<li><span class="check">✔</span><strong>파산변호사 비용</strong>: 300~500만 원 수준, 분할납부 가능 <em>※ 재산 및 채무금액, 사건의 난이도에 따라 상이할 수 있습니다.</em></li>' +
      '<li><span class="check">✔</span><strong>파산신청 비용</strong>(법원 납부): 채무자가 신청하는 경우 개인파산·면책 절차 신청서에는 2,000원 <em>파산 1,000원, 면책 1,000원</em>의 인지를 붙여야 합니다.<br>송달료는 <strong>파산단독사건</strong> : 송달료10회 + (채권자수 x 4회) / <strong>면책사건</strong> : 송달료10회 + (채권자수 x 3회) 입니다.</li></ul>' +
      "개인파산신청자격 여부는 상담을 통해 무료로 확인해드립니다.<br>기초생활수급자도 파산신청이 가능합니다.",
    cta: [
      { label: "📞 파산 자격 무료 확인", href: "tel:1577-4318" },
      { label: "💬 카카오 상담", href: KAKAO_URL, kakao: true },
    ],
  },
  {
    cats: ["seizure", "recovery"],
    badge: { label: "긴급", kind: "hot" },
    question: "통장 압류 해지방법이 있나요? 압류통장을 빨리 풀고 싶어요.",
    answerHtml:
      "<strong>개인회생 신청과 동시에 법원의 포괄적 금지명령을 신청하면 압류통장 해지 및 모든 강제집행을 즉시 중단시킬 수 있습니다.</strong>" +
      '<ul><li><span class="check">✔</span>개인회생 신청 → 보전처분, 포괄적 금지명령 → <strong>통상 3~10일 내 법원 결정</strong></li>' +
      '<li><span class="check">✔</span>결정 후 은행·채권자에 통보 → <strong>압류 즉시 해제</strong></li>' +
      '<li><span class="check">✔</span>통장압류해지기간은 법원 인가결정 후 수일 내</li>' +
      '<li><span class="check">✔</span><strong>급여 압류, 부동산 압류, 자동차 압류도 동시에 중단 가능</strong></li>' +
      '<li><span class="check">✔</span><strong>이미 압류 추심이 시작된 경우에도 소급 적용 가능</strong></li></ul>' +
      "지금 당장 생활이 어렵다면 오늘 바로 상담하세요. 당일 접수도 가능합니다.",
    cta: [{ label: "📞 오늘 당일 상담 1577-4318", href: "tel:1577-4318" }],
  },
  {
    cats: ["credit", "seizure"],
    question: "채무불이행자 등재되면 어떻게 되나요? 해제할 수 있나요?",
    answerHtml:
      "채무불이행자명부에 등재되면 금융거래·취업·자격증 발급 등에 불이익이 생깁니다. <strong>개인회생 또는 파산을 신청하면 법원에 등재 말소 신청을 동시에 할 수 있습니다.</strong>" +
      '<ul><li><span class="check">✔</span>개인회생 인가 후, 관할 법원에 인가결정문 제출 시 채무불이행자명부등재 해제 가능</li>' +
      '<li><span class="check">✔</span>채무조회를 통해 등재 여부 먼저 확인 가능</li>' +
      '<li><span class="check">✔</span>채무조정제도(신용회복위원회 워크아웃)를 통한 해결도 가능</li></ul>',
    cta: [
      { label: "📞 등재 해제 방법 상담", href: "tel:1577-4318" },
      { label: "💬 카카오 상담", href: KAKAO_URL, kakao: true },
    ],
  },
  {
    cats: ["credit"],
    question: "신용불량자 기준은 뭔가요? 신용불량자 회복 방법도 알고 싶어요.",
    answerHtml:
      "<strong>신용불량자 기준</strong>은 통상 금융기관 채무를 90일 이상 연체하거나 채무불이행자명부에 등재된 경우입니다. 공식 용어는 '금융채무 불이행자'입니다.<br><br><strong>신용불량자 회복 방법</strong>:" +
      '<ul><li><span class="check">✔</span><strong>개인회생</strong>: 수입이 있는 경우 — 채무 감면 후 분할 상환, 완료 후 3~5년 내 신용 회복</li>' +
      '<li><span class="check">✔</span><strong>개인파산·면책</strong>: 수입이 없는 경우 — 전액 면책 후 신용점수 재건 가능</li>' +
      '<li><span class="check">✔</span><strong>신용회복위원회 사전채무조정</strong>: 이자 감면·상환 기간 연장으로 전액 상환 가능한 경우</li>' +
      '<li><span class="check">✔</span><strong>프리워크아웃(개인워크아웃조건)</strong>: 연체 31일 이상 ~ 90일 미만, <span class="pen">아직 연체 전인 경우 개인회생 신청 가능</span></li></ul>' +
      "어떤 방법이 나에게 맞는지 무료 상담으로 확인하세요.",
    cta: [{ label: "📞 신용 회복 방법 상담", href: "tel:1577-4318" }],
  },
  {
    cats: ["cost", "recovery"],
    question: "개인회생 변호사 비용, 개인회생 신청비용은 얼마나 드나요?",
    answerHtml:
      "개인회생 비용은 크게 두 가지로 나뉩니다." +
      '<ul><li><span class="check">✔</span><strong>개인회생 변호사 비용</strong>: 채무액, 채권자 수, 사건 난이도 등에 따라 300 ~ 500만원 수준. 분할납부 가능</li>' +
      '<li><span class="check">✔</span><strong>개인회생 신청비용</strong>(법원 납부금): 개인회생절차개시 신청서에는 <strong>3만원</strong>의 인지를 붙여야합니다.<br>금지명령 또는 중지명령 신청서에는 각 <strong>2천원</strong>의 인지를 붙여야 합니다.<br>개인회생절차개시 신청 시 예납할 <strong>송달료</strong>는 <strong>(10회분) + (채권자수 x 8회분)</strong>의 금액을 납부해야 합니다.<br><em>※ 법원은 채무자가 절차 비용을 납부하지 않은 경우 개인회생절차개시의 신청을 기각할 수 있습니다.</em><br><br>※ 개인회생 송달료 계산 방법 : 송달료 1회 <strong>5,500원</strong> 적용 (25.6.1부터 변경)<br>&lt;채권자 수 3명일 경우 예시&gt; 5,500원x[10회+(3x8)] = 5,500원x34=187,000원<br><br></li>' +
      '<li><span class="check">✔</span>개인회생무료상담 후 정확한 비용 안내 가능</li>' +
      '<li><span class="check">✔</span>개인회생법률사무소별 비용 차이가 크므로 상담 전 비교 권장</li></ul>' +
      "개인회생 사례 및 실제 비용 내역이 궁금하다면 무료상담으로 확인해드립니다.",
    cta: [
      { label: "📞 비용 무료 상담 1577-4318", href: "tel:1577-4318" },
      { label: "💬 카카오로 비용 문의", href: KAKAO_URL, kakao: true },
    ],
  },
  {
    cats: ["bankruptcy", "cost"],
    question: "파산변호사 비용과 파산신청자격을 알고 싶어요.",
    answerHtml:
      '<ul><li><span class="check">✔</span><strong>파산변호사 비용</strong>: 300~500만 원 수준, 분할납부 가능 <em>※ 재산 및 채무금액, 사건의 난이도에 따라 상이할 수 있습니다.</em></li>' +
      '<li><span class="check">✔</span><strong>파산변호사 비용</strong>(법원 납부): 채무자가 신청하는 경우 개인파산·면책 절차 신청서에는 2,000원 <em>파산 1,000원, 면책 1,000원</em>의 인지를 붙여야 합니다.<br>송달료는 <strong>파산단독사건</strong> : 송달료10회 + (채권자수 x 4회) / <strong>면책사건</strong> : 송달료10회 + (채권자수 x 3회) 입니다.<br><em>※파산신청하는 곳에 따라 다름</em></li>' +
      '<li><span class="check">✔</span><strong>파산신청자격</strong>: 채무 초과(자산 &lt; 부채) + 수입으로 상환 불가 상태</li>' +
      '<li><span class="check">✔</span>기초생활수급자, 무직자도 개인파산 신청 가능</li>' +
      '<li><span class="check">✔</span>개인회생파산 중 어느 것이 유리한지 무료 비교 상담 가능</li></ul>' +
      "파산신청하는 곳을 찾고 계신다면 화민 로펌에서 전국 어디서나 상담받으실 수 있습니다.",
    cta: [{ label: "📞 파산 무료 상담", href: "tel:1577-4318" }],
  },
  {
    cats: ["corporate"],
    question: "법인파산이란 무엇인가요?",
    answerHtml:
      "법인파산은 <strong>재정 위기에 처한 기업이 법원을 통해 해산하고 자산을 처분해 채무를 정리하는 절차</strong>입니다. 토지, 건물, 재고, 미수채권 등 법인 명의의 모든 자산이 청산 대상에 포함됩니다.",
    cta: [
      { label: "📞 법인파산 무료 상담", href: "tel:1577-4318" },
      { label: "💬 카카오로 확인하기", href: KAKAO_URL, kakao: true },
    ],
  },
  {
    cats: ["corporate"],
    question: "법인파산을 진행하면 어떤 장점이 있나요?",
    answerHtml:
      "법인파산은 법원의 관리 아래 진행되므로 <strong>대표자와 채권자 모두에게 다음과 같은 실질적인 장점</strong>이 있습니다." +
      '<ul><li><span class="check">✔</span>법원의 관리 아래 회사 자산을 공정하게 분배</li>' +
      '<li><span class="check">✔</span>체불임금·세금 문제로 인한 형사 책임 예방</li>' +
      '<li><span class="check">✔</span>체불된 임금은 법적으로 우선 보호</li>' +
      '<li><span class="check">✔</span>사업 중단으로 인한 추가 손실 예방</li>' +
      '<li><span class="check">✔</span>압류, 강제집행, 소송 등 법적 절차 일시 중단 가능</li></ul>',
    cta: [{ label: "📞 법인파산 장점 상담", href: "tel:1577-4318" }],
  },
  {
    cats: ["corporate"],
    question: "법인파산 신청 시 필요한 서류는 무엇인가요?",
    answerHtml:
      "법인파산 신청 시에는 회사의 조직·재무·재산·부채 현황을 증빙할 수 있는 서류가 필요합니다." +
      '<ul><li><span class="check">✔</span><strong>회사업무현황 및 조직구성 관련 서류</strong>: 법인등기부등본, 대표이사이력서, 사업자등록증, 임직원 명단 등</li>' +
      '<li><span class="check">✔</span><strong>회계 관련 서류</strong>: 재무상태표, 손익계산서 등</li>' +
      '<li><span class="check">✔</span><strong>기업의 재산 서류</strong>: 부동산, 현금, 상표권 등</li>' +
      '<li><span class="check">✔</span><strong>기업의 부채 관련 서류</strong> 등</li></ul>' +
      "서류 준비가 막막하신 경우, 상담을 통해 필요 서류 리스트와 준비 방법을 안내해드립니다.",
    cta: [
      { label: "📞 필요서류 안내받기", href: "tel:1577-4318" },
      { label: "💬 카카오로 문의하기", href: KAKAO_URL, kakao: true },
    ],
  },
  {
    cats: ["corporate"],
    badge: { label: "NEW", kind: "new" },
    question: "법인파산 진행절차는 어떻게 되나요?",
    answerHtml:
      "<strong>신청부터 파산선고 결정까지는 약 1~2개월 정도 소요됩니다.</strong>" +
      '<ul><li><span class="check">✔</span><strong>① 파산신청</strong>: 신청서 제출 — 약 1~2개월 소요</li>' +
      '<li><span class="check">✔</span><strong>② 심문, 보정명령, 예납명령</strong></li>' +
      '<li><span class="check">✔</span><strong>③ 파산선고</strong>: 약 1~3개월 소요</li>' +
      '<li><span class="check">✔</span><strong>④ 파산재단의 현금화</strong>: 약 6개월 소요</li>' +
      '<li><span class="check">✔</span><strong>⑤ 제1회 채권자집회 및 채권조사기일</strong></li>' +
      '<li><span class="check">✔</span><strong>⑥ 재단채권 변제, 파산채권 배당</strong>: 채권자집회, 변제, 배당 — 약 3~6개월 소요</li>' +
      '<li><span class="check">✔</span><strong>⑦ 계산보고를 위한 채권자집회</strong>: 절차 종결 — 약 1~2개월 소요</li></ul>' +
      "<em>※ 사건에 따라 실제 절차 소요기간이 상이할 수 있습니다.</em>",
    cta: [
      { label: "📞 진행절차 무료 상담", href: "tel:1577-4318" },
      { label: "💬 카카오로 확인하기", href: KAKAO_URL, kakao: true },
    ],
  },
  {
    cats: ["recovery", "credit"],
    question: "개인회생 면책 기간 동안 생활은 어떻게 되나요?",
    answerHtml:
      "개인회생 면책 기간(변제기간)은 통상 <strong>3~5년</strong>이며, 그 기간 중 일상생활은 정상적으로 가능합니다." +
      '<ul><li><span class="check">✔</span>체크카드 사용, 취업, 자영업 모두 가능</li>' +
      '<li><span class="check">✔</span>신용카드 신규 발급·대출은 제한됨</li>' +
      '<li><span class="check">✔</span>서울회생법원 실무준칙 424호 해당하는 경우 개인회생 변제기간단축 신청 가능 <br><strong>*신청 가능 대상</strong> : 만 30세 미만의 청년, 한부모가족, 만 65세 이상 고령자, 중증 장애인, 원금 전액 변제, 2명 이상의 미성년 자녀를 양육하는 경우 3년 미만의 기간을 정할 수 있음<br><em>※ 단, 도박이나 주식/코인 등 사행성 채무의 경우 해당되지 않음</em></li>' +
      '<li><span class="check">✔</span>개인회생 신청기간(법원 접수~개시결정까지)은 통상 4~6개월 (※ 관할 법원에 따라 상이할 수 있음)</li>' +
      '<li><span class="check">✔</span>면책 완료 후 신용점수 회복 시작</li></ul>',
    cta: [{ label: "📞 기간 단축 방법 상담", href: "tel:1577-4318" }],
  },
  {
    cats: ["recovery", "cost"],
    badge: { label: "NEW", kind: "new" },
    question: "개인회생 절차와 개인회생 조회는 어떻게 하나요?",
    answerHtml:
      "<strong>개인회생 절차</strong>는 다음 순서로 진행됩니다:" +
      "<ul><li>① 무료상담 → 자격·서류 확인</li>" +
      "<li>② 신청서 작성·제출 (법원)</li>" +
      "<li>③ 보전처분, 포괄적 금지명령(압류 중단) 신청</li>" +
      "<li>④ 법원 심사 후 개시결정 및 채권자 집회</li>" +
      "<li>⑤ 인가 결정 → 변제 시작 (3~5년)</li>" +
      "<li>⑥ 면책 결정 → 잔여 채무 소멸</li></ul>" +
      "<strong>개인회생 사건번호 조회</strong>는 대법원 전자소송 사이트 또는 신용정보원에서 가능하며, 담당 사무원이 진행 상황을 직접 조회·안내해드립니다.<br><br>개인프리워크아웃(연체 90일 미만)이나 개인워크아웃조건에 해당하는 경우 신용회복위원회뿐만 아니라, 화민 로펌에서도 나에게 맞는 채무조정제도를 비교해보실 수 있습니다.",
    cta: [
      { label: "📞 절차 무료 안내", href: "tel:1577-4318" },
      { label: "💬 카카오 상담", href: KAKAO_URL, kakao: true },
    ],
  },
  {
    cats: ["recovery", "bankruptcy"],
    question: "자영업자·소상공인도 개인회생이 가능한가요? 도박빚·최근대출도 해당되나요?",
    answerHtml:
      "<strong>자영업자·소상공인도 개인회생·파산 신청이 가능합니다.</strong> 폐업 후에도 신청할 수 있으며, 소상공인 폐업 지원 제도와 병행할 수도 있습니다." +
      '<ul><li><span class="check">✔</span><strong>개인회생 최근 대출</strong>: 최근 1~2년 내 대출도 포함 가능 (단, 사기·편취 목적이 아닌 경우)</li>' +
      '<li><span class="check">✔</span><strong>개인회생 도박</strong>: 도박으로 인한 채무는 면책이 제한될 수 있으나 변호사 전략으로 해결 가능한 경우 있음</li>' +
      '<li><span class="check">✔</span><strong>개인회생파산</strong>: 자영업자의 경우 법인 채무와 개인 채무를 분리해 개인파산 또는 도산 처리 가능</li></ul>' +
      "복잡한 상황일수록 전문 변호사 상담이 중요합니다.",
    cta: [{ label: "📞 자영업자 전용 상담", href: "tel:1577-4318" }],
  },
];

export const navLinks = [
  { label: "로펌 소개", href: "https://505zrg.com/default/about/doctor/sub2_1.php?top=1&sub=1" },
  { label: "제로백 회생·파산", href: "https://505zrg.com/default/menu2/sub1/sub1_1.php?top=2&sub=1" },
  { label: "의뢰인 실제후기", href: "https://505zrg.com/default/community/sub2.php?top=4&sub=2" },
  { label: "온라인상담", href: "https://505zrg.com/default/reservation/sub2.php?top=5&sub=1" },
  { label: "블로그", href: "https://zrg505seoul.com" },
];

export const businessInfo = {
  name: "법률사무소 화민",
  representative: "이상혁",
  registrationNumber: "659-22-01666",
  address: "경기도 고양시 일산동구 중앙로 1197, 601호(장항동)",
  tel: "1577-4318",
  email: "505zrg@naver.com",
};
