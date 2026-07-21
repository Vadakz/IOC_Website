export default function Footer() {
  return (
    <footer className="site">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <div className="brand" style={{ color: "#fff" }}>
              <span className="brand-mark">iC</span>
              <span className="brand-text">
                <strong>IOC / ECO</strong>
                <span>International Operations Company</span>
              </span>
            </div>
            <p>
              A leading Saudi Arabian facility management company, established 1982. Embracing sustainable living,
              aligned with Vision 2030.
            </p>
          </div>

          <div className="foot-col">
            <h5>Navigate</h5>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="foot-col">
            <h5>Services</h5>
            <ul>
              <li><a href="#services">Waste Management</a></li>
              <li><a href="#services">Janitorial Services</a></li>
              <li><a href="#services">Pest Management</a></li>
              <li><a href="#services">MEP &amp; Robotics</a></li>
            </ul>
          </div>

          <div className="foot-col">
            <h5>Contact</h5>
            <ul>
              <li>920 05 1300</li>
              <li>www.iocl.sa</li>
              <li>Riyadh, Saudi Arabia</li>
            </ul>
          </div>
        </div>

        <div className="foot-bottom">
          <span>© 2026 International Operations Company (IOC/ECO). All rights reserved.</span>
          <span>Embracing Sustainable Living</span>
        </div>
      </div>
    </footer>
  );
}
