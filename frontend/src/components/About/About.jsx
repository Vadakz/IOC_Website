/* ==========================================================
   IMPORTS
========================================================== */

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./About.css";

import aboutImage from "../../assets/images/about/about-40-years.png";


/* ==========================================================
   ABOUT SECTION
========================================================== */

export default function About() {

  const { t } = useTranslation();


  /* ========================================================
     LOCALIZED HIGHLIGHTS
  ======================================================== */

  const highlights = t("about.highlights", {
    returnObjects: true,
  });


  /* ========================================================
     COMPONENT
  ======================================================== */

  return (

    <section
      className="about-section"
      id="about"
    >

      <div className="container">

        <div className="about-grid">


          {/* ==================================================
              01. IMAGE
          ================================================== */}

          <div className="about-image-wrapper">

            <img
              src={aboutImage}
              alt={t("about.imageAlt")}
              className="about-image"
            />

          </div>



          {/* ==================================================
              02. CONTENT
          ================================================== */}

          <div className="about-content">


            {/* ==================================================
                SECTION LABEL
            ================================================== */}

            <span className="about-label">
              {t("about.label")}
            </span>


            {/* ==================================================
                TITLE
            ================================================== */}

            <h2>

              {t("about.title")}

              <span>
                {t("about.titleAccent")}
              </span>

            </h2>


            {/* ==================================================
                DESCRIPTION
            ================================================== */}

            <p>
              {t("about.paragraphOne")}
            </p>

            <p>
              {t("about.paragraphTwo")}
            </p>


            {/* ==================================================
                HIGHLIGHTS
            ================================================== */}

            <div className="about-highlights">

              {highlights.map((highlight) => (

                <div
                  className="about-highlight"
                  key={highlight.label}
                >

                  <strong>
                    {highlight.value}
                  </strong>

                  <span>
                    {highlight.label}
                  </span>

                </div>

              ))}

            </div>


            {/* ==================================================
                LEARN MORE
                Redirects to Our Journey
            ================================================== */}

            <Link
              to="/journey"
              className="about-button"
            >

              {t("about.button")}

              <span aria-hidden="true">
                {t("common.arrow")}
              </span>

            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}