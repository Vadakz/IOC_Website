import "./Hero.css";
import heroBackground from "../../assets/images/hero-bg.jpg";

const statistics = [
  {
    value: "40+",
    label: "Years of excellence",
  },
  {
    value: "600+",
    label: "Clients nationwide",
  },
  {
    value: "500+",
    label: "Employees",
  },
  {
    value: "24/7",
    label: "Customer support",
  },
];

export default function Hero() {
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
            Established 1982 · Saudi Arabia
          </div>

          <h1>
            Embracing
            <span>sustainable living.</span>
          </h1>

          <p className="hero-description">
            Delivering integrated waste management, janitorial, pest control,
            MEP and environmental services for cleaner, safer and more
            sustainable communities across Saudi Arabia.
          </p>

          <div className="hero-actions">
            <a href="#services" className="hero-button hero-button-primary">
              Explore Services
              <span aria-hidden="true">→</span>
            </a>

            <a href="#contact" className="hero-button hero-button-secondary">
              Request a Quote
            </a>
          </div>

          <div className="hero-certifications">
            <span>Nationwide Coverage</span>
            <span>Integrated Services</span>
            <span>24/7 Operations</span>
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

      <a href="#about" className="hero-scroll" aria-label="Scroll to about section">
        <span>Scroll to discover</span>
        <span className="hero-scroll-line" />
      </a>
    </section>
  );
}