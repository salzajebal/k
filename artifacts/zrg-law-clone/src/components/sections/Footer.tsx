import { businessInfo } from "@/data/content";

const img = (name: string) => `${import.meta.env.BASE_URL}images/${name}`;

export default function Footer() {
  return (
    <footer className="zrg-footer">
      <div className="zrg-footer-inner">
        <div className="zrg-footer-logo">
          <a href="/">
            <img src={img("logo-w.png")} alt="화민 로펌" />
          </a>
        </div>

        <div className="zrg-footer-info">
          <span>
            상호.&nbsp;{businessInfo.name}&nbsp;&nbsp;|&nbsp;&nbsp;대표.&nbsp;{businessInfo.representative}
            &nbsp;&nbsp;|&nbsp;&nbsp;사업자등록번호.&nbsp;{businessInfo.registrationNumber}
          </span>
          <span>
            개업연월일.&nbsp;{businessInfo.openDate}
          </span>
          <span>
            사업장소재지.&nbsp;{businessInfo.address}
          </span>
        </div>

        <div className="zrg-footer-customer">
          <div className="zrg-footer-social">
            <a href="https://www.instagram.com/505_shortcut/" target="_blank" rel="noreferrer" aria-label="Instagram">
              IG
            </a>
            <a href="https://blog.naver.com/luvkok" target="_blank" rel="noreferrer" aria-label="Naver Blog">
              N
            </a>
            <a href="http://pf.kakao.com/_xdxiexgb/chat" target="_blank" rel="noreferrer" aria-label="Kakao">
              K
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
