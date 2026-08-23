import "./Team.css";

import { useTranslation } from "react-i18next";
import {
  FaUserTie,
  FaChartLine,
  FaCogs,
  FaCoins,
  FaUsersCog,
} from "react-icons/fa";

import PageTransition from "../../components/PageTransition";


/* ==========================================================
   TEAM PAGE
========================================================== */

export default function Team() {
  const { t } = useTranslation();


  /* ========================================================
     LEADERSHIP DATA
  ======================================================== */

  const leadershipTeam = [
    {
      key: "sales",
      icon: FaChartLine,
    },
    {
      key: "operations",
      icon: FaCogs,
    },
    {
      key: "finance",
      icon: FaCoins,
    },
    {
      key: "hrAdmin",
      icon: FaUsersCog,
    },
  ];


  return (
    <PageTransition>
      <main className="team-page">


        {/* ==================================================
            01. HERO
        ================================================== */}

        <section className="team-hero">

          <div className="team-container">

            <span className="team-eyebrow">
              {t("team.hero.label")}
            </span>

            <h1>
              {t("team.hero.title")}
              <span>
                {" "}
                {t("team.hero.accent")}
              </span>
            </h1>

            <p>
              {t("team.hero.description")}
            </p>

          </div>

        </section>


        {/* ==================================================
            02. CEO
        ================================================== */}

        <section className="team-leadership">

          <div className="team-container">


            {/* SECTION HEADER */}

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


            {/* CEO CARD */}

            <article className="team-ceo-card">

              <div className="team-ceo-photo">

                <FaUserTie />

                <span>
                  {t("team.photoPlaceholder")}
                </span>

              </div>


              <div className="team-ceo-content">

                <span className="team-position-label">
                  {t("team.ceo.position")}
                </span>

                <h3>
                  {t("team.ceo.name")}
                </h3>

                <p>
                  {t("team.ceo.description")}
                </p>

              </div>

            </article>


            {/* ==================================================
                MANAGEMENT TEAM
            ================================================== */}

            <div className="team-management-grid">

              {leadershipTeam.map((member) => {

                const Icon = member.icon;

                return (

                  <article
                    className="team-member-card"
                    key={member.key}
                  >

                    <div className="team-member-photo">

                      <Icon />

                      <span>
                        {t("team.photoPlaceholder")}
                      </span>

                    </div>

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

                );

              })}

            </div>

          </div>

        </section>


        {/* ==================================================
            03. ORGANIZATION STRUCTURE
        ================================================== */}

        <section className="team-structure">

          <div className="team-container">


            {/* SECTION HEADING */}

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


            {/* ORGANIZATION CHART */}

            <div className="team-org-chart">


              {/* CEO */}

              <div className="team-org-ceo">

                <span>
                  {t("team.ceo.position")}
                </span>

              </div>


              {/* CONNECTION */}

              <div className="team-org-connector">
                <span />
              </div>


              {/* MANAGEMENT LEVEL */}

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