import { offices } from "@/data/content";

const img = (name: string) => `${import.meta.env.BASE_URL}images/${name}`;

export default function OfficeBand() {
  return (
    <section className="zrg-offices">
      <div className="zrg-offices-inner">
        {offices.map((office) => (
          <a
            key={office.name}
            className="zrg-office-card"
            href={office.mapUrl}
            target="_blank"
            rel="noreferrer"
          >
            <div className="zrg-office-img">
              <img src={img(office.image)} alt={`${office.name} 사무소`} />
            </div>
            <div className="zrg-office-label">
              <strong>{office.name}</strong>
              <span>{office.suffix}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
