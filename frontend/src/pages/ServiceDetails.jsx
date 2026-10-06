import { Link, useParams } from "react-router-dom";

import {
  FaArrowRight,
  FaCheck,
  FaChevronLeft,
} from "react-icons/fa";

import { useTranslation } from "react-i18next";

import services from "../data/services";

import PageTransition from "../components/PageTransition";

import wasteManagementImage from "../assets/images/services/waste-management-hero-v2.webp";
import softFacilityImage from "../assets/images/services/soft-facility-management.png";
import pestControlImage from "../assets/images/services/pest-control.png";
import janitorialImage from "../assets/images/services/janitorial.png";
import mepImage from "../assets/images/services/mep.png";
import hardFacilityImage from "../assets/images/services/hard-facility-management.png";


import wasteContainerRange from "../assets/images/services/waste-container-range.png";
import wasteFleetCompactors from "../assets/images/services/waste-fleet-compactors.png";
import sewageDisposalFleet from "../assets/images/services/sewage-disposal-fleet.png";


import "./ServiceDetails.css";

export default function ServiceDetails() {
  const { t, i18n } = useTranslation();
  const { slug } = useParams();

  const isArabic = i18n.resolvedLanguage?.startsWith("ar");

  const service = services.find(
    (item) => item.slug === slug
  );

  /* ==========================================================
     SERVICE NOT FOUND
  ========================================================== */

  if (!service) {
    return (
      <main className="service-not-found">
        <span>404</span>

        <h1>
          {t("serviceDetails.notFound")}
        </h1>

        <p>
          {t("serviceDetails.notFoundDescription")}
        </p>

        <Link to="/">
          {t("serviceDetails.returnHome")}
        </Link>
      </main>
    );
  }

  /* ==========================================================
     SERVICE TYPES
  ========================================================== */

  const isWasteManagement =
    service.slug === "WasteManagement";

  const isSoftFacility =
    service.slug === "Soft-Facility-Management";

  const isPestControl =
    service.slug === "PestControl";

  const isJanitorial =
    service.slug === "Janitorial";

  const isHardFacility =
    service.slug === "Hard-Facility-Management";

  /* ==========================================================
     SERVICE ICON
  ========================================================== */

  const Icon = service.icon;

  /* ==========================================================
     HERO IMAGE
  ========================================================== */

  const heroImage = isWasteManagement
    ? wasteManagementImage
    : isSoftFacility
      ? softFacilityImage
      : isPestControl
        ? pestControlImage
        : isJanitorial
          ? janitorialImage
          : isHardFacility
            ? hardFacilityImage
            : null;

  /* ==========================================================
     LOCALIZED SERVICE
  ========================================================== */

  const localizedService = isArabic
    ? {
      ...service,
      ...t(`serviceItems.${service.slug}`, {
        returnObjects: true,
      }),
    }
    : service;

  /* ==========================================================
     HERO STYLE
  ========================================================== */

  const heroModifierClass =
    isWasteManagement || isSoftFacility
      ? "service-details-hero--soft"
      : isPestControl
        ? "service-details-hero--pest"
        : isJanitorial
          ? "service-details-hero--janitorial"
          : isHardFacility
            ? "service-details-hero--hard"
            : "";

  /* ==========================================================
     HERO IMAGE STYLE
  ========================================================== */

  const heroVisualModifierClass =
    isWasteManagement || isSoftFacility
      ? "service-hero-visual--soft"
      : isPestControl
        ? "service-hero-visual--pest"
        : isJanitorial
          ? "service-hero-visual--janitorial"
          : isHardFacility
            ? "service-hero-visual--hard"
            : "";

  return (
    <PageTransition>
      <main className="service-details-page">

        {/* ======================================================
           HERO
        ====================================================== */}

        <section
          className={`service-details-hero ${heroModifierClass}`}
        >
          <div
            className="service-details-orb"
            aria-hidden="true"
          />

          <div className="container">

            {/* Back To Services */}

            <Link
              to="/#services"
              className="service-back-link"
            >
              <FaChevronLeft aria-hidden="true" />

              {t("serviceDetails.allServices")}
            </Link>

            <div className="service-hero-grid">

              {/* ==================================================
                 HERO CONTENT
              ================================================== */}

              <div className="service-hero-copy">

                <div
                  className="service-details-icon"
                  aria-hidden="true"
                >
                  <Icon />
                </div>

                <span className="service-eyebrow">
                  {localizedService.category}
                </span>

                <h1>
                  {localizedService.title}
                </h1>

                <p>
                  {localizedService.shortDescription}
                </p>

                <Link
                  to="/contact"
                  className="service-hero-cta"
                >
                  {t("serviceDetails.discuss")}

                  <FaArrowRight
                    aria-hidden="true"
                  />
                </Link>

              </div>

              {/* ==================================================
                 HERO IMAGE
              ================================================== */}

              {heroImage && (
                <figure
                  className={`service-hero-visual ${heroVisualModifierClass}`}
                >
                  <img
                    className="service-hero-image"
                    src={heroImage}
                    alt={localizedService.title}
                  />

                  {/* ==================================================
                     WASTE MANAGEMENT LOGO
                  ================================================== */}

                  {isWasteManagement && (
                    <img
                      className="service-vehicle-logo"
                      src={`${import.meta.env.BASE_URL}images/ioc-eco-logo.png`}
                      alt="IOC ECO Logo"
                    />
                  )}
                </figure>
              )}

              {/* ==================================================
                 SERVICE OUTCOMES
              ================================================== */}

              <aside
                className="service-outcomes"
                aria-label={t(
                  "serviceDetails.benefitsLabel"
                )}
              >
                <span>
                  {t("serviceDetails.expect")}
                </span>

                <ul>
                  {localizedService.outcomes.map(
                    (outcome) => (
                      <li key={outcome}>
                        <FaCheck aria-hidden="true" />

                        {outcome}
                      </li>
                    )
                  )}
                </ul>
              </aside>

            </div>
          </div>
        </section>

        {/* ======================================================
           SERVICE OVERVIEW + CAPABILITIES
        ====================================================== */}

        <section className="service-details-content">

          <div className="container service-details-grid">

            {/* ==================================================
               OVERVIEW
            ================================================== */}

            <div className="service-overview">

              <span className="service-details-label">
                {t("serviceDetails.overview")}
              </span>

              <h2>
                {localizedService.overviewTitle}
              </h2>

              <p>
                {localizedService.description}
              </p>

              {/* ================================================
                 SECTORS
              ================================================= */}

              <div className="service-sectors">

                <h3>
                  {t("serviceDetails.sectors")}
                </h3>

                <div>
                  {localizedService.sectors.map(
                    (sector) => (
                      <span key={sector}>
                        {sector}
                      </span>
                    )
                  )}
                </div>

              </div>

            </div>

            {/* ==================================================
               CAPABILITIES
            ================================================== */}

            <aside className="service-feature-box">

              <span className="service-feature-kicker">
                {t("serviceDetails.capabilities")}
              </span>

              <h3>
                {t("serviceDetails.provide")}
              </h3>

              <ul>
                {localizedService.features.map(
                  (feature) => (
                    <li key={feature}>

                      <span aria-hidden="true">
                        <FaCheck />
                      </span>

                      {feature}

                    </li>
                  )
                )}
              </ul>

            </aside>

          </div>
        </section>

        {/* ======================================================
           SOFT FACILITY MANAGEMENT
           INTEGRATED MEP
        ====================================================== */}

        {isSoftFacility && (
          <section className="soft-mep-section">

            <div className="container">

              {/* ==================================================
                 MEP HEADER
              ================================================== */}

              <div className="soft-mep-header">

                <div>

                  <span className="service-details-label">
                    {t("serviceDetails.softMep.label")}
                  </span>

                  <h2>
                    MEP{" "}
                    <span>
                      {t("serviceDetails.softMep.title")}
                    </span>
                  </h2>

                </div>

                <p>
                  {t(
                    "serviceDetails.softMep.description"
                  )}
                </p>

              </div>

              {/* ==================================================
                 MEP CONTENT
              ================================================== */}

              <div className="soft-mep-content">

                {/* ==============================================
                   MEP IMAGE
                ============================================== */}

                <div className="soft-mep-image">

                  <img
                    src={mepImage}
                    alt={t(
                      "serviceDetails.softMep.imageAlt"
                    )}
                  />

                  <div className="soft-mep-image-overlay">

                    <span>
                      {t(
                        "serviceDetails.softMep.imageKicker"
                      )}
                    </span>

                    <strong>
                      {t(
                        "serviceDetails.softMep.imageTitle"
                      )}
                    </strong>

                  </div>

                </div>

                {/* ==============================================
                   MEP SERVICES
                ============================================== */}

                <div className="soft-mep-list">

                  {/* Mechanical */}

                  <div className="soft-mep-item">

                    <span>
                      01
                    </span>

                    <div>

                      <h3>
                        {t(
                          "serviceDetails.softMep.mechanical.title"
                        )}
                      </h3>

                      <p>
                        {t(
                          "serviceDetails.softMep.mechanical.description"
                        )}
                      </p>

                    </div>

                  </div>

                  {/* Electrical */}

                  <div className="soft-mep-item">

                    <span>
                      02
                    </span>

                    <div>

                      <h3>
                        {t(
                          "serviceDetails.softMep.electrical.title"
                        )}
                      </h3>

                      <p>
                        {t(
                          "serviceDetails.softMep.electrical.description"
                        )}
                      </p>

                    </div>

                  </div>

                  {/* Plumbing */}

                  <div className="soft-mep-item">

                    <span>
                      03
                    </span>

                    <div>

                      <h3>
                        {t(
                          "serviceDetails.softMep.plumbing.title"
                        )}
                      </h3>

                      <p>
                        {t(
                          "serviceDetails.softMep.plumbing.description"
                        )}
                      </p>

                    </div>

                  </div>

                  {/* HVAC */}

                  <div className="soft-mep-item">

                    <span>
                      04
                    </span>

                    <div>

                      <h3>
                        {t(
                          "serviceDetails.softMep.hvac.title"
                        )}
                      </h3>

                      <p>
                        {t(
                          "serviceDetails.softMep.hvac.description"
                        )}
                      </p>

                    </div>

                  </div>

                </div>

              </div>

              {/* ==================================================
                 MEP SUPPORT AREAS
              ================================================== */}

              <div className="soft-mep-bottom">

                <span>
                  {t(
                    "serviceDetails.softMep.support.preventive"
                  )}
                </span>

                <span>
                  {t(
                    "serviceDetails.softMep.support.inspections"
                  )}
                </span>

                <span>
                  {t(
                    "serviceDetails.softMep.support.repairs"
                  )}
                </span>

                <span>
                  {t(
                    "serviceDetails.softMep.support.building"
                  )}
                </span>

              </div>

            </div>
          </section>
        )}

        {/* ======================================================
           WASTE MANAGEMENT
           FLEET & EQUIPMENT
        ====================================================== */}

        {isWasteManagement && (
          <section className="waste-equipment-section">

            <div className="container">

              {/* ==================================================
                 SECTION HEADER
              ================================================== */}

              <div className="waste-equipment-heading">

                <span className="service-details-label">
                  {t(
                    "serviceDetails.wasteEquipment.label"
                  )}
                </span>

                <h2>

                  {t(
                    "serviceDetails.wasteEquipment.title"
                  )}

                  <span>
                    {" "}

                    {t(
                      "serviceDetails.wasteEquipment.titleAccent"
                    )}

                  </span>

                </h2>

                <p>
                  {t(
                    "serviceDetails.wasteEquipment.description"
                  )}
                </p>

              </div>

              {/* ==================================================
                 01. CONTAINER SOLUTIONS
              ================================================== */}

              <article className="waste-equipment-block">

                <div className="waste-equipment-block-heading">

                  <span>
                    01
                  </span>

                  <div>

                    <h3>
                      {t(
                        "serviceDetails.wasteEquipment.containers.title"
                      )}
                    </h3>

                    <p>
                      {t(
                        "serviceDetails.wasteEquipment.containers.description"
                      )}
                    </p>

                  </div>

                </div>

                <div className="waste-equipment-image-card">

                  <img
                    src={wasteContainerRange}
                    alt={t(
                      "serviceDetails.wasteEquipment.containers.alt"
                    )}
                  />

                </div>

              </article>

              {/* ==================================================
                 02. COLLECTION & COMPACTION
              ================================================== */}

              <article className="waste-equipment-block">

                <div className="waste-equipment-block-heading">

                  <span>
                    02
                  </span>

                  <div>

                    <h3>
                      {t(
                        "serviceDetails.wasteEquipment.fleet.title"
                      )}
                    </h3>

                    <p>
                      {t(
                        "serviceDetails.wasteEquipment.fleet.description"
                      )}
                    </p>

                  </div>

                </div>

                <div className="waste-equipment-image-card">

                  <img
                    src={wasteFleetCompactors}
                    alt={t(
                      "serviceDetails.wasteEquipment.fleet.alt"
                    )}
                  />

                </div>

              </article>
              {/* ==================================================
                 03. SEWAGE DISPOSAL
              ================================================== */}

              <article className="waste-equipment-block">

                <div className="waste-equipment-block-heading">

                  <span>
                    03
                  </span>


                  <div>

                    <h3>
                      {t(
                        "serviceDetails.wasteEquipment.sewage.title"
                      )}
                    </h3>


                    <p>
                      {t(
                        "serviceDetails.wasteEquipment.sewage.description"
                      )}
                    </p>

                  </div>

                </div>


                <div className="waste-equipment-image-card">

                  <img
                    src={sewageDisposalFleet}
                    alt={t(
                      "serviceDetails.wasteEquipment.sewage.alt"
                    )}
                  />

                </div>


              </article>


            </div>


          </section>
        )}


        {/* ======================================================
           SERVICE PROCESS
        ====================================================== */}

        <section className="service-process-section">

          <div className="container">

            <div className="service-process-heading">

              <div>

                <span className="service-details-label">
                  {t(
                    "serviceDetails.processLabel"
                  )}
                </span>

                <h2>
                  {t(
                    "serviceDetails.processTitle"
                  )}
                </h2>

              </div>

              <p>
                {t(
                  "serviceDetails.processDescription"
                )}
              </p>

            </div>

            <ol className="service-process-grid">

              {localizedService.process.map(
                (step, index) => (

                  <li key={step.title}>

                    <span>
                      {String(index + 1).padStart(
                        2,
                        "0"
                      )}
                    </span>

                    <h3>
                      {step.title}
                    </h3>

                    <p>
                      {step.text}
                    </p>

                  </li>

                )
              )}

            </ol>

          </div>

        </section>

      </main>
    </PageTransition>
  );
}