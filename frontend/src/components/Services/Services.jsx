import { Link } from "react-router-dom";
import "./services.css";
import services from "../../data/services";


export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="services-heading">
          <span>Our Services</span>

          <h2>Six services. One standard of delivery.</h2>

          <p>
            From daily workplace care to critical building systems, IOC/ECO
            delivers services shaped around your facility and operational needs.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                className="service-card"
                key={service.id}
                to={`/services/${service.slug}`}
                aria-label={`View ${service.title}`}
              >
                <span className="service-card-number">
                  {String(service.id).padStart(2, "0")}
                </span>
                <div className="service-icon">
                  <Icon />
                </div>

                <span className="service-card-category">{service.category}</span>
                <h3>{service.title}</h3>

                <p>{service.shortDescription}</p>

                <span className="service-link">
                  Learn More
                  <span aria-hidden="true">→</span>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
