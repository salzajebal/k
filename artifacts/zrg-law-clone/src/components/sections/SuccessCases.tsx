import { useState } from "react";
import { successCases } from "@/data/content";

const img = (name: string) => `${import.meta.env.BASE_URL}images/${name}`;

const PAGE_SIZE = 10;

export default function SuccessCases() {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const visibleCases = successCases.slice(0, visibleCount);
  const hasMore = visibleCount < successCases.length;

  return (
    <section className="zrg-success" id="success-cases">
      <div className="zrg-success-inner">
        <h2 className="zrg-section-title">화민 로펌 성공사례</h2>
        <p className="zrg-success-desc">
          의뢰인의 소중한 개인정보 보호를 위해 이름, 주민등록번호 등은 모두 모자이크 처리했습니다.
        </p>
        <div className="zrg-success-grid">
          {visibleCases.map((item, idx) => (
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
        {hasMore && (
          <div className="zrg-success-more">
            <button type="button" onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}>
              더보기
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
