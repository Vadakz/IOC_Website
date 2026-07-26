import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
    FaArrowRight,
    FaChevronDown,
    FaClock,
    FaEnvelope,
    FaGlobe,
    FaMapMarkerAlt,
    FaPhoneAlt,
} from "react-icons/fa";
import "./Contact.css";
import contactHero from "../../assets/images/contact-hero.jpg";
import services from "../../data/services";
import PageTransition from "../../components/PageTransition";

const contactCards = [
    {
        id: 1,
        icon: FaMapMarkerAlt,
        title: "Head Office",
        lines: ["Al Murabba, Riyadh 12626"],
        href: "https://www.google.com/maps/place/%D9%85%D8%B1%D9%83%D8%B2+%D8%A7%D9%84%D8%B6%D8%A8%D8%A7%D8%A8%E2%80%AD/@24.6652146,46.7082051,128m/data=!3m1!1e3!4m6!3m5!1s0x3e2f048a1b400001:0xb6b688ddfd833296!8m2!3d24.6654299!4d46.7084972!16s%2Fg%2F11kj904j5k?entry=ttu&g_ep=EgoyMDI2MDcyMi4wIKXMDSoASAFQAw%3D%3D",
    },
    {
        id: 2,
        icon: FaPhoneAlt,
        title: "Customer Service",
        lines: ["+966 9200 51300"],
        href: "tel:+966920051300",
    },
    {
        id: 3,
        icon: FaEnvelope,
        title: "Email",
        lines: ["info@iocl.sa"],
        href: "mailto:info@iocl.sa",
    },
    {
        id: 4,
        icon: FaClock,
        title: "Working Hours",
        lines: ["Sunday – Thursday", "8:00 AM – 5:00 PM"],
    },
];

const faqs = [
    {
        id: 1,
        question: "How quickly will your team respond?",
        answer:
            "Our team normally responds to enquiries within one business day.",
    },
    {
        id: 2,
        question: "Which locations do you serve?",
        answer:
            "International Operations Company provides services across Saudi Arabia based on project scope and operational requirements.",
    },
    {
        id: 3,
        question: "Can I request a quotation online?",
        answer:
            "Yes. Complete the enquiry form with your service requirements and our team will contact you.",
    },
    {
        id: 4,
        question: "Do you provide customised service contracts?",
        answer:
            "Yes. We develop customised service solutions based on site size, service frequency, manpower needs and operational requirements.",
    },
];

