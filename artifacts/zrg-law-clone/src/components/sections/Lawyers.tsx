import { KAKAO_URL, PHONE, lawyers } from "@/data/content";

const img = (name: string) => `${import.meta.env.BASE_URL}images/${name}`;

export default function Lawyers() {
  return (
    <section className="zrg-lawyers">
      <div className="zrg-lawyers-inner">
        <h2 className="zrg-section-title">화민 로펌 대표변호사 소개</h2>
        <div className="zrg-lawyers-list">
          {lawyers.map((lawyer) => (
            <div key={lawyer.name} className="zrg-lawyer-card">
              <div className="zrg-lawyer-photo">
                <img src={img(lawyer.image)} alt={lawyer.name} />
              </div>
              <div className="zrg-lawyer-info">
                <p className="zrg-lawyer-title">{lawyer.title}</p>
                <h3 className="zrg-lawyer-name">{lawyer.name}</h3>
                <p className="zrg-lawyer-quote">“{lawyer.quote}”</p>
                <ul className="zrg-lawyer-highlights">
                  {lawyer.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="zrg-lawyer-actions">
                  <a className="zrg-lawyer-btn zrg-lawyer-btn-call" href={`tel:${PHONE}`}>
                    📞 {PHONE}
                  </a>
                  <a
                    className="zrg-lawyer-btn zrg-lawyer-btn-kakao"
                    href={KAKAO_URL}
                    target="_blank"
                    rel="noreferrer"
                  >
                    카카오톡 상담
                  </a>
                  <a
                    className="zrg-lawyer-btn zrg-lawyer-btn-more"
                    href={lawyer.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    프로필 자세히 보기
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
