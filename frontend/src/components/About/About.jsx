import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./About.css";
import aboutImage from "../../assets/images/about/about-40-years.png";

export default function About() {
  const { t } = useTranslation();
  const highlights = t("about.highlights", { returnObjects: true });

  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-image-wrapper">
            <img
              src={aboutImage}
              alt={t("about.imageAlt")}
              className="about-image"
            />

         
          </div>

          <div className="about-content">
            <span className="about-label">{t("about.label")}</span>

            <h2>
              {t("about.title")}
              <span> {t("about.titleAccent")}</span>
            </h2>

            <p>
              {t("about.paragraphOne")}
            </p>

            <p>
              {t("about.paragraphTwo")}
            </p>

            <div className="about-highlights">
              {highlights.map((highlight) => (
                <div className="about-highlight" key={highlight.label}>
                  <strong>{highlight.value}</strong>
                  <span>{highlight.label}</span>
                </div>
              ))}
            </div>

            <Link to="/industries" className="about-button">
              {t("about.button")}
              <span aria-hidden="true">{t("common.arrow")}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
