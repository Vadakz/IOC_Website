import { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className="navbar">
            <div className="navbar-container">
                <a href="#home" className="navbar-brand">

                    <img
                        src={logo}
                        alt= "Intrernational Operations Company"
                        className="navbar-logo"
                    />

                </a>

                <nav className={`navbar-links ${menuOpen ? "navbar-links-open" : ""}`}>
                    <a href="#home" onClick={closeMenu}>
                        Home
                    </a>

                    <a href="#about" onClick={closeMenu}>
                        About Us
                    </a>

                    <a href="#services" onClick={closeMenu}>
                        Services
                    </a>

                    <a href="#coverage" onClick={closeMenu}>
                        Coverage
                    </a>

                    <a href="#contact" onClick={closeMenu}>
                        Contact Us
                    </a>

                    <a
                        href="#contact"
                        className="navbar-mobile-quote"
                        onClick={closeMenu}
                    >
                        Get a Quote
                    </a>
                </nav>

                <div className="navbar-actions">
                    <a href="#contact" className="navbar-quote">
                        Get a Quote
                    </a>

                    <button
                        type="button"
                        className={`navbar-toggle ${menuOpen ? "navbar-toggle-active" : ""}`}
                        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen((current) => !current)}
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </div>
        </header>
    );
}