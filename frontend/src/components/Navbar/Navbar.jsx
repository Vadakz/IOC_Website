import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const goToSection = (sectionId) => {
        closeMenu();
        navigate("/");

        setTimeout(() => {
            const section = document.getElementById(sectionId);

            if (section) {
                section.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        }, 100);
    };

    return (
        <header className="navbar">
            <div className="navbar-container">
                <Link
                    to="/"
                    className="navbar-brand"
                    onClick={closeMenu}
                >
                    <img
                        src={logo}
                        alt="International Operations Company"
                        className="navbar-logo"
                    />
                </Link>

                <nav
                    className={`navbar-links ${
                        menuOpen ? "navbar-links-open" : ""
                    }`}
                >
                    <Link to="/" onClick={closeMenu}>
                        Home
                    </Link>

                    <button
                        type="button"
                        onClick={() => goToSection("about")}
                    >
                        About Us
                    </button>

                    <button
                        type="button"
                        onClick={() => goToSection("services")}
                    >
                        Services
                    </button>

                    <button
                        type="button"
                        onClick={() => goToSection("coverage")}
                    >
                        Coverage
                    </button>

                    <button
                        type="button"
                        onClick={() => goToSection("contact")}
                    >
                        Contact Us
                    </button>

                    <button
                        type="button"
                        className="navbar-mobile-quote"
                        onClick={() => goToSection("contact")}
                    >
                        Get a Quote
                    </button>
                </nav>

                <div className="navbar-actions">
                    <button
                        type="button"
                        className="navbar-quote"
                        onClick={() => goToSection("contact")}
                    >
                        Get a Quote
                    </button>

                    <button
                        type="button"
                        className={`navbar-toggle ${
                            menuOpen ? "navbar-toggle-active" : ""
                        }`}
                        aria-label={
                            menuOpen
                                ? "Close navigation menu"
                                : "Open navigation menu"
                        }
                        aria-expanded={menuOpen}
                        onClick={() =>
                            setMenuOpen((current) => !current)
                        }
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