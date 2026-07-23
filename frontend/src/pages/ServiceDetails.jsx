import { Link, useParams } from "react-router-dom";
import services from "../data/services";
import "./ServiceDetails.css";

export default function ServiceDetails() {
  const { slug } = useParams();

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return (
      <main className="service-not-found">
        <h1>Service not found</h1>
        <Link to="/">Return to homepage</Link>
      </main>
    );
  }

  const Icon = service.icon;

  return (
    <main className="service-details-page">
      <section className="service-details-hero">
        <div className="container">
          <Link to="/#services" className="service-back-link">
            ← Back to services
          </Link>

          <div className="service-details-icon">
            <Icon />
          </div>

          <span>IOC/ECO Services</span>

          <h1>{service.title}</h1>

          <p>{service.shortDescription}</p>
        </div>
      </section>

      <section className="service-details-content">
        <div className="container service-details-grid">
          <div>
            <span className="service-details-label">
              Service Overview
            </span>

            <h2>
              Professional solutions tailored to your facility
            </h2>

            <p>{service.description}</p>

            <Link to="/contact" className="service-contact-button">
              Request This Service
              <span>→</span>
            </Link>
          </div>

          <div className="service-feature-box">
            <h3>What We Provide</h3>

            <ul>
              {service.features.map((feature) => (
                <li key={feature}>
                  <span>✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}