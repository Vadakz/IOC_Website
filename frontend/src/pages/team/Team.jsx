/* ==========================================================
   IMPORTS
========================================================== */

import "./Team.css";

import { useTranslation } from "react-i18next";
import { FaUserTie, FaLinkedin } from "react-icons/fa";

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
     MANAGEMENT TEAM
  ======================================================== */

  const leadershipTeam = [
    {
      key: "finance",
      photo: fdPhoto,
      linkedin: "https://www.linkedin.com/in/rajesh-kulkarni-30419a90/",
    },
    {
      key: "sales",
      photo: salesManagerPhoto,
      linkedin: "https://www.linkedin.com/in/saif-k-almajali-250b8626/",
    },
    {
      key: "operations",
      photo: operationsManagerPhoto,
      linkedin: "https://www.linkedin.com/in/ramy-youssef-/",
    },
    {
      key: "hrAdmin",
      photo: femalePlaceholder,
      linkedin: "https://www.linkedin.com/in/arwa-bin-ashban-aphri-2844021b6/",
    },
  ];

  /* ========================================================
     MANAGING DIRECTOR LINKEDIN
  ======================================================== */

  const managingDirectorLinkedin =
    "https://www.linkedin.com/in/charbel-keyrouz-77614a124/";

  return (
    <PageTransition>
      <main className="team-page">
        {/* 01. HERO SECTION */}
        <section className="team-hero">
          <div className="team-container">
            <span className="team-eyebrow">
              {t("team.hero.label")}
            </span>

            <h1>
              {t("team.hero.title")}
              <span> {t("team.hero.accent")}</span>
            </h1>

            <p>{t("team.hero.description")}</p>
          </div>
        </section>

        {/* 02. LEADERSHIP SECTION */}
        <section className="team-leadership">
          <div className="team-container">
            <div className="team-section-heading">
              <div>
                <span className="team-eyebrow">
                  {t("team.leadership.label")}
                </span>
                <h2>{t("team.leadership.title")}</h2>
              </div>

              <p>{t("team.leadership.description")}</p>
            </div>

            {/* MANAGING DIRECTOR */}
            <article className="team-ceo-card">
              <div className="team-ceo-photo">
                <img
                  src={mdPhoto}
                  alt={t("team.managingDirector.name")}
                  className="team-md-image"
                />
              </div>

              <div className="team-ceo-content">
                <span className="team-position-label">
                  {t("team.managingDirector.position")}
                </span>

                <h3>{t("team.managingDirector.name")}</h3>

                <p>{t("team.managingDirector.description")}</p>

                {managingDirectorLinkedin && (
                  <a
                    href={managingDirectorLinkedin}
                    className="team-linkedin-button"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${t("team.managingDirector.name")} LinkedIn Profile`}
                  >
                    <FaLinkedin aria-hidden="true" />
                    <span>{t("team.linkedinButton")}</span>
                  </a>
                )}
              </div>
            </article>

            {/* MANAGEMENT TEAM */}
            <div className="team-management-grid">
              {leadershipTeam.map((member) => (
                <article className="team-member-card" key={member.key}>
                  <div className="team-member-photo">
                    {member.photo ? (
                      <img
                        src={member.photo}
                        alt={t(`team.members.${member.key}.name`)}
                        className={`team-member-image ${member.key === "hrAdmin" ? "team-placeholder-image" : ""
                          }`}
                      />
                    ) : (
                      <div className="team-photo-placeholder">
                        <FaUserTie aria-hidden="true" />
                        <span>{t("team.photoPlaceholder")}</span>
                      </div>
                    )}
                  </div>

                  <div className="team-member-content">
                    <span>
                      {t(`team.members.${member.key}.position`)}
                    </span>

                    <h3>{t(`team.members.${member.key}.name`)}</h3>

                    <p>{t(`team.members.${member.key}.description`)}</p>

                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        className="team-linkedin-button"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${t(`team.members.${member.key}.name`)} LinkedIn Profile`}
                      >
                        <FaLinkedin aria-hidden="true" />
                        <span>{t("team.linkedinButton")}</span>
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 03. ORGANIZATION STRUCTURE */}
        <section className="team-structure">
          <div className="team-container">
            {/* Organization structure content can be added here later. */}
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
