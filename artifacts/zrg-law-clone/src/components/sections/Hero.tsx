import { useCallback, useEffect, useRef, useState } from "react";
import { heroSlides } from "@/data/content";

const img = (name: string) => `${import.meta.env.BASE_URL}images/${name}`;
const SLIDE_DURATION = 6000;

export default function Hero({ onOpenConsult }: { onOpenConsult?: () => void }) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<number | null>(null);

  const goTo = useCallback((idx: number) => {
    setCurrent(((idx % heroSlides.length) + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    if (timerRef.current) window.clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => {
      setCurrent((c) => (c + 1) % heroSlides.length);
    }, SLIDE_DURATION);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [current]);

  return (
    <section className="zrg-hero">
      <div className="zrg-hero-slides">
        {heroSlides.map((slide, idx) => (
          <div
            key={slide.image}
            className={`zrg-hero-slide ${idx === current ? "is-active" : ""}`}
            style={{ backgroundImage: `url(${img(slide.image)})` }}
          >
            <div className="zrg-hero-textbox">
              <div className="zrg-hero-badge">무료로 상담해드립니다</div>
              <div className="zrg-hero-title">
                {slide.title.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    {i === 0 && <br />}
                  </span>
                ))}
              </div>
              <div className="zrg-hero-desc">
                {slide.description.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    {i === 0 && <br />}
                  </span>
                ))}
              </div>
              {onOpenConsult && (
                <button type="button" className="zrg-hero-cta" onClick={onOpenConsult}>
                  무료 상담 신청하기
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="zrg-hero-pagin">
        <button
          type="button"
          className="zrg-hero-nav zrg-hero-prev"
          aria-label="이전 슬라이드"
          onClick={() => goTo(current - 1)}
        />
        <span className="zrg-hero-current">{String(current + 1).padStart(2, "0")}</span>
        <div className="zrg-hero-progress">
          <span
            key={current}
            className="zrg-hero-progress-bar"
            style={{ animationDuration: `${SLIDE_DURATION}ms` }}
          />
        </div>
        <span className="zrg-hero-total">{String(heroSlides.length).padStart(2, "0")}</span>
        <button
          type="button"
          className="zrg-hero-nav zrg-hero-next"
          aria-label="다음 슬라이드"
          onClick={() => goTo(current + 1)}
        />
      </div>
    </section>
  );
}
