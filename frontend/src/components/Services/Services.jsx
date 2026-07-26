import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./services.css";
import services from "../../data/services";


export default function Services() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.resolvedLanguage?.startsWith("ar");

  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="services-heading">
          <span>{t("servicesSection.label")}</span>

          <h2>{t("servicesSection.title")}</h2>

          <p>
            {t("servicesSection.description")}
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon;
            const localizedService = isArabic
              ? {
                  ...service,
                  ...t(`serviceItems.${service.slug}`, {
                    returnObjects: true,
                  }),
                }
              : service;

            return (
              <Link
                className="service-card"
                key={service.id}
                to={`/services/${service.slug}`}
                aria-label={t("servicesSection.viewLabel", {
                  service: localizedService.title,
                })}
              >
                <span className="service-card-number">
                  {String(service.id).padStart(2, "0")}
                </span>
                <div className="service-icon">
                  <Icon />
                </div>

                <span className="service-card-category">
                  {localizedService.category}
                </span>
                <h3>{localizedService.title}</h3>

                <p>{localizedService.shortDescription}</p>

                <span className="service-link">
                  {t("servicesSection.learnMore")}
                  <span aria-hidden="true">{t("common.arrow")}</span>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
