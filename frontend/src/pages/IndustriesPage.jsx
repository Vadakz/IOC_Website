
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import clients from "../data/clients";
import PageTransition from "../components/PageTransition";

import "./IndustriesPage.css";

/* ==========================================================
   INDUSTRIES DATA
========================================================== */

const industries = [
  {
    title: "Commercial",
    description:
      "Integrated facility management solutions for offices, corporate buildings and business centres.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 21V3h11v6h5v12h-7v-4h-2v4H4Zm3-14h2V5H7v2Zm4 0h2V5h-2v2ZM7 11h2V9H7v2Zm4 0h2V9h-2v2Zm-4 4h2v-2H7v2Zm8-2v2h2v-2h-2Zm0 6h2v-2h-2v2Z" />
      </svg>
    ),
  },
  {
    title: "Industrial",
    description:
      "Reliable operational support for factories, warehouses and industrial facilities.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 21V9l6 3V9l6 3V5h4v16H3Zm3-3h2v-3H6v3Zm5 0h2v-3h-2v3Zm5 0h2v-3h-2v3Z" />
      </svg>
    ),
  },
  {
    title: "Healthcare",
    description:
      "Safe, hygienic and compliant facility services for hospitals, clinics and medical centres.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9 3h6v4h4v6h-4v4H9v-4H5V7h4V3Zm2 2v4H7v2h4v4h2v-4h4V9h-4V5h-2Z" />
      </svg>
    ),
  },
  {
    title: "Hospitality",
    description:
      "Professional facility support for hotels, accommodation facilities and hospitality properties.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 19v-7h2V7a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v5h2v7h-2v-2H6v2H4Zm4-7h8V7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v5Zm-2 3h12v-1H6v1Z" />
      </svg>
    ),
  },
  {
    title: "Education",
    description:
      "Clean, safe and efficient environments for schools, colleges and universities.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m12 3 10 5-10 5L4 9v6H2V8l10-5Zm-6 9.5 6 3 6-3V17c0 2-2.7 4-6 4s-6-2-6-4v-4.5Z" />
      </svg>
    ),
  },
  {
    title: "Retail",
    description:
      "Responsive facility management for shopping malls, showrooms and retail outlets.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 3h14l2 5v2a3 3 0 0 1-1 2.2V21H4v-8.8A3 3 0 0 1 3 10V8l2-5Zm1.3 2-1.2 3h13.8l-1.2-3H6.3ZM6 13v6h12v-6a4.8 4.8 0 0 1-2-.4 4.8 4.8 0 0 1-4 0 4.8 4.8 0 0 1-4 0 4.8 4.8 0 0 1-2 .4Z" />
      </svg>
    ),
  },
];

export default function IndustriesPage() {
  const { t } = useTranslation();

  const movingClients = [...clients, ...clients];

  const localizedIndustries = t("industries.items", {
    returnObjects: true,
  });

  return (
    <PageTransition>
      <main className="industries-page">

        {/* CLIENTS SECTION */}

        <section className="clients-section" id="clients">
          <div className="industries-page-container">
            <div className="clients-section-header">
              <div>
                <span>{t("industries.clientsLabel")}</span>
                <h2>{t("industries.clientsTitle")}</h2>
              </div>

              <p>{t("industries.clientsDescription")}</p>
            </div>
          </div>

          <div className="clients-marquee">
            <div className="clients-track">
              {movingClients.map((client, index) => (
                <article
                  className="client-logo-card"
                  key={`${client.name}-${index}`}
                >
                  <img
                    src={client.logo}
                    alt={t("industries.clientLogoAlt", {
                      client: client.name,
                    })}
                  />

                  <span>{client.name}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* MINIMAL INDUSTRIES SECTION */}

        <section
          className="industries-overview"
          id="industry-list"
        >
          <div className="industries-page-container industries-overview-layout">

            {/* LEFT CONTENT */}

            <div className="industries-overview-copy">
              <span className="industries-section-label">
                {t("industries.expertiseLabel")}
              </span>

              <h1>
                {t("industries.expertiseTitle")}
              </h1>

              <p>
                {t("industries.expertiseDescription")}
              </p>

              <Link
                to="/contact"
                className="industries-explore-button"
              >
                {t("industries.partnerButton")}
                <span aria-hidden="true">
                  {t("common.arrow")}
                </span>
              </Link>

              <div className="industries-copy-decoration">
                <span />
                <span />
                <span />
              </div>
            </div>

            {/* RIGHT INDUSTRY CARDS */}

            <div className="industries-page-grid">
              {industries.map((industry, index) => {
                const translatedIndustry = localizedIndustries[index];

                return (
                  <article
                    className="industries-page-card"
                    key={industry.title}
                  >
                    <div className="industries-page-icon">
                      {industry.icon}
                    </div>

                    <div className="industries-card-text">
                      <h3>{translatedIndustry.title}</h3>
                      <p>{translatedIndustry.description}</p>
                    </div>

                    <span className="industries-card-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </article>
                );
              })}
            </div>

          </div>
        </section>

        {/* CONTACT CTA */}

        <section className="industries-cta">
          <div className="industries-page-container industries-cta-content">
            <div>
              <span>{t("industries.partnerLabel")}</span>
              <h2>{t("industries.partnerTitle")}</h2>
            </div>

            <Link to="/contact">
              {t("industries.partnerButton")}
              <span aria-hidden="true">
                {t("common.arrow")}
              </span>
            </Link>
          </div>
        </section>

      </main>
    </PageTransition>
  );
}
