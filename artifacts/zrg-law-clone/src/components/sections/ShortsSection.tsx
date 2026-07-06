import { useEffect, useRef, useState } from "react";
import { shortsCards } from "@/data/content";

const img = (name: string) => `${import.meta.env.BASE_URL}images/${name}`;
const INTERVAL = 5000;

export default function ShortsSection() {
  const [active, setActive] = useState(0);
  const timerRef = useRef<number | null>(null);

  const goTo = (idx: number) => {
    setActive(((idx % shortsCards.length) + shortsCards.length) % shortsCards.length);
  };

  useEffect(() => {
    if (timerRef.current) window.clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => {
      setActive((c) => (c + 1) % shortsCards.length);
    }, INTERVAL);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [active]);

  return (
    <section className="zrg-shorts">
      <div className="zrg-shorts-inner">
        <div className="zrg-shorts-heading">의뢰인들의 생생한 후기</div>

        <div className="zrg-shorts-wrap">
          <div className="zrg-shorts-track">
            {shortsCards.map((card, idx) => (
              <div
                key={card.url}
                className={`zrg-shorts-card ${idx === active ? "is-active" : ""}`}
                onClick={() => window.open(card.url, "_blank")}
              >
                <div className="zrg-shorts-thumb">
                  <img src={img(card.image)} alt={card.alt} />
                  <div className="zrg-shorts-play">▶</div>
                  {idx === active && (
                    <div className="zrg-shorts-ring">
                      <svg viewBox="0 0 44 44">
                        <circle className="ring-bg" cx="22" cy="22" r="18" />
                        <circle
                          key={active}
                          className="ring-fill"
                          cx="22"
                          cy="22"
                          r="18"
                          style={{ animationDuration: `${INTERVAL}ms` }}
                        />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="zrg-shorts-caption">
                  {card.title}
                  <br />
                  <span>{card.subtitle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="zrg-shorts-dots">
          {shortsCards.map((card, idx) => (
            <span
              key={card.url}
              className={idx === active ? "is-active" : ""}
              role="button"
              tabIndex={0}
              onClick={() => goTo(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
