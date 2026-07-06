import { lawyers } from "@/data/content";

const img = (name: string) => `${import.meta.env.BASE_URL}images/${name}`;

export default function Lawyers() {
  return (
    <section className="zrg-lawyers" id="lawyers">
      <div className="zrg-lawyers-inner">
        <p className="zrg-lawyers-eyebrow">ATTORNEY PROFILE</p>
        <h2 className="zrg-section-title">법무법인 화민 대표변호사 소개</h2>
        <div className="zrg-lawyers-list">
          {lawyers.map((lawyer) => (
            <div key={lawyer.name} className="zrg-lawyer-card">
              <div className="zrg-lawyer-photo">
                <img src={img(lawyer.image)} alt={lawyer.name} />
              </div>
              <div className="zrg-lawyer-info">
                <p className="zrg-lawyer-title">{lawyer.title}</p>
                <h3 className="zrg-lawyer-name">{lawyer.name}</h3>

                <div className="zrg-lawyer-tags">
                  {lawyer.specialties.map((tag) => (
                    <span key={tag} className="zrg-lawyer-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="zrg-lawyer-intro">{lawyer.intro}</p>

                <p className="zrg-lawyer-quote">“{lawyer.quote}”</p>

                <ul className="zrg-lawyer-career">
                  {lawyer.career.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
