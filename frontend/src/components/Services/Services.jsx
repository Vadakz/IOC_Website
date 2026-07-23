import { Link } from "react-router-dom";
import "./services.css";
import services from "../../data/services";


export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="services-heading">
          <span>Our Services</span>

          <h2>End-to-end facility management solutions</h2>

          <p>
            IOC/ECO delivers dependable technical, operational and
            environmental services designed around each client’s requirements.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article className="service-card" key={service.id}>
                <div className="service-icon">
                  <Icon />
                </div>

                <h3>{service.title}</h3>

                <p>{service.shortDescription}</p>

                <Link
                  to={`/services/${service.slug}`}
                  className="service-link"
                >
                  Learn More
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}