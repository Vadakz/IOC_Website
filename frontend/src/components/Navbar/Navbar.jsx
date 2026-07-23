import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";
import services from "../../data/services";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const { t, i18n } = useTranslation();
    const language = i18n.resolvedLanguage || i18n.language;

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
        }, 150);
    };

    const changeLanguage = async (selectedLanguage) => {
        await i18n.changeLanguage(selectedLanguage);

        localStorage.setItem("language", selectedLanguage);
        document.documentElement.lang = selectedLanguage;
        document.documentElement.dir =
            selectedLanguage === "ar" ? "rtl" : "ltr";
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
                        {t("navbar.home")}
                    </Link>

                    <button
                        type="button"
                        onClick={() => goToSection("about")}
                    >
                        {t("navbar.about")}
                    </button>

                    <div className="navbar-dropdown">
                        <button
                            type="button"
                            className="navbar-dropdown-trigger"
                            onClick={() => goToSection("services")}
                        >
                            {t("navbar.services")}
                            <span className="dropdown-arrow">▾</span>
                        </button>

                        <div className="navbar-dropdown-menu">
                            {services.map((service) => {
                                const ServiceIcon = service.icon;

                                return (
                                    <Link
                                        key={service.id}
                                        to={`/services/${service.slug}`}
                                        onClick={closeMenu}
                                    >
                                        <span className="dropdown-service-icon">
                                            {ServiceIcon && <ServiceIcon />}
                                        </span>

                                        <span>{service.title}</span>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={() => goToSection("coverage")}
                    >
                        {t("navbar.coverage")}
                    </button>

                    <Link to="/contact" onClick={closeMenu}>
                        {t("navbar.contact")}
                    </Link>

                    <div
                        className="navbar-mobile-language"
                        aria-label="Select language"
                    >
                        <span aria-hidden="true">🌐</span>

                        <button
                            type="button"
                            className={language === "en" ? "active" : ""}
                            onClick={() => changeLanguage("en")}
                        >
                            EN
                        </button>

                        <span className="language-divider">|</span>

                        <button
                            type="button"
                            lang="ar"
                            className={language === "ar" ? "active" : ""}
                            onClick={() => changeLanguage("ar")}
                        >
                            العربية
                        </button>
                    </div>

                    <Link
                        to="/contact"
                        className="navbar-mobile-quote"
                        onClick={closeMenu}
                    >
                        {t("navbar.quote")}
                    </Link>
                </nav>

                <div className="navbar-actions">
                    <div
                        className="navbar-language"
                        aria-label="Select language"
                    >
                        <span
                            className="navbar-language-icon"
                            aria-hidden="true"
                        >
                            🌐
                        </span>

                        <button
                            type="button"
                            className={language === "en" ? "active" : ""}
                            onClick={() => changeLanguage("en")}
                        >
                            EN
                        </button>

                        <span className="language-divider">|</span>

                        <button
                            type="button"
                            lang="ar"
                            className={language === "ar" ? "active" : ""}
                            onClick={() => changeLanguage("ar")}
                        >
                            العربية
                        </button>
                    </div>

                    <Link
                        to="/contact"
                        className="navbar-quote"
                        onClick={closeMenu}
                    >
                        {t("navbar.quote")}
                    </Link>

                    <button
                        type="button"
                        className={`navbar-toggle ${
                            menuOpen ? "navbar-toggle-active" : ""
                        }`}
                        aria-label={
                            menuOpen
                                ? t("navbar.closeMenu")
                                : t("navbar.openMenu")
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