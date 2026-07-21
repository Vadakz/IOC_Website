import { useEffect, useState } from "react";

export default function Header({ onMenuOpen }) {
  const [wide, setWide] = useState(true);

  useEffect(() => {
    const onResize = () => setWide(window.innerWidth > 1180);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="site">
      <div className="nav">
        <a href="#home" className="brand">
          <span className="brand-mark">iC</span>
          <span className="brand-text">
            <strong>IOC / ECO</strong>
            <span>Embracing Sustainable Living</span>
          </span>
        </a>

        <nav className="links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="nav-cta">
          {wide && (
            <a href="tel:920051300" className="btn btn-ghost desk-call">
              920 05 1300
            </a>
          )}
          <a href="#contact" className="btn btn-primary">
            Get a Quote
          </a>
          <button className="menu-toggle" aria-label="Open menu" onClick={onMenuOpen}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
