import { Link, useParams } from "react-router-dom";
import { FaArrowRight, FaCheck, FaChevronLeft } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import services from "../data/services";
import wasteManagementImage from "../assets/images/services/waste-management-hero-v2.webp";
import PageTransition from "../components/PageTransition";
import softFacilityImage from "../assets/images/services/soft-facility-management.png";

import "./ServiceDetails.css";

export default function ServiceDetails() {
  const { t, i18n } = useTranslation();
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);
  const isArabic = i18n.resolvedLanguage?.startsWith("ar");

  if (!service) {
    return (
      <main className="service-not-found">
        <span>404</span>
        <h1>{t("serviceDetails.notFound")}</h1>
        <p>{t("serviceDetails.notFoundDescription")}</p>
        <Link to="/">{t("serviceDetails.returnHome")}</Link>
      </main>
    );
  }

  const Icon = service.icon;

  const isWasteManagement = service.slug === "WasteManagement";

  const isSoftFacility =
    service.slug === "Soft-Facility-Management";

  const heroImage = isWasteManagement
    ? wasteManagementImage
    : isSoftFacility
      ? softFacilityImage
      : null;



  const localizedService = isArabic //to convert to arabic
    ? {
      ...service,
      ...t(`serviceItems.${service.slug}`, { returnObjects: true }),
    }
    : service;

  return (
    <PageTransition>
      <main className="service-details-page">
        <section
          className={`service-details-hero ${isWasteManagement
            ? "service-details-hero--waste"
            : isSoftFacility
              ? "service-details-hero--soft"
              : ""
            }`}
        >
          <div className="service-details-orb" aria-hidden="true" />
          <div className="container">
            <Link to="/#services" className="service-back-link">
              <FaChevronLeft aria-hidden="true" />
              {t("serviceDetails.allServices")}
            </Link>

            <div className="service-hero-grid">
              <div className="service-hero-copy">
                <div className="service-details-icon" aria-hidden="true">
                  <Icon />
                </div>
                <span className="service-eyebrow">
                  {localizedService.category}
                </span>
                <h1>{localizedService.title}</h1>
                <p>{localizedService.shortDescription}</p>
                <Link to="/contact" className="service-hero-cta">
                  {t("serviceDetails.discuss")}
                  <FaArrowRight aria-hidden="true" />
                </Link>
              </div>

              {heroImage && (
                <figure
                  className={`service-hero-visual ${isSoftFacility ? "service-hero-visual--soft" : ""
                    }`}
                >
                  <img
                    className="service-hero-image"
                    src={heroImage}
                    alt={localizedService.title}
                  />

                  {isWasteManagement && (
                    <img
                      className="service-vehicle-logo"
                      src={`${import.meta.env.BASE_URL}images/ioc-eco-logo.png`}
                      alt="IOC ECO Logo"
                    />
                  )}
                </figure>
              )}

              <aside
                className="service-outcomes"
                aria-label={t("serviceDetails.benefitsLabel")}
              >
                <span>{t("serviceDetails.expect")}</span>
                <ul>
                  {localizedService.outcomes.map((outcome) => (
                    <li key={outcome}>
                      <FaCheck aria-hidden="true" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          </div>
        </section>

        <section className="service-details-content">
          <div className="container service-details-grid">
            <div className="service-overview">
              <span className="service-details-label">
                {t("serviceDetails.overview")}
              </span>
              <h2>{localizedService.overviewTitle}</h2>
              <p>{localizedService.description}</p>

              <div className="service-sectors">
                <h3>{t("serviceDetails.sectors")}</h3>
                <div>
                  {localizedService.sectors.map((sector) => (
                    <span key={sector}>{sector}</span>
                  ))}
                </div>
              </div>
            </div>

            <aside className="service-feature-box">
              <span className="service-feature-kicker">
                {t("serviceDetails.capabilities")}
              </span>
              <h3>{t("serviceDetails.provide")}</h3>
              <ul>
                {localizedService.features.map((feature) => (
                  <li key={feature}>
                    <span aria-hidden="true">
                      <FaCheck />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section className="service-process-section">
          <div className="container">
            <div className="service-process-heading">
              <div>
                <span className="service-details-label">
                  {t("serviceDetails.processLabel")}
                </span>
                <h2>{t("serviceDetails.processTitle")}</h2>
              </div>
              <p>
                {t("serviceDetails.processDescription")}
              </p>
            </div>

            <ol className="service-process-grid">
              {localizedService.process.map((step, index) => (
                <li key={step.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

      </main>
    </PageTransition>
  );
}
