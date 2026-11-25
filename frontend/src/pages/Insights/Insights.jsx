
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./Insights.css";

const articles = [
  {
    id: 1,
    category: "Facility Management",
    date: "November 2026",
    readTime: "5 min read",
    title: "The Future of Integrated Facility Management",
    description:
      "Discover how integrated facility management brings multiple services together to improve operational efficiency, service quality and business performance.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
    featured: true,
  },
  {
    id: 2,
    category: "Sustainability",
    date: "November 2026",
    readTime: "4 min read",
    title: "Building a More Sustainable Future",
    description:
      "Explore the importance of sustainable practices in facility operations, resource management and responsible business growth.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 3,
    category: "Operations",
    date: "October 2026",
    readTime: "6 min read",
    title: "Why Operational Excellence Matters",
    description:
      "Learn how structured processes, skilled teams and consistent service delivery contribute to reliable operational performance.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 4,
    category: "Technology",
    date: "October 2026",
    readTime: "5 min read",
    title: "Technology Transforming Facility Management",
    description:
      "From digital monitoring to smarter maintenance planning, technology is changing how facilities are managed and maintained.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 5,
    category: "Workplace",
    date: "September 2026",
    readTime: "4 min read",
    title: "Creating Better Workplace Environments",
    description:
      "A well-managed workplace supports employee comfort, safety, productivity and the overall experience of building occupants.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 6,
    category: "Facility Management",
    date: "September 2026",
    readTime: "5 min read",
    title: "The Importance of Preventive Maintenance",
    description:
      "Understand how planned inspections and preventive maintenance can help reduce unexpected downtime and extend asset life.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1000&q=85",
  },
];

const categories = [
  "All",
  "Facility Management",
  "Operations",
  "Sustainability",
  "Technology",
  "Workplace",
];

function Insights() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("All");

  const featuredArticle = articles.find((article) => article.featured);

  const filteredArticles =
    activeCategory === "All"
      ? articles.filter((article) => !article.featured)
      : articles.filter(
          (article) =>
            article.category === activeCategory && !article.featured
        );

  return (
    <main className="insights-page">

      {/* PAGE HERO */}
      <section className="insights-hero">
        <div className="insights-hero-overlay"></div>

        <div className="insights-container insights-hero-content">
          <span className="insights-eyebrow">
            {t("insights.eyebrow", "KNOWLEDGE. PERSPECTIVES. INNOVATION.")}
          </span>

          <h1>
            {t("insights.title", "Blogs &")}{" "}
            <span>{t("insights.titleHighlight", "Insights")}</span>
          </h1>

          <p>
            {t(
              "insights.subtitle",
              "Ideas, insights and perspectives on facility management, operations, sustainability and the future of our industry."
            )}
          </p>

          <a href="#insights-articles" className="insights-hero-button">
            {t("insights.exploreButton", "Explore Articles")}
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="insights-hero-decoration"></div>
      </section>

      {/* FEATURED ARTICLE */}
      {featuredArticle && (
        <section className="insights-featured-section">
          <div className="insights-container">

            <div className="insights-section-heading">
              <div>
                <span className="insights-section-label">
                  {t("insights.featuredLabel", "EDITOR'S PICK")}
                </span>
                <h2>
                  {t("insights.featuredTitle", "Featured Article")}
                </h2>
              </div>
            </div>

            <article className="insights-featured-card">
              <div className="insights-featured-image">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  loading="lazy"
                />

                <span className="insights-featured-badge">
                  {t("insights.featuredBadge", "Featured")}
                </span>
              </div>

              <div className="insights-featured-content">
                <div className="insights-article-meta">
                  <span>{featuredArticle.category}</span>
                  <span>{featuredArticle.date}</span>
                </div>

                <h3>{featuredArticle.title}</h3>

                <p>{featuredArticle.description}</p>

                <div className="insights-featured-footer">
                  <span>{featuredArticle.readTime}</span>
                  <span className="insights-coming-soon">
                    {t("insights.comingSoon", "Article coming soon")}
                  </span>
                </div>
              </div>
            </article>

          </div>
        </section>
      )}

      {/* ARTICLES */}
      <section
        className="insights-articles-section"
        id="insights-articles"
      >
        <div className="insights-container">

          <div className="insights-section-heading insights-list-heading">
            <div>
              <span className="insights-section-label">
                {t("insights.latestLabel", "STAY INFORMED")}
              </span>

              <h2>
                {t("insights.latestTitle", "Latest Articles")}
              </h2>

              <p>
                {t(
                  "insights.latestDescription",
                  "Explore our perspectives on the topics shaping our industry."
                )}
              </p>
            </div>
          </div>

          {/* CATEGORY FILTERS */}
          <div
            className="insights-filters"
            aria-label="Filter articles by category"
          >
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={
                  activeCategory === category
                    ? "insights-filter active"
                    : "insights-filter"
                }
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
              >
                {category === "All"
                  ? t("insights.categories.all", "All")
                  : category}
              </button>
            ))}
          </div>

          {/* ARTICLE GRID */}
          {filteredArticles.length > 0 ? (
            <div className="insights-article-grid">
              {filteredArticles.map((article) => (
                <article className="insights-article-card" key={article.id}>
                  <div className="insights-card-image">
                    <img
                      src={article.image}
                      alt={article.title}
                      loading="lazy"
                    />

                    <span className="insights-card-category">
                      {article.category}
                    </span>
                  </div>

                  <div className="insights-card-content">
                    <div className="insights-card-meta">
                      <span>{article.date}</span>
                      <span>{article.readTime}</span>
                    </div>

                    <h3>{article.title}</h3>

                    <p>{article.description}</p>

                    <div className="insights-card-footer">
                      <span className="insights-coming-soon">
                        {t("insights.comingSoon", "Article coming soon")}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="insights-empty-state">
              <h3>
                {t("insights.noArticles", "No articles found")}
              </h3>
              <p>
                {t(
                  "insights.noArticlesDescription",
                  "There are currently no articles in this category."
                )}
              </p>
            </div>
          )}

        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="insights-cta">
        <div className="insights-container insights-cta-content">
          <div>
            <span className="insights-cta-label">
              {t("insights.ctaLabel", "LET'S CONNECT")}
            </span>

            <h2>
              {t(
                "insights.ctaTitle",
                "Looking for a reliable operations partner?"
              )}
            </h2>

            <p>
              {t(
                "insights.ctaDescription",
                "Get in touch with our team to learn more about our services and capabilities."
              )}
            </p>
          </div>

          <Link to="/contact" className="insights-cta-button">
            {t("insights.ctaButton", "Contact Us")}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

    </main>
  );
}

export default Insights;
