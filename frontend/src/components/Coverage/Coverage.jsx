import { cities, coverageStats } from "../../data/coverage.js";

export default function Coverage() {
  return (
    <section className="coverage" id="coverage">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Our Coverage</span>
          <h2>Kingdom-wide, and growing.</h2>
          <p>
            IOC/ECO operates across four main cities today with a footprint reaching every province — supporting
            SMEs, large and mega projects alike.
          </p>
        </div>

        <div className="cov-grid">
          <div className="cov-map">
            <svg viewBox="0 0 460 380" aria-hidden="true">
              <circle cx="230" cy="190" r="150" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
              <circle cx="230" cy="190" r="105" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
              <circle cx="230" cy="190" r="60" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />

              <line x1="230" y1="190" x2="230" y2="90" stroke="rgba(0,169,157,0.35)" strokeWidth="1.2" />
              <line x1="230" y1="190" x2="120" y2="250" stroke="rgba(0,169,157,0.35)" strokeWidth="1.2" />
              <line x1="230" y1="190" x2="345" y2="150" stroke="rgba(0,169,157,0.35)" strokeWidth="1.2" />
              <line x1="230" y1="190" x2="100" y2="120" stroke="rgba(0,169,157,0.25)" strokeWidth="1" />
              <line x1="230" y1="190" x2="360" y2="270" stroke="rgba(0,169,157,0.25)" strokeWidth="1" />

              <circle cx="230" cy="190" r="7" className="net-dot" />
              <circle className="net-pulse" cx="230" cy="190" r="7" />
              <text className="net-city" x="242" y="186" fill="#fff" fontWeight="600">
                RIYADH
              </text>

              <circle cx="120" cy="250" r="5" className="net-dot" />
              <text className="net-city" x="60" y="272">JEDDAH</text>

              <circle cx="345" cy="150" r="5" className="net-dot" />
              <text className="net-city" x="357" y="148">DAMMAM</text>

              <circle cx="230" cy="90" r="5" className="net-dot" />
              <text className="net-city" x="200" y="72">NEOM</text>

              <circle cx="100" cy="120" r="5" className="net-dot" />
              <text className="net-city" x="30" y="116">RED SEA</text>

              <circle cx="360" cy="270" r="5" className="net-dot" />
              <text className="net-city" x="365" y="292">JUBAIL</text>
            </svg>
          </div>

          <div>
            <div className="cov-list">
              {cities.map((c) => (
                <div className="cov-city" key={c.name}>
                  <span className="cov-dot"></span>
                  <div>
                    <strong>{c.name}</strong>
                    <span>{c.tag}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="service-line">
              {coverageStats.map((s) => (
                <div key={s.label}>
                  <span className="num">{s.num}</span> <span className="lbl">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
