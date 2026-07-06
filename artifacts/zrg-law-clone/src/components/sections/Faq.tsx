import { useState } from "react";
import { faqItems } from "@/data/content";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  return (
    <section className="zrg-faq" id="faq">
      <div className="zrg-faq-inner">
        <h2 className="zrg-section-title">궁금한 점이 있으신가요?</h2>

        <div className="zrg-faq-list">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div className={`zrg-faq-item ${isOpen ? "is-open" : ""}`} key={item.question}>
                <button
                  type="button"
                  className="zrg-faq-question"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                >
                  {item.badge && (
                    <span className={`zrg-faq-badge zrg-badge-${item.badge.kind}`}>
                      {item.badge.label}
                    </span>
                  )}
                  <span className="zrg-faq-q-text">Q. {item.question}</span>
                  <span className="zrg-faq-toggle">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && (
                  <div className="zrg-faq-answer">
                    <div
                      className="zrg-faq-answer-text"
                      dangerouslySetInnerHTML={{ __html: item.answerHtml }}
                    />
                    <div className="zrg-faq-cta">
                      {item.cta.map((cta) => (
                        <a
                          key={cta.label}
                          href={cta.href}
                          target={cta.href.startsWith("tel:") ? undefined : "_blank"}
                          rel={cta.href.startsWith("tel:") ? undefined : "noreferrer"}
                          className={cta.kakao ? "zrg-faq-btn-secondary" : "zrg-faq-btn-primary"}
                        >
                          {cta.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