export default function Contact() {
    const { t, i18n } = useTranslation();
    const translatedCards = t("contact.cards", { returnObjects: true });
    const isArabic = i18n.resolvedLanguage?.startsWith("ar");
    const localizedCards = contactCards.map((card, index) => ({
        ...card,
        ...translatedCards[index],
    }));

    const [formData, setFormData] = useState({
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
    });

    const [status, setStatus] = useState("");
    const [activeFaq, setActiveFaq] = useState(null);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((currentData) => ({
            ...currentData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        setStatus(
            t("contact.success")
        );

        setFormData({
            fullName: "",
            companyName: "",
            email: "",
            phone: "",
            service: "",
            message: "",
        });
    };

    const toggleFaq = (faqId) => {
        setActiveFaq((currentFaq) =>
            currentFaq === faqId ? null : faqId
        );
    };

    const scrollToForm = () => {
        const formSection = document.getElementById("contact-form");

        if (formSection) {
            formSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };


    return (

        <PageTransition>


            <main className="contact-page">
                <section
                    className="contact-hero"
                    style={{
                        backgroundImage: `url(${contactHero})`,
                    }}
                >

                    <div className="contact-page-container contact-hero-content">
                        <span className="contact-page-eyebrow">
                            {t("contact.heroLabel")}
                        </span>

                        <h1>
                            {t("contact.heroTitle")}
                            <span>{t("contact.heroAccent")}</span>
                        </h1>

                        <p>
                            {t("contact.heroDescription")}
                        </p>

                        <div className="contact-hero-actions">
                            <button
                                type="button"
                                className="contact-primary-button"
                                onClick={scrollToForm}
                            >
                                {t("contact.sendEnquiry")}
                                <FaArrowRight />
                            </button>

                            <a
                                href="tel:+966920051300"
                                className="contact-secondary-button"
                            >
                                {t("contact.callTeam")}
                            </a>
                        </div>
                    </div>
                </section>

                <section className="contact-cards-section">
                    <div className="contact-page-container">
                        <div className="contact-section-heading">
                            <span className="contact-page-eyebrow">
                                {t("contact.getInTouch")}
                            </span>

                            <h2>{t("contact.reachTitle")}</h2>

                            <p>
                                {t("contact.reachDescription")}
                            </p>
                        </div>

                        <div className="contact-cards-grid">
                            {localizedCards.map((card) => {
                                const Icon = card.icon;

                                const cardContent = (
                                    <>
                                        <span className="contact-card-icon">
                                            <Icon />
                                        </span>

                                        <h3>{card.title}</h3>

                                        {card.lines.map((line) => (
                                            <p key={line}>{line}</p>
                                        ))}
                                    </>
                                );

                                if (card.href) {
                                    return (
                                        <a
                                            key={card.id}
                                            href={card.href}
                                            target={
                                                card.href.startsWith("http")
                                                    ? "_blank"
                                                    : undefined
                                            }
                                            rel={
                                                card.href.startsWith("http")
                                                    ? "noreferrer"
                                                    : undefined
                                            }
                                            className="contact-info-card"
                                        >
                                            {cardContent}
                                        </a>
                                    );
                                }

                                return (
                                    <div
                                        key={card.id}
                                        className="contact-info-card"
                                    >
                                        {cardContent}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <section
                    className="contact-form-section"
                    id="contact-form"
                >
                    <div className="contact-page-container">
                        <div className="contact-form-layout">
                            <div className="contact-form-visual">
                                <div className="contact-form-visual-overlay" />

                                <div className="contact-form-visual-content">
                                    <span className="contact-page-eyebrow">
                                        {t("contact.supportLabel")}
                                    </span>

                                    <h2>
                                        {t("contact.supportTitle")}
                                    </h2>

                                    <p>
                                        {t("contact.supportDescription")}
                                    </p>

                                    <div className="contact-visual-feature">
                                        <FaGlobe />

                                        <span>
                                            {t("contact.coverageFeature")}
                                        </span>
                                    </div>

                                    <div className="contact-visual-feature">
                                        <FaClock />

                                        <span>
                                            {t("contact.responsiveFeature")}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="contact-form-panel">
                                <div className="contact-form-heading">
                                    <span className="contact-page-eyebrow">
                                        {t("contact.formLabel")}
                                    </span>

                                    <h2>{t("contact.formTitle")}</h2>

                                    <p>
                                        {t("contact.formDescription")}
                                    </p>
                                </div>

                                <form
                                    className="contact-form"
                                    onSubmit={handleSubmit}
                                >
                                    <div className="contact-form-row">
                                        <div className="contact-form-group">
                                            <label htmlFor="fullName">
                                                {t("contact.fullName")}
                                            </label>

                                            <input
                                                type="text"
                                                id="fullName"
                                                name="fullName"
                                                value={formData.fullName}
                                                onChange={handleChange}
                                                placeholder={t("contact.fullNamePlaceholder")}
                                                required
                                            />
                                        </div>

                                        <div className="contact-form-group">
                                            <label htmlFor="companyName">
                                                {t("contact.companyName")}
                                            </label>

                                            <input
                                                type="text"
                                                id="companyName"
                                                name="companyName"
                                                value={formData.companyName}
                                                onChange={handleChange}
                                                placeholder={t("contact.companyPlaceholder")}
                                            />
                                        </div>
                                    </div>

                                    <div className="contact-form-row">
                                        <div className="contact-form-group">
                                            <label htmlFor="email">
                                                {t("contact.email")}
                                            </label>

                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder={t("contact.emailPlaceholder")}
                                                required
                                            />
                                        </div>

                                        <div className="contact-form-group">
                                            <label htmlFor="phone">
                                                {t("contact.phone")}
                                            </label>

                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder={t("contact.phonePlaceholder")}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="contact-form-group">
                                        <label htmlFor="service">
                                            {t("contact.service")}
                                        </label>

                                        <select
                                            id="service"
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">
                                                {t("contact.selectService")}
                                            </option>

                                            {services.map((service) => (
                                                <option
                                                    key={service.id}
                                                    value={service.title}
                                                >
                                                    {isArabic
                                                        ? t(`serviceItems.${service.slug}.title`)
                                                        : service.title}
                                                </option>
                                            ))}

                                            <option value="Other">
                                                {t("contact.other")}
                                            </option>
                                        </select>
                                    </div>

                                    <div className="contact-form-group">
                                        <label htmlFor="message">
                                            {t("contact.message")}
                                        </label>

                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder={t("contact.messagePlaceholder")}
                                            rows="6"
                                            required
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="contact-submit-button"
                                    >
                                        {t("contact.submit")}
                                        <FaArrowRight />
                                    </button>

                                    {status && (
                                        <p
                                            className="contact-form-status"
                                            role="status"
                                        >
                                            {status}
                                        </p>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </section>



            </main>
        </PageTransition>
    );
}
