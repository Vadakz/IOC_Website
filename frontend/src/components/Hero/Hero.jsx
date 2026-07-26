import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Hero.css";
import heroBackground from "../../assets/images/hero-bg.jpg";

export default function Hero() {
  const { t } = useTranslation();
  const statistics = t("hero.stats", { returnObjects: true });
  const badges = t("hero.badges", { returnObjects: true });

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      className="hero"
      id="home"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      <div className="hero-overlay" />

      <div className="hero-decoration hero-decoration-one" />
      <div className="hero-decoration hero-decoration-two" />

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-line" />
            {t("hero.label")}
          </div>

          <h1>
            {t("hero.titleFirst")}
            <span>{t("hero.titleSecond")}</span>
          </h1>

          <p className="hero-description">
            {t("hero.description")}
          </p>

          <div className="hero-actions">
            <button
              type="button"
              className="hero-button hero-button-primary"
              onClick={() => scrollToSection("services")}
            >
              {t("hero.explore")}
              <span aria-hidden="true">{t("common.arrow")}</span>
            </button>

            <Link to="/contact" className="hero-button hero-button-secondary">
              {t("hero.requestQuote")}
            </Link>
          </div>

          <div className="hero-certifications">
            {badges.map((badge) => (
              <span key={badge}>{badge}</span>
            ))}
          </div>
        </div>

        <div className="hero-statistics">
          {statistics.map((stat) => (
            <article className="hero-stat-card" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>
      </div>

      <button
        type="button"
        className="hero-scroll"
        aria-label={t("hero.scrollLabel")}
        onClick={() => scrollToSection("about")}
      >
        <span>{t("hero.scroll")}</span>
        <span className="hero-scroll-line" />
      </button>
    </section>
  );
}
