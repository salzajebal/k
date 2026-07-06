import { useState } from "react";
import { navLinks, PHONE } from "@/data/content";

const img = (name: string) => `${import.meta.env.BASE_URL}images/${name}`;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="zrg-header">
      <div className="zrg-header-inner">
        <a href="/" className="zrg-logo">
          <img src={img("logo.png")} alt="화민 법무법인" />
        </a>

        <nav className={`zrg-nav ${menuOpen ? "is-open" : ""}`}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="zrg-header-cta">
          <a className="zrg-header-call" href={`tel:${PHONE}`}>
            <img src={img("icon5-tel_02.png")} alt="전화상담" />
            <span>{PHONE}</span>
          </a>
        </div>

        <button
          type="button"
          className="zrg-menu-toggle"
          aria-label="메뉴 열기"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
