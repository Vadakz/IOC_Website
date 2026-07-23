import { useState } from "react";
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
        lines: ["Riyadh", "Kingdom of Saudi Arabia"],
        href: "https://maps.google.com/?q=Riyadh+Saudi+Arabia",
    },
    {
        id: 2,
        icon: FaPhoneAlt,
        title: "Phone",
        lines: ["+966 00 000 0000"],
        href: "tel:+966000000000",
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
            "Thank you. Your enquiry has been recorded. Our team will contact you shortly."
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
                            Contact International Operations Company
                        </span>

                        <h1>
                            Let&apos;s Build Better
                            <span>Operations Together.</span>
                        </h1>

                        <p>
                            Speak with our team about integrated facility
                            management, environmental services and operational
                            solutions across Saudi Arabia.
                        </p>

                        <div className="contact-hero-actions">
                            <button
                                type="button"
                                className="contact-primary-button"
                                onClick={scrollToForm}
                            >
                                Send an Enquiry
                                <FaArrowRight />
                            </button>

                            <a
                                href="tel:+966000000000"
                                className="contact-secondary-button"
                            >
                                Call Our Team
                            </a>
                        </div>
                    </div>
                </section>

                <section className="contact-cards-section">
                    <div className="contact-page-container">
                        <div className="contact-section-heading">
                            <span className="contact-page-eyebrow">
                                Get in Touch
                            </span>

                            <h2>Choose the easiest way to reach us.</h2>

                            <p>
                                Our team is available to support enquiries,
                                quotations, service requests and business
                                partnerships.
                            </p>
                        </div>

                        <div className="contact-cards-grid">
                            {contactCards.map((card) => {
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
                                        Reliable Support
                                    </span>

                                    <h2>
                                        Solutions designed around your
                                        operations.
                                    </h2>

                                    <p>
                                        Share your requirements with us and our
                                        team will recommend the right service
                                        solution for your business.
                                    </p>

                                    <div className="contact-visual-feature">
                                        <FaGlobe />

                                        <span>
                                            Nationwide operational coverage
                                        </span>
                                    </div>

                                    <div className="contact-visual-feature">
                                        <FaClock />

                                        <span>
                                            Responsive customer support
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="contact-form-panel">
                                <div className="contact-form-heading">
                                    <span className="contact-page-eyebrow">
                                        Send an Enquiry
                                    </span>

                                    <h2>Tell us how we can assist you.</h2>

                                    <p>
                                        Complete the form and our team will
                                        contact you as soon as possible.
                                    </p>
                                </div>

                                <form
                                    className="contact-form"
                                    onSubmit={handleSubmit}
                                >
                                    <div className="contact-form-row">
                                        <div className="contact-form-group">
                                            <label htmlFor="fullName">
                                                Full Name
                                            </label>

                                            <input
                                                type="text"
                                                id="fullName"
                                                name="fullName"
                                                value={formData.fullName}
                                                onChange={handleChange}
                                                placeholder="Enter your full name"
                                                required
                                            />
                                        </div>

                                        <div className="contact-form-group">
                                            <label htmlFor="companyName">
                                                Company Name
                                            </label>

                                            <input
                                                type="text"
                                                id="companyName"
                                                name="companyName"
                                                value={formData.companyName}
                                                onChange={handleChange}
                                                placeholder="Enter company name"
                                            />
                                        </div>
                                    </div>

                                    <div className="contact-form-row">
                                        <div className="contact-form-group">
                                            <label htmlFor="email">
                                                Email Address
                                            </label>

                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="name@company.com"
                                                required
                                            />
                                        </div>

                                        <div className="contact-form-group">
                                            <label htmlFor="phone">
                                                Phone Number
                                            </label>

                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="+966"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="contact-form-group">
                                        <label htmlFor="service">
                                            Interested Service
                                        </label>

                                        <select
                                            id="service"
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">
                                                Select a service
                                            </option>

                                            {services.map((service) => (
                                                <option
                                                    key={service.id}
                                                    value={service.title}
                                                >
                                                    {service.title}
                                                </option>
                                            ))}

                                            <option value="Other">
                                                Other
                                            </option>
                                        </select>
                                    </div>

                                    <div className="contact-form-group">
                                        <label htmlFor="message">
                                            Message
                                        </label>

                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Tell us about your requirements"
                                            rows="6"
                                            required
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="contact-submit-button"
                                    >
                                        Send Enquiry
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