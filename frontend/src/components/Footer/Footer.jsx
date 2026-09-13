/* ==========================================================
   IMPORTS
========================================================== */

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
  FaEnvelope,
  FaFacebookF,
  FaGlobe,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";

import services from "../../data/services";

import logo from "../../assets/images/logo.png";

import "./Footer.css";


/* ==========================================================
   FOOTER COMPONENT
========================================================== */

export default function Footer() {

  /* ========================================================
     TRANSLATION
  ======================================================== */

  const { t, i18n } = useTranslation();


  /* ========================================================
     CURRENT YEAR
  ======================================================== */

  const currentYear =
    new Date().getFullYear();


  /* ========================================================
     LANGUAGE
  ======================================================== */

  const isArabic =
    i18n.resolvedLanguage?.startsWith("ar");


  /* ========================================================
     COMPONENT
  ======================================================== */

  return (

    <footer className="site-footer">


      {/* ======================================================
          FOOTER ACCENT LINE
      ====================================================== */}

      <div className="footer-accent-line" />



      {/* ======================================================
          MAIN FOOTER
      ====================================================== */}

      <div className="footer-container footer-main-grid">


        {/* ====================================================
            01. COMPANY BRAND
        ==================================================== */}

        <div className="footer-brand">


          {/* COMPANY LOGO */}

          <Link
            to="/"
            className="footer-logo-link"
          >

            <img
              src={logo}
              alt={t("footer.logoAlt")}
              className="footer-logo"
            />

          </Link>


          {/* COMPANY DESCRIPTION */}

          <p className="footer-brand-description">
            {t("footer.description")}
          </p>


          {/* COMPANY TAGLINE */}

          <span className="footer-brand-tagline">
            {t("footer.tagline")}
          </span>


          {/* ==================================================
              SOCIAL MEDIA
          ================================================== */}

          <div className="footer-socials">


            {/* LINKEDIN */}

            <a
              href="https://www.linkedin.com/company/international-operations-company/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="footer-social-link"
            >
              <FaLinkedinIn />
            </a>


            {/* X / TWITTER */}

            <a
              href="https://x.com/ioceco"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="footer-social-link"
            >
              <FaTwitter />
            </a>


            {/* INSTAGRAM */}

            <a
              href="https://www.instagram.com/ecoioc/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="footer-social-link"
            >
              <FaInstagram />
            </a>

          </div>

        </div>



        {/* ====================================================
            02. COMPANY LINKS
        ==================================================== */}

        <div className="footer-column">

          <h3>
            {t("footer.company")}
          </h3>


          <nav
            className="footer-links"
            aria-label={
              t("footer.companyLinksLabel")
            }
          >

            {/* HOME */}

            <Link to="/">
              {t("footer.home")}
            </Link>


            {/* ABOUT */}

            <Link to="/#about">
              {t("footer.about")}
            </Link>


            {/* INDUSTRIES */}

            <Link to="/industries">
              {t("footer.industries")}
            </Link>


            {/* CLIENTS */}

            <Link to="/industries#clients">
              {t("footer.clients")}
            </Link>


            {/* CONTACT */}

            <Link to="/contact">
              {t("footer.contactUs")}
            </Link>

          </nav>

        </div>



        {/* ====================================================
            03. SERVICES
        ==================================================== */}

        <div className="footer-column footer-services-column">

          <h3>
            {t("footer.services")}
          </h3>


          <nav
            className="footer-links"
            aria-label={
              t("footer.serviceLinksLabel")
            }
          >

            {services.map((service) => (

              <Link
                key={
                  service.id ||
                  service.slug
                }
                to={
                  `/services/${service.slug}`
                }
              >

                {isArabic
                  ? t(
                      `serviceItems.${service.slug}.menuTitle`
                    )
                  : service.menuTitle}

              </Link>

            ))}

          </nav>

        </div>



        {/* ====================================================
            04. CONTACT INFORMATION
        ==================================================== */}

        <div className="footer-column">

          <h3>
            {t("footer.contact")}
          </h3>


          <div className="footer-contact-list">


            {/* ==================================================
                ADDRESS
            ================================================== */}

            <a
              href="https://www.google.com/maps/place/%D9%85%D8%B1%D9%83%D8%B2+%D8%A7%D9%84%D8%B6%D8%A8%D8%A7%D8%A8%E2%80%AD/@24.6652146,46.7082051,128m/data=!3m1!1e3!4m6!3m5!1s0x3e2f048a1b400001:0xb6b688ddfd833296!8m2!3d24.6654299!4d46.7084972!16s%2Fg%2F11kj904j5k"
              target="_blank"
              rel="noreferrer"
              className="footer-contact-item"
            >

              <span className="footer-contact-icon">
                <FaMapMarkerAlt />
              </span>

              <span>

                {t("footer.riyadh")}

                <small>
                  {t("footer.country")}
                </small>

              </span>

            </a>



            {/* ==================================================
                PHONE
            ================================================== */}

            <a
              href="tel:+966920051300"
              className="footer-contact-item"
            >

              <span className="footer-contact-icon">
                <FaPhoneAlt />
              </span>

              <span>
                920051300
              </span>

            </a>



            {/* ==================================================
                EMAIL
            ================================================== */}

            <a
              href="mailto:info@iocl.sa"
              className="footer-contact-item"
            >

              <span className="footer-contact-icon">
                <FaEnvelope />
              </span>

              <span>
                info@iocl.sa
              </span>

            </a>



            {/* ==================================================
                WEBSITE
            ================================================== */}

            <a
              href="https://www.iocl.sa"
              target="_blank"
              rel="noreferrer"
              className="footer-contact-item"
            >

              <span className="footer-contact-icon">
                <FaGlobe />
              </span>

              <span>
                www.iocl.sa
              </span>

            </a>

          </div>

        </div>

      </div>



      {/* ======================================================
          FOOTER BOTTOM
      ====================================================== */}

      <div className="footer-bottom">

        <div className="footer-container footer-bottom-content">


          {/* COPYRIGHT */}

          <p>
            {t(
              "footer.copyright",
              {
                year: currentYear,
              }
            )}
          </p>




        </div>

      </div>

    </footer>
  );
}