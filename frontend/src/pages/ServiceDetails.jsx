import { Link, useParams } from "react-router-dom";
import { FaArrowRight, FaCheck, FaChevronLeft } from "react-icons/fa";
import services from "../data/services";
import "./ServiceDetails.css";
import PageTransition from "../components/PageTransition";

export default function ServiceDetails() {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return (
      <main className="service-not-found">
        <span>404</span>
        <h1>Service not found</h1>
        <p>The service you’re looking for is not available.</p>
        <Link to="/">Return to homepage</Link>
      </main>
    );
  }

  const Icon = service.icon;

  return (
    <PageTransition>
      <main className="service-details-page">
        <section className="service-details-hero">
          <div className="service-details-orb" aria-hidden="true" />
          <div className="container">
            <Link to="/#services" className="service-back-link">
              <FaChevronLeft aria-hidden="true" />
              All services
            </Link>

            <div className="service-hero-grid">
              <div className="service-hero-copy">
                <div className="service-details-icon" aria-hidden="true">
                  <Icon />
                </div>
                <span className="service-eyebrow">{service.category}</span>
                <h1>{service.title}</h1>
                <p>{service.shortDescription}</p>
                <Link to="/contact" className="service-hero-cta">
                  Discuss your requirements
                  <FaArrowRight aria-hidden="true" />
                </Link>
              </div>

              <aside className="service-outcomes" aria-label="Service benefits">
                <span>What you can expect</span>
                <ul>
                  {service.outcomes.map((outcome) => (
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
              <span className="service-details-label">Service overview</span>
              <h2>{service.overviewTitle}</h2>
              <p>{service.description}</p>

              <div className="service-sectors">
                <h3>Supporting your sector</h3>
                <div>
                  {service.sectors.map((sector) => (
                    <span key={sector}>{sector}</span>
                  ))}
                </div>
              </div>
            </div>

            <aside className="service-feature-box">
              <span className="service-feature-kicker">Our capabilities</span>
              <h3>What we provide</h3>
              <ul>
                {service.features.map((feature) => (
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
                <span className="service-details-label">How we work</span>
                <h2>A clear path from assessment to improvement</h2>
              </div>
              <p>
                Every programme is shaped around the facility, its risks and
                the standards that matter to your operation.
              </p>
            </div>

            <ol className="service-process-grid">
              {service.process.map((step, index) => (
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
