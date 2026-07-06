import { useState } from "react";
import { navLinks } from "@/data/content";

const img = (name: string) => `${import.meta.env.BASE_URL}images/${name}`;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="zrg-header">
      <div className="zrg-header-inner">
        <a href="/" className="zrg-logo">
          <img src={img("logo.png")} alt="법무법인 화민" />
        </a>

        <nav className={`zrg-nav ${menuOpen ? "is-open" : ""}`}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

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
