import { useState } from "react";
import { certificateImages } from "@/data/content";

const img = (name: string) => `${import.meta.env.BASE_URL}images/${name}`;

export default function Certificates() {
  const [start, setStart] = useState(0);
  const visible = 1;

  const move = (dir: number) => {
    setStart((s) => (s + dir + certificateImages.length) % certificateImages.length);
  };

  return (
    <section className="zrg-certs">
      <div className="zrg-certs-inner">
        <h2 className="zrg-section-title">지름길 법무법인 인증서</h2>
        <div className="zrg-certs-carousel">
          <button type="button" className="zrg-certs-arrow left" onClick={() => move(-1)} aria-label="이전">
            ‹
          </button>
          <div className="zrg-certs-track">
            {certificateImages.map((cert, idx) => (
              <div
                key={cert}
                className={`zrg-certs-item ${idx === start ? "is-active" : ""}`}
                style={{ order: (idx - start + certificateImages.length) % certificateImages.length }}
              >
                <img src={img(cert)} alt={`인증서 ${idx + 1}`} />
              </div>
            ))}
          </div>
          <button type="button" className="zrg-certs-arrow right" onClick={() => move(1)} aria-label="다음">
            ›
          </button>
        </div>
        <div className="zrg-certs-dots">
          {certificateImages.map((cert, idx) => (
            <span
              key={cert}
              className={idx === start ? "is-active" : ""}
              role="button"
              tabIndex={0}
              onClick={() => setStart(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
