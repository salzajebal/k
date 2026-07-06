import { marqueeIcons } from "@/data/content";

const img = (name: string) => `${import.meta.env.BASE_URL}images/${name}`;

export default function IconMarquee() {
  return (
    <section className="zrg-marquee">
      <div className="zrg-marquee-track">
        {[0, 1].map((copy) => (
          <ul key={copy} aria-hidden={copy === 1}>
            {marqueeIcons.map((icon) => (
              <li key={`${copy}-${icon.image}`}>
                <img src={img(icon.image)} alt={icon.alt} />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
