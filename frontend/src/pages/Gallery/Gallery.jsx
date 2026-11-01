import { useEffect, useState } from "react";
import { FaArrowRight, FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import PageTransition from "../../components/PageTransition";
import "./Gallery.css";

import aquaArabiaCover from "../../assets/images/projects/aqua-arabia/aqua-arabia-cover.png";

import fly01 from "../../assets/images/projects/aqua-arabia/fly-control-01.png";
import fly02 from "../../assets/images/projects/aqua-arabia/fly-control-02.png";
import fly03 from "../../assets/images/projects/aqua-arabia/fly-control-03.png";
import fly04 from "../../assets/images/projects/aqua-arabia/fly-control-04.png";
import fly05 from "../../assets/images/projects/aqua-arabia/fly-control-05.png";
import fly06 from "../../assets/images/projects/aqua-arabia/fly-control-06.png";
import fly07 from "../../assets/images/projects/aqua-arabia/fly-control-07.png";
import fly08 from "../../assets/images/projects/aqua-arabia/fly-control-08.png";
import fly09 from "../../assets/images/projects/aqua-arabia/fly-control-09.png";
import fly10 from "../../assets/images/projects/aqua-arabia/fly-control-10.png";

import spray01 from "../../assets/images/projects/aqua-arabia/spraying-gel-01.png";
import spray02 from "../../assets/images/projects/aqua-arabia/spraying-gel-02.png";
import spray03 from "../../assets/images/projects/aqua-arabia/spraying-gel-03.png";
import spray04 from "../../assets/images/projects/aqua-arabia/spraying-gel-04.png";
import spray05 from "../../assets/images/projects/aqua-arabia/spraying-gel-05.png";
import spray06 from "../../assets/images/projects/aqua-arabia/spraying-gel-06.png";
import spray07 from "../../assets/images/projects/aqua-arabia/spraying-gel-07.png";
import spray08 from "../../assets/images/projects/aqua-arabia/spraying-gel-08.png";
import spray09 from "../../assets/images/projects/aqua-arabia/spraying-gel-09.png";
import spray10 from "../../assets/images/projects/aqua-arabia/spraying-gel-10.png";

import rodent01 from "../../assets/images/projects/aqua-arabia/rodent-wild-pest-01.png";
import rodent02 from "../../assets/images/projects/aqua-arabia/rodent-wild-pest-02.png";
import rodent03 from "../../assets/images/projects/aqua-arabia/rodent-wild-pest-03.png";
import rodent04 from "../../assets/images/projects/aqua-arabia/rodent-wild-pest-04.png";
import rodent05 from "../../assets/images/projects/aqua-arabia/rodent-wild-pest-05.png";
import rodent06 from "../../assets/images/projects/aqua-arabia/rodent-wild-pest-06.png";
import rodent07 from "../../assets/images/projects/aqua-arabia/rodent-wild-pest-07.png";
import rodent08 from "../../assets/images/projects/aqua-arabia/rodent-wild-pest-08.png";
import rodent09 from "../../assets/images/projects/aqua-arabia/rodent-wild-pest-09.png";
import rodent10 from "../../assets/images/projects/aqua-arabia/rodent-wild-pest-10.png";

const aquaArabiaProject = {
    id: "aqua-arabia-qiddiya",
    title: "Aqua Arabia – Qiddiya City",
    arabicTitle: "أكوا أرابيا – مدينة القدية",
    service: "Pest Management Services",
    arabicService: "خدمات مكافحة الآفات",
    location: "Qiddiya City, Saudi Arabia",
    arabicLocation: "مدينة القدية، المملكة العربية السعودية",
    status: "Ongoing",
    arabicStatus: "جاري",
    approach: "Integrated Pest Management",
    arabicApproach: "الإدارة المتكاملة للآفات",
    cover: aquaArabiaCover,

    description:
        "IOC provides integrated pest management services at Aqua Arabia – Qiddiya City, supporting a safe, hygienic and pest-controlled environment through inspection, monitoring, targeted treatments and preventive measures. The project covers flying and crawling insects, rodents, stray animals and other wild pests through an integrated approach.",
    arabicDescription:
        "تقدم IOC خدمات متكاملة لمكافحة الآفات في مشروع أكوا أرابيا – مدينة القدية، بما يدعم توفير بيئة آمنة وصحية وخالية من الآفات من خلال التفتيش والمراقبة والمعالجات المستهدفة والإجراءات الوقائية. ويشمل المشروع مكافحة الحشرات الطائرة والزاحفة والقوارض والحيوانات السائبة والآفات البرية الأخرى من خلال منهج متكامل.",


    activities: [
        "Initial site inspection",
        "Pest activity monitoring",
        "Snake control measures",
        "Cockroach control",
        "Rodent monitoring and control",
        "Bait station management",
        "Insecticidal treatment",
        "Fly control",
        "Fogging operations",
        "Preventive pest management",
    ],
    arabicActivities: [
        "الفحص الأولي للموقع",
        "مراقبة نشاط الآفات",
        "إجراءات مكافحة الثعابين",
        "مكافحة الصراصير",
        "مراقبة ومكافحة القوارض",
        "إدارة محطات الطعوم",
        "المعالجة بالمبيدات الحشرية",
        "مكافحة الذباب",
        "عمليات الرش الضبابي",
        "المكافحة الوقائية للآفات",
    ],


    galleries: [
        {
            title: "Fly Control",
            arabicTitle: "مكافحة الذباب",
            images: [fly01, fly02, fly03, fly04, fly05, fly06, fly07, fly08, fly09, fly10],
        },
        {
            title: "Spraying / Gel Application",
            arabicTitle: "الرش / تطبيق الجل",
            images: [spray01, spray02, spray03, spray04, spray05, spray06, spray07, spray08, spray09, spray10],
        },
        {
            title: "Rodent / Wild Pest Control",
            arabicTitle: "مكافحة القوارض والآفات البرية",
            images: [rodent01, rodent02, rodent03, rodent04, rodent05, rodent06, rodent07, rodent08, rodent09, rodent10],
        },
    ],
};

const projects = [
    aquaArabiaProject,
    // Add the next project object here when its report/images are ready.
];

export default function Gallery() {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const [selectedProject, setSelectedProject] = useState(null);
    const [lightbox, setLightbox] = useState(null);

    const { i18n } = useTranslation();

    const project = projects[currentProjectIndex];

    // Read the active language from react-i18next so the Gallery
    // re-renders immediately when the user switches EN/AR.
    const isArabic = i18n.resolvedLanguage?.startsWith("ar");

    const content = isArabic
        ? {
              heroEyebrow: "أعمالنا",
              heroTitle: "المشاريع الجارية",
              heroText:
                  "استكشف المشاريع والعمليات التي تنفذها IOC في مختلف أنحاء المملكة العربية السعودية.",
              ongoing: "المشاريع الجارية",
              viewProject: "عرض المشروع",
              about: "عن المشروع",
              information: "معلومات المشروع",
              client: "العميل",
              location: "الموقع",
              service: "الخدمة",
              status: "الحالة",
              approach: "المنهجية",
              gallery: "معرض المشروع",
              activities: "الأنشطة الرئيسية",
              back: "إغلاق تفاصيل المشروع",
              ongoingValue: "جاري",
              ipm: "الإدارة المتكاملة للآفات",
              viewImage: "عرض الصورة",
              projectClient: "أكوا أرابيا",
          }
        : {
              heroEyebrow: "OUR WORK",
              heroTitle: "Ongoing Projects",
              heroText:
                  "Explore the projects and operations delivered by IOC across Saudi Arabia.",
              ongoing: "Ongoing Projects",
              viewProject: "View Project",
              about: "About the Project",
              information: "Project Information",
              client: "Client",
              location: "Location",
              service: "Service",
              status: "Status",
              approach: "Approach",
              gallery: "Project Gallery",
              activities: "Key Activities",
              back: "Close Project Details",
              ongoingValue: "Ongoing",
              ipm: "Integrated Pest Management",
              viewImage: "View image",
              projectClient: "Aqua Arabia",
          };

    const openProject = () => {
        setSelectedProject(project);
        window.setTimeout(() => {
            document
                .getElementById("gallery-project-details")
                ?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 80);
    };

    const closeProject = () => {
        setSelectedProject(null);
        setLightbox(null);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const allGalleryImages = selectedProject
        ? selectedProject.galleries.flatMap((group) => group.images)
        : [];

    const openLightbox = (image) => {
        const index = allGalleryImages.indexOf(image);
        setLightbox({ image, index });
    };

    const moveLightbox = (direction) => {
        if (!lightbox || !allGalleryImages.length) return;

        const nextIndex =
            (lightbox.index + direction + allGalleryImages.length) %
            allGalleryImages.length;

        setLightbox({
            image: allGalleryImages[nextIndex],
            index: nextIndex,
        });
    };

    useEffect(() => {
        if (!lightbox) return;

        const handleKeyDown = (event) => {
            if (event.key === "Escape") setLightbox(null);
            if (event.key === "ArrowRight") moveLightbox(1);
            if (event.key === "ArrowLeft") moveLightbox(-1);
        };

        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [lightbox]);

    return (
        <PageTransition>
            <main className="gallery-page">
                <section className="gallery-hero">
                    <div className="gallery-container gallery-hero-content">
                        <span className="gallery-eyebrow">
                            {content.heroEyebrow}
                        </span>

                        <h1>{content.heroTitle}</h1>

                        <p>{content.heroText}</p>
                    </div>
                </section>

                <section className="gallery-projects-section">
                    <div className="gallery-container">
                        <div className="gallery-section-heading">
                            <span className="gallery-eyebrow">
                                {content.ongoing}
                            </span>

                            <h2>{project.title}</h2>

                            <p>
                                {project.service} · {project.location}
                            </p>
                        </div>

                        <div className="gallery-project-card">
                            <button
                                type="button"
                                className="gallery-project-card-main"
                                onClick={openProject}
                            >
                                <span className="gallery-project-card-image">
                                    <img
                                        src={project.cover}
                                        alt={project.title}
                                    />
                                </span>

                                <span className="gallery-project-card-content">
                                    <span className="gallery-project-card-kicker">
                                        {isArabic
                                            ? project.arabicService
                                            : project.service}
                                    </span>

                                    <strong>
                                        {isArabic
                                            ? project.arabicTitle
                                            : project.title}
                                    </strong>

                                    <span className="gallery-project-card-meta">
                                        {isArabic
                                            ? project.arabicLocation
                                            : project.location}
                                    </span>

                                    <span className="gallery-project-card-link">
                                        {content.viewProject}
                                        <FaArrowRight />
                                    </span>
                                </span>
                            </button>

                            <button
                                type="button"
                                className="gallery-project-next"
                                onClick={() => {
                                    const nextIndex =
                                        (currentProjectIndex + 1) % projects.length;

                                    setCurrentProjectIndex(nextIndex);
                                    setSelectedProject(null);
                                    setLightbox(null);
                                    window.scrollTo({
                                        top: 0,
                                        behavior: "smooth",
                                    });
                                }}
                                aria-label="Next project"
                                title="Next project"
                            >
                                <FaArrowRight />
                            </button>
                        </div>
                    </div>
                </section>

                {selectedProject && (
                    <section
                        id="gallery-project-details"
                        className="gallery-project-details"
                    >
                        <div className="gallery-container">
                            <div className="gallery-detail-header">
                                <div>
                                    <span className="gallery-eyebrow">
                                        {content.ongoing}
                                    </span>

                                    <h2>
                                        {isArabic
                                            ? selectedProject.arabicTitle
                                            : selectedProject.title}
                                    </h2>

                                    <p className="gallery-detail-service">
                                        {isArabic
                                            ? selectedProject.arabicService
                                            : selectedProject.service}
                                    </p>
                                </div>

                                <button
                                    type="button"
                                    className="gallery-detail-close"
                                    onClick={closeProject}
                                >
                                    {content.back}
                                </button>
                            </div>

                            <div className="gallery-detail-hero">
                                <img
                                    src={selectedProject.cover}
                                    alt={
                                        isArabic
                                            ? selectedProject.arabicTitle
                                            : selectedProject.title
                                    }
                                />
                            </div>

                            <div className="gallery-detail-description">
                                <span className="gallery-detail-label">
                                    {content.about}
                                </span>

                                <p>
                                    {isArabic
                                        ? selectedProject.arabicDescription
                                        : selectedProject.description}
                                </p>
                            </div>

                            <div className="gallery-info-grid">
                                <div>
                                    <span>{content.client}</span>
                                    <strong>
                                        {isArabic
                                            ? selectedProject.arabicTitle.split(" – ")[0]
                                            : "Aqua Arabia"}
                                    </strong>
                                </div>

                                <div>
                                    <span>{content.location}</span>
                                    <strong>
                                        {isArabic
                                            ? selectedProject.arabicLocation
                                            : selectedProject.location}
                                    </strong>
                                </div>

                                <div>
                                    <span>{content.service}</span>
                                    <strong>
                                        {isArabic
                                            ? selectedProject.arabicService
                                            : selectedProject.service}
                                    </strong>
                                </div>

                                <div>
                                    <span>{content.status}</span>
                                    <strong>
                                        {isArabic
                                            ? selectedProject.arabicStatus
                                            : selectedProject.status}
                                    </strong>
                                </div>

                                <div>
                                    <span>{content.approach}</span>
                                    <strong>
                                        {isArabic
                                            ? selectedProject.arabicApproach
                                            : selectedProject.approach}
                                    </strong>
                                </div>
                            </div>

                            <div className="gallery-detail-section gallery-photo-section">
                                <div className="gallery-detail-heading">
                                    <span className="gallery-detail-label">
                                        {content.gallery}
                                    </span>
                                    <h3>{content.gallery}</h3>
                                </div>

                                {selectedProject.galleries.map((group) => (
                                    <div
                                        className="gallery-photo-group"
                                        key={group.title}
                                    >
                                        <h4>
                                            {isArabic
                                                ? group.arabicTitle
                                                : group.title}
                                        </h4>

                                        <div className="gallery-photo-grid">
                                            {group.images.map((image, index) => (
                                                <button
                                                    type="button"
                                                    className="gallery-photo-card"
                                                    key={`${group.title}-${index}`}
                                                    onClick={() => openLightbox(image)}
                                                >
                                                    <img
                                                        src={image}
                                                        alt={`${group.title} ${index + 1}`}
                                                    />
                                                    <span>View image</span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="gallery-detail-section">
                                <div className="gallery-detail-heading">
                                    <span className="gallery-detail-label">
                                        {content.activities}
                                    </span>
                                    <h3>{content.activities}</h3>
                                </div>

                                <div className="gallery-activities-grid">
                                    {(isArabic
                                        ? selectedProject.arabicActivities
                                        : selectedProject.activities
                                    ).map((item) => (
                                        <div
                                            className="gallery-activity-card"
                                            key={item}
                                        >
                                            <span>✓</span>
                                            <strong>{item}</strong>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            
                        </div>
                    </section>
                )}

                {lightbox && (
                    <div
                        className="gallery-lightbox"
                        role="dialog"
                        aria-modal="true"
                        onClick={() => setLightbox(null)}
                    >
                        <button
                            type="button"
                            className="gallery-lightbox-close"
                            onClick={() => setLightbox(null)}
                            aria-label="Close image"
                        >
                            <FaTimes />
                        </button>

                        <button
                            type="button"
                            className="gallery-lightbox-prev"
                            onClick={(event) => {
                                event.stopPropagation();
                                moveLightbox(-1);
                            }}
                            aria-label="Previous image"
                        >
                            <FaChevronLeft />
                        </button>

                        <img
                            src={lightbox.image}
                            alt={isArabic ? "صور المشروع" : "Project evidence"}
                            onClick={(event) => event.stopPropagation()}
                        />

                        <button
                            type="button"
                            className="gallery-lightbox-next"
                            onClick={(event) => {
                                event.stopPropagation();
                                moveLightbox(1);
                            }}
                            aria-label="Next image"
                        >
                            <FaChevronRight />
                        </button>
                    </div>
                )}
            </main>
        </PageTransition>
    );
}
