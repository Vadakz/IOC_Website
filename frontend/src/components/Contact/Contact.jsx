import { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const payload = {
      name: form.fname.value,
      company: form.fcompany.value,
      email: form.femail.value,
      phone: form.fphone.value,
      service: form.fservice.value,
      message: form.fmsg.value,
    };

    setStatus("sending");
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section className="pad bg-white" id="contact">
      <div className="wrap">
        <div className="contact-grid">
          <div className="contact-info">
            <span className="eyebrow">Get In Touch</span>
            <h2>Let's talk about your site.</h2>
            <p>
              Tell us about your facility and we'll arrange a technical site survey — the same process IOC/ECO
              uses to identify problems and design a management plan from day one.
            </p>

            <div className="contact-line">
              <div className="ic">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.1-8.7A2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.7a2 2 0 01-.4 2.1L8 9.9a16 16 0 006 6l1.4-1.4a2 2 0 012.1-.4c.9.3 1.8.5 2.7.6a2 2 0 011.8 2.2z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                </svg>
              </div>
              <div>
                <strong>24/7 Customer Service</strong>
                <span>920 05 1300</span>
              </div>
            </div>

            <div className="contact-line">
              <div className="ic">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              </div>
              <div>
                <strong>Coverage</strong>
                <span>Riyadh · Jeddah · Dammam · Jubail · Red Sea · NEOM</span>
              </div>
            </div>

            <div className="contact-line">
              <div className="ic">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              </div>
              <div>
                <strong>Website</strong>
                <span>www.iocl.sa</span>
              </div>
            </div>
          </div>

          <div className="form-card">
            <h3>Request a quote</h3>
            <p>Share a few details about your facility and our team will follow up.</p>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="fname">Full name</label>
                  <input id="fname" name="fname" type="text" placeholder="Your name" required />
                </div>
                <div className="field">
                  <label htmlFor="fcompany">Company</label>
                  <input id="fcompany" name="fcompany" type="text" placeholder="Company name" />
                </div>
              </div>

              <div className="form-row">
                <div className="field">
                  <label htmlFor="femail">Email</label>
                  <input id="femail" name="femail" type="email" placeholder="you@company.com" required />
                </div>
                <div className="field">
                  <label htmlFor="fphone">Phone</label>
                  <input id="fphone" name="fphone" type="tel" placeholder="+966 ..." />
                </div>
              </div>

              <div className="form-row">
                <div className="field full">
                  <label htmlFor="fservice">Service needed</label>
                  <select id="fservice" name="fservice">
                    <option>Waste Management</option>
                    <option>Janitorial Services</option>
                    <option>Pest Management</option>
                    <option>MEP &amp; Robotics</option>
                    <option>Scenting</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="field full">
                  <label htmlFor="fmsg">Tell us about your site</label>
                  <textarea id="fmsg" name="fmsg" placeholder="Location, building type, current challenges..." />
                </div>
              </div>

              <button type="submit" className="btn btn-dark" style={{ width: "100%", justifyContent: "center" }} disabled={status === "sending"}>
                {status === "sending" ? "Sending..." : "Send request"}
              </button>

              {status === "success" && (
                <p className="form-note success">Thanks — your request has been received. Our team will reach out shortly.</p>
              )}
              {status === "error" && (
                <p className="form-note error">
                  Something went wrong reaching the server. Make sure the backend is running, then try again.
                </p>
              )}
              <p className="form-note">Submissions are sent to the IOC/ECO backend API.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
