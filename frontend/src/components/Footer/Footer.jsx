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

export default function Footer() {
  const { t, i18n } = useTranslation();
  const currentYear = new Date().getFullYear();
  const isArabic = i18n.resolvedLanguage?.startsWith("ar");

  return (
    <>
  
      <footer className="site-footer">
        <div className="footer-accent-line" />

        <div className="footer-container footer-main-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo-link">
              <img
                src={logo}
                alt={t("footer.logoAlt")}
                className="footer-logo"
              />
            </Link>

            <p className="footer-brand-description">
              {t("footer.description")}
            </p>

            <span className="footer-brand-tagline">
              {t("footer.tagline")}
            </span>

            <div className="footer-socials">
              <a
                href="https://www.linkedin.com/company/international-operations-company/"
                aria-label="LinkedIn"
                className="footer-social-link"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://x.com/ioceco"
                aria-label="Twitter"
                className="footer-social-link"
              >
                <FaTwitter />
              </a>

              <a
                href="https://www.instagram.com/ecoioc/"
                aria-label="Instagram"
                className="footer-social-link"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h3>{t("footer.company")}</h3>

            <nav
              className="footer-links"
              aria-label={t("footer.companyLinksLabel")}
            >
              <Link to="/">{t("footer.home")}</Link>
              <Link to="/#about">{t("footer.about")}</Link>
              <Link to="/industries">{t("footer.industries")}</Link>
              <Link to="/industries#clients">{t("footer.clients")}</Link>
              <Link to="/contact">{t("footer.contactUs")}</Link>
            </nav>
          </div>

          <div className="footer-column footer-services-column">
            <h3>{t("footer.services")}</h3>

            <nav
              className="footer-links"
              aria-label={t("footer.serviceLinksLabel")}
            >
              {services.map((service) => (
                <Link
                  key={service.id || service.slug}
                  to={`/services/${service.slug}`}
                >
                  {isArabic
                    ? t(`serviceItems.${service.slug}.menuTitle`)
                    : service.menuTitle}
                </Link>
              ))}
            </nav>
          </div>

          <div className="footer-column">
            <h3>{t("footer.contact")}</h3>

            <div className="footer-contact-list">
              <a
                href="https://maps.google.com/?q=Riyadh+Saudi+Arabia"
                target="_blank"
                rel="noreferrer"
                className="footer-contact-item"
              >
                <span className="footer-contact-icon">
                  <FaMapMarkerAlt />
                </span>

                <span>
                  {t("footer.riyadh")}
                  <small>{t("footer.country")}</small>
                </span>
              </a>

              <a
                href="tel:+966920051300"
                className="footer-contact-item"
              >
                <span className="footer-contact-icon">
                  <FaPhoneAlt />
                </span>

                <span>920051300</span>
              </a>

              <a
                href="mailto:info@iocl.sa"
                className="footer-contact-item"
              >
                <span className="footer-contact-icon">
                  <FaEnvelope />
                </span>

                <span>info@iocl.sa</span>
              </a>

              <a
                href="https://www.iocl.sa"
                target="_blank"
                rel="noreferrer"
                className="footer-contact-item"
              >
                <span className="footer-contact-icon">
                  <FaGlobe />
                </span>

                <span>www.iocl.sa</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-container footer-bottom-content">
            <p>
              {t("footer.copyright", { year: currentYear })}
            </p>

            <div className="footer-legal-links">
              <a href="#">{t("footer.privacy")}</a>
              <a href="#">{t("footer.terms")}</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
