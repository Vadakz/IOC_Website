
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./IndustriesPage.css";
import clients from "../data/clients";
import PageTransition from "../components/PageTransition";

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

/*const clients = [
  {
    name: "Client One",
    logo: "/clients/client-1.png",
  },
  {
    name: "Client Two",
    logo: "/clients/client-2.png",
  },
  {
    name: "Client Three",
    logo: "/clients/client-3.png",
  },
  {
    name: "Client Four",
    logo: "/clients/client-4.png",
  },
  {
    name: "Client Five",
    logo: "/clients/client-5.png",
  },
  {
    name: "Client Six",
    logo: "/clients/client-6.png",
  },
];
*/

export default function IndustriesPage() {
  const { t } = useTranslation();
  const movingClients = [...clients, ...clients];
  const localizedIndustries = t("industries.items", { returnObjects: true });

  return (
    
      

     <PageTransition>
      <main className="industries-page">
        <section className="industries-page-hero">
          <div className="industries-page-container">
            <span className="industries-page-label">
              {t("industries.heroLabel")}
            </span>

            <h1>
              {t("industries.heroTitle")}
              <span> {t("industries.heroAccent")}</span>
            </h1>

            <p>
              {t("industries.heroDescription")}
            </p>

          
          </div>
        </section>

        <section className="industries-overview" id="industry-list">
          <div className="industries-page-container">
            <div className="industries-overview-header">
              <div>
                <span>{t("industries.expertiseLabel")}</span>

                <h2>
                  {t("industries.expertiseTitle")}
                </h2>
              </div>

              <p>
                {t("industries.expertiseDescription")}
              </p>
            </div>

            <div className="industries-page-grid">
              {industries.map((industry, index) => {
                const content = localizedIndustries[index];

                return (
                <article className="industries-page-card" key={content.title}>
                  <div className="industries-page-card-top">
                    <div className="industries-page-icon">{industry.icon}</div>

                    <span>{String(index + 1).padStart(2, "0")}</span>
                  </div>

                  <h3>{content.title}</h3>
                  <p>{content.description}</p>
                </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="clients-section" id="clients">
          <div className="industries-page-container">
            <div className="clients-section-header">
              <div>
                <span>{t("industries.clientsLabel")}</span>

                <h2>
                  {t("industries.clientsTitle")}
                </h2>
              </div>

              <p>
                {t("industries.clientsDescription")}
              </p>
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

        <section className="industries-cta">
          <div className="industries-page-container industries-cta-content">
            <div>
              <span>{t("industries.partnerLabel")}</span>

              <h2>{t("industries.partnerTitle")}</h2>
            </div>

            <Link to="/contact">
              {t("industries.partnerButton")}
              <span aria-hidden="true">{t("common.arrow")}</span>
            </Link>
          </div>
        </section>
      </main>
      </PageTransition>
    
  );
}
