import { lawyers } from "@/data/content";

const img = (name: string) => `${import.meta.env.BASE_URL}images/${name}`;

export default function Lawyers() {
  return (
    <section className="zrg-lawyers">
      <div className="zrg-lawyers-inner">
        <h2 className="zrg-section-title">지름길 법무법인 변호사 소개</h2>
        <div className="zrg-lawyers-grid">
          {lawyers.map((lawyer) => (
            <a
              key={lawyer.name}
              className="zrg-lawyer-card"
              href={lawyer.href}
              target="_blank"
              rel="noreferrer"
            >
              <div className="zrg-lawyer-img">
                <img src={img(lawyer.image)} alt={lawyer.name} />
              </div>
              <div className="zrg-lawyer-name">{lawyer.name}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
