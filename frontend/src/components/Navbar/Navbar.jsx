import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./Navbar.css";
import logo from "../../assets/images/logo.png";
import services from "../../data/services";


/* ==========================================================
   NAVBAR COMPONENT
========================================================== */

export default function Navbar() {

    /* ======================================================
       STATE & ROUTER
    ====================================================== */

    const [menuOpen, setMenuOpen] = useState(false);

    const navigate = useNavigate();


    /* ======================================================
       TRANSLATION
    ====================================================== */

    const { t, i18n } = useTranslation();

    const language =
        i18n.resolvedLanguage || i18n.language;

    const isArabic =
        language?.startsWith("ar");


    /* ======================================================
       CLOSE MOBILE MENU
    ====================================================== */

    const closeMenu = () => {
        setMenuOpen(false);
    };


    /* ======================================================
       NAVIGATE TO HOMEPAGE SECTION
    ====================================================== */

    const goToSection = (sectionId) => {

        closeMenu();

        navigate("/");

        setTimeout(() => {

            const section =
                document.getElementById(sectionId);

            if (section) {

                section.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });

            }

        }, 150);
    };


    /* ======================================================
       CHANGE LANGUAGE
    ====================================================== */

    const changeLanguage = async (
        selectedLanguage
    ) => {

        await i18n.changeLanguage(
            selectedLanguage
        );

        localStorage.setItem(
            "language",
            selectedLanguage
        );
    };


    /* ======================================================
       NAVBAR
    ====================================================== */

    return (

        <header className="navbar">

            <div className="navbar-container">


                {/* ==================================================
                    COMPANY LOGO
                ================================================== */}

                <Link
                    to="/"
                    className="navbar-brand"
                    onClick={closeMenu}
                >

                    <img
                        src={logo}
                        alt={t("common.companyName")}
                        className="navbar-logo"
                    />

                </Link>


                {/* ==================================================
                    NAVIGATION LINKS
                ================================================== */}

                <nav
                    className={`navbar-links ${
                        menuOpen
                            ? "navbar-links-open"
                            : ""
                    }`}
                >


                    {/* ==================================================
                        HOME
                    ================================================== */}

                    <Link
                        to="/"
                        onClick={closeMenu}
                    >
                        {t("navbar.home")}
                    </Link>


                    {/* ==================================================
                        ABOUT US DROPDOWN

                        About Us
                        Our Journey
                        Our Team
                    ================================================== */}

                    <div className="navbar-dropdown">

                        <button
                            type="button"
                            className="navbar-dropdown-trigger"
                            onClick={() =>
                                goToSection("about")
                            }
                        >

                            {t("navbar.about")}

                            <span className="dropdown-arrow">
                                ▾
                            </span>

                        </button>


                        <div className="navbar-dropdown-menu">


                            {/* ABOUT US */}

                            <button
                                type="button"
                                className="navbar-dropdown-link"
                                onClick={() =>
                                    goToSection("about")
                                }
                            >
                                {t("navbar.about")}
                            </button>


                            {/* OUR JOURNEY */}

                            <Link
                                to="/journey"
                                onClick={closeMenu}
                            >
                                {t("navbar.journey")}
                            </Link>


                            {/* OUR TEAM */}

                            <Link
                                to="/team"
                                onClick={closeMenu}
                            >
                                {t("navbar.team")}
                            </Link>


                        </div>

                    </div>


                    {/* ==================================================
                        SERVICES DROPDOWN
                    ================================================== */}

                    <div className="navbar-dropdown">

                        <button
                            type="button"
                            className="navbar-dropdown-trigger"
                            onClick={() =>
                                goToSection("services")
                            }
                        >

                            {t("navbar.services")}

                            <span className="dropdown-arrow">
                                ▾
                            </span>

                        </button>


                        <div className="navbar-dropdown-menu">

                            {services.map((service) => {

                                const ServiceIcon =
                                    service.icon;

                                const localizedTitle =
                                    isArabic
                                        ? t(
                                            `serviceItems.${service.slug}.menuTitle`
                                        )
                                        : service.menuTitle;

                                return (

                                    <Link
                                        key={service.id}
                                        to={`/services/${service.slug}`}
                                        onClick={closeMenu}
                                    >

                                        <span className="dropdown-service-icon">

                                            {ServiceIcon && (
                                                <ServiceIcon />
                                            )}

                                        </span>

                                        <span>
                                            {localizedTitle}
                                        </span>

                                    </Link>

                                );

                            })}

                        </div>

                    </div>


                    {/* ==================================================
                        COVERAGE
                    ================================================== */}

                    <button
                        type="button"
                        onClick={() =>
                            goToSection("coverage")
                        }
                    >
                        {t("navbar.coverage")}
                    </button>


                    {/* ==================================================
                        CONTACT
                    ================================================== */}

                    <Link
                        to="/contact"
                        onClick={closeMenu}
                    >
                        {t("navbar.contact")}
                    </Link>


                    {/* ==================================================
                        MOBILE LANGUAGE SELECTOR
                    ================================================== */}

                    <div
                        className="navbar-mobile-language"
                        aria-label={t(
                            "navbar.selectLanguage"
                        )}
                    >

                        <span aria-hidden="true">
                            🌐
                        </span>


                        <button
                            type="button"
                            className={
                                language === "en"
                                    ? "active"
                                    : ""
                            }
                            onClick={() =>
                                changeLanguage("en")
                            }
                        >
                            EN
                        </button>


                        <span className="language-divider">
                            |
                        </span>


                        <button
                            type="button"
                            lang="ar"
                            className={
                                language === "ar"
                                    ? "active"
                                    : ""
                            }
                            onClick={() =>
                                changeLanguage("ar")
                            }
                        >
                            العربية
                        </button>

                    </div>


                    {/* ==================================================
                        MOBILE GET QUOTE
                    ================================================== */}

                    <Link
                        to="/contact"
                        className="navbar-mobile-quote"
                        onClick={closeMenu}
                    >
                        {t("navbar.quote")}
                    </Link>


                </nav>


                {/* ==================================================
                    RIGHT SIDE ACTIONS
                ================================================== */}

                <div className="navbar-actions">


                    {/* ==================================================
                        DESKTOP LANGUAGE SELECTOR
                    ================================================== */}

                    <div
                        className="navbar-language"
                        aria-label={t(
                            "navbar.selectLanguage"
                        )}
                    >

                        <span
                            className="navbar-language-icon"
                            aria-hidden="true"
                        >
                            🌐
                        </span>


                        <button
                            type="button"
                            className={
                                language === "en"
                                    ? "active"
                                    : ""
                            }
                            onClick={() =>
                                changeLanguage("en")
                            }
                        >
                            EN
                        </button>


                        <span className="language-divider">
                            |
                        </span>


                        <button
                            type="button"
                            lang="ar"
                            className={
                                language === "ar"
                                    ? "active"
                                    : ""
                            }
                            onClick={() =>
                                changeLanguage("ar")
                            }
                        >
                            العربية
                        </button>

                    </div>


                    {/* ==================================================
                        GET QUOTE
                    ================================================== */}

                    <Link
                        to="/contact"
                        className="navbar-quote"
                        onClick={closeMenu}
                    >
                        {t("navbar.quote")}
                    </Link>


                    {/* ==================================================
                        MOBILE MENU BUTTON
                    ================================================== */}

                    <button
                        type="button"
                        className={`navbar-toggle ${
                            menuOpen
                                ? "navbar-toggle-active"
                                : ""
                        }`}
                        aria-label={
                            menuOpen
                                ? t("navbar.closeMenu")
                                : t("navbar.openMenu")
                        }
                        aria-expanded={menuOpen}
                        onClick={() =>
                            setMenuOpen(
                                (current) => !current
                            )
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