import { Link } from "wouter";
import { successCases } from "@/data/content";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

const img = (name: string) => `${import.meta.env.BASE_URL}images/${name}`;

export default function SuccessCasesPage() {
  return (
    <div className="zrg-app">
      <Header />
      <main>
        <section className="zrg-success zrg-success-page">
          <div className="zrg-success-inner">
            <Link href="/" className="zrg-success-back">
              ← 홈으로
            </Link>
            <h1 className="zrg-section-title">화민 성공사례</h1>
            <p className="zrg-success-desc">
              의뢰인의 소중한 개인정보 보호를 위해 이름, 주민등록번호 등은 모두 모자이크 처리했습니다.
            </p>
            <div className="zrg-success-grid zrg-success-grid-page">
              {successCases.map((item, idx) => (
                <a
                  key={item.image}
                  className="zrg-success-card"
                  href={img(item.image)}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="zrg-success-img">
                    <img src={img(item.image)} alt={`${item.label} ${idx + 1}`} loading="lazy" />
                  </div>
                  <div className="zrg-success-label">{item.label}</div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
