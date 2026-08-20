import "./Journey.css";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import mawaridLogo from "../../assets/images/mawarid-logo.png";
import ecoLogo from "../../assets/images/eco-logo.png";
import iocLogo from "../../assets/images/ioc-logo.png";
import { useNavigate } from "react-router-dom";

import {
    FaArrowRight,
    FaBuilding,
    FaLeaf,
    FaShieldAlt,
    FaGlobeAsia,
    FaUsers,
    FaClock,
} from "react-icons/fa";

import PageTransition from "../../components/PageTransition";


/* ==========================================================
   IOC TODAY STATS
========================================================== */

const journeyStats = [
    {
        key: "years",
        icon: FaClock,
    },
    {
        key: "clients",
        icon: FaUsers,
    },
    {
        key: "coverage",
        icon: FaGlobeAsia,
    },
];

/* ==========================================================
   JOURNEY PAGE
========================================================== */

export default function Journey() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const goToServices = () => {
        navigate("/#services");

        setTimeout(() => {
            const servicesSection = document.getElementById("services");

            if (servicesSection) {
                servicesSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        }, 300);
    };

    return (
        <PageTransition>
            <main className="journey-page">

                {/* ======================================================
            HERO SECTION
        ====================================================== */}

                <section className="journey-hero">
                    <div className="journey-container journey-hero-content">

                        <span className="journey-eyebrow">
                            {t("journey.hero.label")}
                        </span>

                        <h1>
                            {t("journey.hero.title")}
                            <span> {t("journey.hero.accent")}</span>
                        </h1>

                        <p>
                            {t("journey.hero.description")}
                        </p>

                        <div className="journey-hero-years">
                            <span>1968</span>

                            <div className="journey-hero-line">
                                <span />
                            </div>

                            <span>{t("journey.hero.today")}</span>
                        </div>

                    </div>
                </section>


                {/* ======================================================
            FOUNDATION SECTION
            MAWARID HOLDING — 1968
        ====================================================== */}

                <section className="journey-foundation">
                    <div className="journey-container">

                        <div className="journey-section-heading">

                            <div>
                                <span className="journey-eyebrow">
                                    {t("journey.foundation.label")}
                                </span>

                                <h2>
                                    {t("journey.foundation.title")}
                                </h2>
                            </div>

                            <p>
                                {t("journey.foundation.description")}
                            </p>

                        </div>


                        <div className="journey-foundation-card">

                            <div className="journey-foundation-year">
                                <span>1968</span>
                            </div>

                            <div className="journey-foundation-icon">
                                <FaBuilding />
                            </div>

                            <div className="journey-foundation-content">

                                <span>
                                    {t("journey.foundation.companyType")}
                                </span>

                                <h3>
                                    {t("journey.foundation.company")}
                                </h3>

                                <p>
                                    {t("journey.foundation.text")}
                                </p>

                            </div>

                        </div>

                    </div>
                </section>


                {/* ======================================================
            ECO + IOC CONNECTION
        ====================================================== */}

                <section className="journey-connection">
                    <div className="journey-container">

                        <div className="journey-connection-heading">

                            <span className="journey-eyebrow">
                                {t("journey.connection.label")}
                            </span>

                            <h2>
                                {t("journey.connection.title")}
                            </h2>

                            <p>
                                {t("journey.connection.description")}
                            </p>

                        </div>


                        {/* ==================================================
                MAWARID HOLDING
            ================================================== */}

                        <div className="journey-group-structure">

                            <div className="journey-parent-company">

                                <div className="journey-company-mark">
                                    <img src={mawaridLogo} alt="Mawarid Holding" />
                                </div>

                                <div>
                                    <span>
                                        {t("journey.connection.holdingLabel")}
                                    </span>

                                    <h3>
                                        Mawarid Holding
                                    </h3>
                                </div>

                            </div>


                            {/* CONNECTION LINE */}

                            <div className="journey-connection-line">
                                <span />
                            </div>


                            {/* ==================================================
                  SISTER COMPANIES
              ================================================== */}

                            <div className="journey-sister-companies">

                                {/* ================= ECO ================= */}

                                <article className="journey-company-card journey-eco-card">

                                    <div className="journey-company-top">

                                        <div className="journey-company-mark">
                                            <img src={ecoLogo} alt="ECO" />
                                        </div>

                                        <span className="journey-company-badge">
                                            {t("journey.connection.sisterCompany")}
                                        </span>

                                    </div>

                                    <h3>
                                        {t("journey.eco.name")}
                                    </h3>

                                    <p className="journey-company-full-name">
                                        {t("journey.eco.fullName")}
                                    </p>

                                    <p>
                                        {t("journey.eco.description")}
                                    </p>

                                    <div className="journey-company-note">
                                        {t("journey.eco.note")}
                                    </div>

                                </article>


                                {/* ================= IOC ================= */}

                                <article className="journey-company-card journey-ioc-card">

                                    <div className="journey-company-top">

                                        <div className="journey-company-mark journey-company-mark-ioc">
                                            <img src={iocLogo} alt="IOC" />
                                        </div>

                                        <span className="journey-company-badge">
                                            {t("journey.connection.sisterCompany")}
                                        </span>

                                    </div>

                                    <h3>
                                        {t("journey.ioc.name")}
                                    </h3>

                                    <p className="journey-company-full-name">
                                        {t("journey.ioc.fullName")}
                                    </p>

                                    <p>
                                        {t("journey.ioc.description")}
                                    </p>

                                    <div className="journey-company-note">
                                        {t("journey.ioc.note")}
                                    </div>

                                </article>

                            </div>

                        </div>

                    </div>
                </section>


                {/* ======================================================
            YOU MAY KNOW US THROUGH ECO
        ====================================================== */}

                <section className="journey-legacy">
                    <div className="journey-container">

                        <div className="journey-legacy-card">

                            <div className="journey-legacy-icon">
                                <FaShieldAlt />
                            </div>

                            <div className="journey-legacy-content">

                                <span className="journey-eyebrow">
                                    {t("journey.legacy.label")}
                                </span>

                                <h2>
                                    {t("journey.legacy.title")}
                                </h2>

                                <p>
                                    {t("journey.legacy.description")}
                                </p>

                                <div className="journey-legacy-highlight">
                                    {t("journey.legacy.highlight")}
                                </div>

                            </div>

                        </div>

                    </div>
                </section>




                {/* ======================================================
            IOC TODAY
        ====================================================== */}

                <section className="journey-today">
                    <div className="journey-container">

                        <div className="journey-today-layout">

                            {/* ================================================
                  LEFT CONTENT
              ================================================ */}

                            <div className="journey-today-content">

                                <span className="journey-eyebrow">
                                    {t("journey.today.label")}
                                </span>

                                <h2>
                                    {t("journey.today.title")}
                                    <span>
                                        {" "}
                                        {t("journey.today.accent")}
                                    </span>
                                </h2>

                                <p>
                                    {t("journey.today.description")}
                                </p>

                                <div className="journey-sustainability">

                                    <FaLeaf />

                                    <div>
                                        <span>
                                            {t("journey.today.sustainabilityLabel")}
                                        </span>

                                        <strong>
                                            {t("journey.today.sustainability")}
                                        </strong>
                                    </div>

                                </div>

                            </div>


                            {/* ================================================
                  STATS
              ================================================ */}

                            <div className="journey-stats">

                                {journeyStats.map((stat) => {
                                    const Icon = stat.icon;

                                    return (
                                        <div
                                            className="journey-stat-card"
                                            key={stat.key}
                                        >

                                            <Icon />

                                            <strong>
                                                {t(
                                                    `journey.today.stats.${stat.key}.value`
                                                )}
                                            </strong>

                                            <span>
                                                {t(
                                                    `journey.today.stats.${stat.key}.label`
                                                )}
                                            </span>

                                        </div>
                                    );
                                })}

                            </div>

                        </div>

                    </div>
                </section>


                {/* ======================================================
            FINAL CTA
        ====================================================== */}

                <section className="journey-cta">
                    <div className="journey-container journey-cta-content">

                        <div>
                            <span>
                                {t("journey.cta.label")}
                            </span>

                            <h2>
                                {t("journey.cta.title")}
                            </h2>

                            <p>
                                {t("journey.cta.description")}
                            </p>
                        </div>

                        <button
                            type="button"
                            onClick={goToServices}
                            className="journey-cta-button"
                        >
                            {t("journey.cta.button")}

                            <span aria-hidden="true">
                                <FaArrowRight />
                            </span>
                        </button>

                    </div>
                </section>

            </main>
        </PageTransition>
    );
}