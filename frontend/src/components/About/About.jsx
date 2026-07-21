import "./About.css";
import aboutImage from "../../assets/images/about/about-40-years.png";

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-image-wrapper">
            <img
              src={aboutImage}
              alt="IOC employee representing decades of operational excellence"
              className="about-image"
            />

         
          </div>

          <div className="about-content">
            <span className="about-label">About IOC/ECO</span>

            <h2>
              Delivering Excellence
              <span> Since 1982</span>
            </h2>

            <p>
              International Operations Company provides integrated facility
              management and environmental services across Saudi Arabia.
            </p>

            <p>
              With more than four decades of experience, we support businesses,
              industries and communities through reliable, sustainable and
              professionally managed solutions.
            </p>

            <div className="about-highlights">
              <div className="about-highlight">
                <strong>600+</strong>
                <span>Clients Served</span>
              </div>

              <div className="about-highlight">
                <strong>500+</strong>
                <span>Employees</span>
              </div>

              <div className="about-highlight">
                <strong>40+</strong>
                <span>Years of Experience</span>
              </div>

              <div className="about-highlight">
                <strong>1982</strong>
                <span>Established</span>
              </div>
            </div>

            <a href="#contact" className="about-button">
              Learn More About Us
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}