/* ==========================================================
   IMPORTS
========================================================== */

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
       STATE
    ====================================================== */

    const [menuOpen, setMenuOpen] = useState(false);

    /* About Us dropdown state */
    const [aboutOpen, setAboutOpen] = useState(false);

    /* Services dropdown state */
    const [servicesOpen, setServicesOpen] = useState(false);


    /* ======================================================
       ROUTER
    ====================================================== */

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
       CLOSE ALL NAVIGATION MENUS
    ====================================================== */

    const closeAllMenus = () => {
        setMenuOpen(false);
        setAboutOpen(false);
        setServicesOpen(false);
    };


    /* ======================================================
       NAVIGATE TO HOMEPAGE SECTION
    ====================================================== */

    const goToSection = (sectionId) => {

        closeAllMenus();

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

        closeAllMenus();
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
                    onClick={closeAllMenus}
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
                    className={`navbar-links ${menuOpen
                            ? "navbar-links-open"
                            : ""
                        }`}
                >


                    {/* ==================================================
                        HOME
                    ================================================== */}

                    <Link
                        to="/"
                        onClick={closeAllMenus}
                    >
                        {t("navbar.home")}
                    </Link>


                    {/* ==================================================
                        ABOUT US DROPDOWN
                    ================================================== */}

                    <div className="navbar-dropdown">

                        <button
                            type="button"
                            className="navbar-dropdown-trigger"
                            aria-expanded={aboutOpen}
                            onClick={() => {

                                setAboutOpen(
                                    (current) => !current
                                );

                                setServicesOpen(false);

                            }}
                        >

                            {t("navbar.about")}

                            <span
                                className={`dropdown-arrow ${aboutOpen
                                        ? "dropdown-arrow-open"
                                        : ""
                                    }`}
                            >
                                ▾
                            </span>

                        </button>


                        {/* ==================================================
                            ABOUT US MENU
                        ================================================== */}

                        <div
                            className={`navbar-dropdown-menu ${aboutOpen
                                    ? "navbar-dropdown-menu-open"
                                    : ""
                                }`}
                        >


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
                                onClick={closeAllMenus}
                            >
                                {t("navbar.journey")}
                            </Link>


                            {/* OUR TEAM */}

                            <Link
                                to="/team"
                                onClick={closeAllMenus}
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
                            aria-expanded={servicesOpen}
                            onClick={() => {

                                setServicesOpen(
                                    (current) => !current
                                );

                                setAboutOpen(false);

                            }}
                        >

                            {t("navbar.services")}

                            <span
                                className={`dropdown-arrow ${servicesOpen
                                        ? "dropdown-arrow-open"
                                        : ""
                                    }`}
                            >
                                ▾
                            </span>

                        </button>


                        {/* ==================================================
                            SERVICES MENU
                        ================================================== */}

                        <div
                            className={`navbar-dropdown-menu ${servicesOpen
                                    ? "navbar-dropdown-menu-open"
                                    : ""
                                }`}
                        >

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
                                        onClick={closeAllMenus}
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
                        OUR CLIENTS
                    ================================================== */}
                    <Link
                        to="/industries#clients"
                        className="navbar-link"
                        onClick={closeAllMenus}
                    >
                        {t("navbar.clients")}
                    </Link>

                    {/* ==================================================
                        CONTACT
                    ================================================== */}

                    <Link
                        to="/contact"
                        onClick={closeAllMenus}
                    >
                        {t("navbar.contact")}
                    </Link>


                    {/* ==================================================
                        MOBILE LANGUAGE
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
                        onClick={closeAllMenus}
                    >
                        {t("navbar.quote")}
                    </Link>


                </nav>


                {/* ==================================================
                    NAVBAR ACTIONS
                ================================================== */}

                <div className="navbar-actions">


                    {/* ==================================================
                        DESKTOP LANGUAGE
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
                        onClick={closeAllMenus}
                    >
                        {t("navbar.quote")}
                    </Link>


                    {/* ==================================================
                        MOBILE MENU BUTTON
                    ================================================== */}

                    <button
                        type="button"
                        className={`navbar-toggle ${menuOpen
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