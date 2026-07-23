import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaFacebookF,
  FaGlobe,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

import services from "../../data/services";
import logo from "../../assets/images/logo.png";
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
  
      <footer className="site-footer">
        <div className="footer-accent-line" />

        <div className="footer-container footer-main-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo-link">
              <img
                src={logo}
                alt="International Operations Company"
                className="footer-logo"
              />
            </Link>

            <p className="footer-brand-description">
              Delivering integrated facility management, environmental and
              operational solutions that create cleaner, safer and more
              sustainable environments.
            </p>

            <span className="footer-brand-tagline">
              Creating Sustainable Living
            </span>

            <div className="footer-socials">
              <a
                href="#"
                aria-label="LinkedIn"
                className="footer-social-link"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="footer-social-link"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="footer-social-link"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h3>Company</h3>

            <nav className="footer-links" aria-label="Footer company links">
              <Link to="/">Home</Link>
              <Link to="/#about">About Us</Link>
              <Link to="/industries">Industries</Link>
              <Link to="/industries#clients">Our Clients</Link>
              <Link to="/contact">Contact Us</Link>
            </nav>
          </div>

          <div className="footer-column footer-services-column">
            <h3>Our Services</h3>

            <nav className="footer-links" aria-label="Footer service links">
              {services.map((service) => (
                <Link
                  key={service.id || service.slug}
                  to={`/services/${service.slug}`}
                >
                  {service.title}
                </Link>
              ))}
            </nav>
          </div>

          <div className="footer-column">
            <h3>Contact</h3>

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
                  Riyadh
                  <small>Kingdom of Saudi Arabia</small>
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
              © {currentYear} International Operations Company. All rights
              reserved.
            </p>

            <div className="footer-legal-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms &amp; Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}