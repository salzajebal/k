import { footerOffices } from "@/data/content";

const img = (name: string) => `${import.meta.env.BASE_URL}images/${name}`;

export default function Footer() {
  return (
    <footer className="zrg-footer">
      <div className="zrg-footer-inner">
        <div className="zrg-footer-logo">
          <a href="/">
            <img src={img("logo-w.png")} alt="법무법인 지름길" />
          </a>
        </div>

        <div className="zrg-footer-info">
          <span className="zrg-footer-title">법무법인 지름길</span>
          {footerOffices.map((office) => (
            <span key={office.label}>
              {office.label}&nbsp;&nbsp;|&nbsp;&nbsp;{office.address}.&nbsp;&nbsp;Tel.&nbsp;{office.tel}
              {office.email ? `\u00A0\u00A0e-mail.\u00A0${office.email}` : ""}
            </span>
          ))}
          <span className="zrg-footer-copy">Copyrights © 2022 All Rights Reserved by ZRUMGIL.</span>
        </div>

        <div className="zrg-footer-customer">
          <p className="zrg-footer-call">1577.4318</p>
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
