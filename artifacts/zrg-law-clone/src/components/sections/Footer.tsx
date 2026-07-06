import { businessInfo } from "@/data/content";

const img = (name: string) => `${import.meta.env.BASE_URL}images/${name}`;

export default function Footer() {
  return (
    <footer className="zrg-footer">
      <div className="zrg-footer-inner">
        <div className="zrg-footer-logo">
          <a href="/">
            <img src={img("logo-w.png")} alt="법무법인 화민" />
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
          <span>
            전화.&nbsp;{businessInfo.tel}&nbsp;&nbsp;|&nbsp;&nbsp;팩스.&nbsp;{businessInfo.fax}
          </span>
        </div>
      </div>
    </footer>
  );
}
