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
    image: "slide_worry.png",
    title: "더 이상 혼자 고민하지 마세요\n개인회생, 화민 로펌이 함께합니다",
    description: "· 압류 걱정 끝, 신속한 금지명령 조치",
  },
  {
    image: "slide_easy.png",
    title: "누구나 쉽고 간편하게\n화민 로펌 솔루션으로 시작하세요",
    description:
      "· 근무 중에도 30초 간편 무료진단!\n· 서류 발급부터 진행상황 확인까지 한 번에",
  },
  {
    image: "slide_expert.png",
    title: "14년 경력의 전문성이 만든\n확실한 회생·파산 솔루션",
    description:
      "· 도산전문변호사가 사건을 직접 관리\n· 기각 걱정 없는 책임 관리 시스템",
  },
  {
    image: "slide_people.png",
    title: "누구에게나 열려있는 기회\n부담은 낮추고 해결책은 확실하게",
    description:
      "· 일용직 · 알바 · 주부 · 자영업도 소득만 있으면 신청 OK!\n· 형편에 맞춘 분납 등 유연한 수임료 방식",
  },
  {
    image: "slide_prepare.png",
    title: "연체 전인 지금이 골든타임\n미리 준비하고 대비하세요",
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
  title: string;
  image: string;
  quote: string;
}

export const lawyers: Lawyer[] = [
  {
    name: "이상혁 대표변호사",
    title: "화민 로펌 대표변호사 · 사법연수원 42기",
    image: "lawyer-rep.png",
    quote: "의뢰인의 상황을 제 일처럼 살펴, 가장 확실한 해결책을 찾아드립니다.",
  },
];

export const navLinks = [
  { label: "대표변호사 소개", href: "#lawyers" },
  { label: "성공사례", href: "#success-cases" },
  { label: "유튜브", href: "#youtube" },
  { label: "온라인상담", href: "#lead-form" },
];

export const businessInfo = {
  name: "법률사무소 화민",
  representative: "이상혁",
  registrationNumber: "659-22-01666",
  openDate: "2023년 11월 01일",
  address: "경기도 고양시 일산동구 중앙로 1197, 601호(장항동)",
};
