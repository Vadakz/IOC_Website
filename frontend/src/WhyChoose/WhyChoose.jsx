import "./WhyChoose.css";
import { Link } from "react-router-dom";

const strengths = [
  {
    number: "01",
    title: "Operational Excellence",
    description:
      "Efficient, reliable and performance-driven services designed to support continuous business operations.",
    points: [
      "Reliable service delivery",
      "Continuous improvement",
      "Performance-focused operations",
    ],
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13 2 4.5 13h6L9.8 22 19.5 10h-6L13 2Z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Quality & Compliance",
    description:
      "Our operations follow strict quality, safety and regulatory standards across every service.",
    points: [
      "Safety-first approach",
      "Quality control systems",
      "Regulatory compliance",
    ],
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2 4.5 5v6.2c0 4.7 3.1 8.9 7.5 10.8 4.4-1.9 7.5-6.1 7.5-10.8V5L12 2Zm-1.1 14.2-3.2-3.1 1.4-1.4 1.8 1.8 4.1-4.1 1.4 1.4-5.5 5.4Z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Experienced Team",
    description:
      "Skilled professionals and experienced operational teams committed to delivering dependable results.",
    points: [
      "Qualified professionals",
      "Dedicated support teams",
      "Industry experience",
    ],
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M16 11c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3ZM8 11c1.7 0 3-1.3 3-3S9.7 5 8 5 5 6.3 5 8s1.3 3 3 3Zm0 2c-3.3 0-6 1.7-6 4v2h12v-2c0-2.3-2.7-4-6-4Zm8 0c-.5 0-1 .1-1.5.1 1 .9 1.5 2.2 1.5 3.9v2h6v-2c0-2.3-2.7-4-6-4Z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Nationwide Capability",
    description:
      "Strategic operational presence supporting clients across major commercial and industrial cities.",
    points: [
      "Riyadh and Jeddah",
      "Dammam and Jubail",
      "Flexible service deployment",
    ],
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2a8 8 0 0 0-8 8c0 5.7 8 12 8 12s8-6.3 8-12a8 8 0 0 0-8-8Zm0 11.2A3.2 3.2 0 1 1 12 6.8a3.2 3.2 0 0 1 0 6.4Z" />
      </svg>
    ),
  },
];

export default function WhyChoose() {
  return (
    <section className="why-choose-section" id="why-choose">
      <div className="why-choose-container">
        <div className="why-choose-header">
          <div className="why-choose-heading">
            <span className="why-choose-label">Why Choose IOC</span>

            <h2>
              A trusted partner for
              <span> integrated facility management</span>
            </h2>
          </div>

          <div className="why-choose-intro">
            <p>
              IOC combines operational expertise, skilled professionals and
              reliable service systems to deliver solutions tailored to each
              client’s requirements.
            </p>

            <div className="why-choose-highlight">
              <strong>40+</strong>
              <span>Years of proven operational excellence</span>
            </div>
          </div>
        </div>

        <div className="why-choose-grid">
          {strengths.map((strength) => (
            <article className="why-choose-card" key={strength.title}>
              <div className="why-choose-card-top">
                <div className="why-choose-icon">{strength.icon}</div>
                <span className="why-choose-number">{strength.number}</span>
              </div>

              <h3>{strength.title}</h3>

              <p>{strength.description}</p>

              <ul>
                {strength.points.map((point) => (
                  <li key={point}>
                    <span></span>
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="why-choose-bottom">
          <div>
            <span className="why-choose-status-dot"></span>

            <p>
              Delivering safe, reliable and sustainable operational support
              throughout the Kingdom.
            </p>
          </div>

          <Link to="/industries">
            Industries We Serve
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}