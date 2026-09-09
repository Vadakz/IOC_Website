/* ==========================================================
   IMPORTS
========================================================== */

import "./Team.css";

import { useTranslation } from "react-i18next";
import { FaUserTie } from "react-icons/fa";

import PageTransition from "../../components/PageTransition";

import fdPhoto from "../../assets/images/team/FD.png";
import mdPhoto from "../../assets/images/team/md.png";
import salesManagerPhoto from "../../assets/images/team/sales-manager.png";
import operationsManagerPhoto from "../../assets/images/team/operations-manager.png";
import femalePlaceholder from "../../assets/images/team/female placeholder.jpg";


/* ==========================================================
   TEAM PAGE
========================================================== */

export default function Team() {

  const { t } = useTranslation();


  /* ========================================================
     LEADERSHIP TEAM
     
     Display order:
     01. Finance Director
     02. Sales Manager
     03. Operations Manager
     04. HR Manager
  ======================================================== */

  const leadershipTeam = [
    {
      key: "finance",
      photo: fdPhoto,
    },

    {
      key: "sales",
      photo: salesManagerPhoto,
    },

    {
      key: "operations",
      photo: operationsManagerPhoto,
    },

    {
      key: "hrAdmin",
      photo: femalePlaceholder,
    },
  ];


  /* ========================================================
     PAGE
  ======================================================== */

  return (

    <PageTransition>

      <main className="team-page">


        {/* ==================================================
            01. HERO SECTION
        ================================================== */}

        <section className="team-hero">

          <div className="team-container">


            {/* HERO LABEL */}

            <span className="team-eyebrow">
              {t("team.hero.label")}
            </span>


            {/* HERO TITLE */}

            <h1>

              {t("team.hero.title")}

              <span>
                {" "}
                {t("team.hero.accent")}
              </span>

            </h1>


            {/* HERO DESCRIPTION */}

            <p>
              {t("team.hero.description")}
            </p>

          </div>

        </section>



        {/* ==================================================
            02. LEADERSHIP SECTION
        ================================================== */}

        <section className="team-leadership">

          <div className="team-container">


            {/* ==================================================
                SECTION HEADING
            ================================================== */}

            <div className="team-section-heading">

              <div>

                <span className="team-eyebrow">
                  {t("team.leadership.label")}
                </span>

                <h2>
                  {t("team.leadership.title")}
                </h2>

              </div>


              <p>
                {t("team.leadership.description")}
              </p>

            </div>



            {/* ==================================================
                02A. MANAGING DIRECTOR
            ================================================== */}

            <article className="team-ceo-card">


              {/* MANAGING DIRECTOR PHOTO */}
              <div className="team-ceo-photo">

                <img
                  src={mdPhoto}
                  alt={t("team.ceo.name")}
                  className="team-md-image"
                />

              </div>


              {/* MANAGING DIRECTOR INFORMATION */}

              <div className="team-ceo-content">

                <span className="team-position-label">
                  {t("team.managingDirector.position")}
                </span>

                <h3>
                  {t("team.managingDirector.name")}
                </h3>

                <p>
                  {t("team.managingDirector.description")}
                </p>

              </div>

            </article>



            {/* ==================================================
                02B. MANAGEMENT TEAM
            ================================================== */}

            <div className="team-management-grid">

              {leadershipTeam.map((member) => (

                <article
                  className="team-member-card"
                  key={member.key}
                >


                  {/* ==========================================
                      MEMBER PHOTO
                  ========================================== */}

                  <div className="team-member-photo">

                    {member.photo ? (

                      <img
                        src={member.photo}
                        alt={t(
                          `team.members.${member.key}.name`
                        )}
                        className={`team-member-image ${member.key === "hrAdmin"
                          ? "team-placeholder-image"
                          : ""
                          }`}
                      />

                    ) : (

                      <div className="team-photo-placeholder">

                        <FaUserTie
                          aria-hidden="true"
                        />

                        <span>
                          {t("team.photoPlaceholder")}
                        </span>

                      </div>

                    )}

                  </div>



                  {/* ==========================================
                      MEMBER INFORMATION
                  ========================================== */}

                  <div className="team-member-content">

                    <span>
                      {t(
                        `team.members.${member.key}.position`
                      )}
                    </span>

                    <h3>
                      {t(
                        `team.members.${member.key}.name`
                      )}
                    </h3>

                  </div>

                </article>

              ))}

            </div>

          </div>

        </section>



        {/* ==================================================
            03. ORGANIZATION STRUCTURE
        ================================================== */}

        <section className="team-structure">

          <div className="team-container">


            {/* ==================================================
                SECTION HEADING
            ================================================== */}

            <div className="team-structure-heading">

              <span className="team-eyebrow">
                {t("team.structure.label")}
              </span>

              <h2>
                {t("team.structure.title")}
              </h2>

              <p>
                {t("team.structure.description")}
              </p>

            </div>



            {/* ==================================================
                ORGANIZATION CHART
            ================================================== */}

            <div className="team-org-chart">


              {/* ==================================================
                  MANAGING DIRECTOR
              ================================================== */}

              <div className="team-org-ceo">

                <span>
                  {t(
                    "team.managingDirector.position"
                  )}
                </span>

              </div>



              {/* ==================================================
                  MAIN CONNECTOR
              ================================================== */}

              <div className="team-org-connector">

                <span />

              </div>



              {/* ==================================================
                  MANAGEMENT LEVEL
              ================================================== */}

              <div className="team-org-management">

                {leadershipTeam.map((member) => (

                  <div
                    className="team-org-item"
                    key={member.key}
                  >

                    <span>
                      {t(
                        `team.members.${member.key}.position`
                      )}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </section>

      </main>

    </PageTransition>
  );
}