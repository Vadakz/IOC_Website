import { useState } from "react";

import { useTranslation } from "react-i18next";



import {

    FaArrowRight,

    FaClock,

    FaEnvelope,

    FaGlobe,

    FaMapMarkerAlt,

} from "react-icons/fa";



import "./Contact.css";



import contactHero from "../../assets/images/contact-hero.jpg";

import services from "../../data/services";

import PageTransition from "../../components/PageTransition";





/* ==========================================================

   WASTE MANAGEMENT IMAGES

========================================================== */



import wasteContainerImage from "../../assets/images/services/waste-management/100-ltr-plastic-container.png";

import sixCubicYardRelImage from "../../assets/images/services/waste-management/6-cubic-yard-rel.png";

import twelveCyLuggerImage from "../../assets/images/services/waste-management/12-cy-lugger.png";

import twentyCyRolloffImage from "../../assets/images/services/waste-management/20-cy-rolloff.png";

import twentyThreeCyRolloffImage from "../../assets/images/services/waste-management/23-cy-rolloff.png";



import transportCompactorImage from "../../assets/images/services/waste-management/transport-compactor.png";

import mobileCompactorImage from "../../assets/images/services/waste-management/mobile-compactor.png";

import hookLiftCompactorImage from "../../assets/images/services/waste-management/20-cy-hook-lift-compactor.png";

import cabinetCompactorImage from "../../assets/images/services/waste-management/2y-cabinet-compactor.png";



import sewage18Image from "../../assets/images/services/waste-management/18-sewage-disposal.png";

import sewage32Image from "../../assets/images/services/waste-management/32-sewage-disposal.png";

/* ==========================================================

  pest control images

========================================================== */


import ratTrapImage from "../../assets/images/services/pest-control/rat-trap.png";
import catTrapImage from "../../assets/images/services/pest-control/cat-trap.png";
import ulvMachineImage from "../../assets/images/services/pest-control/ulv-machine.png";
import gloriaMachineImage from "../../assets/images/services/pest-control/gloria-machine.png";
import foggingMachineImage from "../../assets/images/services/pest-control/fogging-machine.png";





/* ==========================================================

   CONTACT INFORMATION CARDS

========================================================== */



const contactCards = [

    {

        id: 1,

        icon: FaMapMarkerAlt,

        title: "Head Office",

        lines: ["Al Murabba, Riyadh 12626"],

        href: "https://www.google.com/maps/place/%D9%85%D8%B1%D9%83%D8%B2+%D8%A7%D9%84%D8%B6%D8%A8%D8%A7%D8%A8%E2%80%AD/@24.6652146,46.7082051,128m/data=!3m1!1e3!4m6!3m5!1s0x3e2f048a1b400001:0xb6b688ddfd833296!8m2!3d24.6654299!4d46.7084972!16s%2Fg%2F11kj904j5k?entry=ttu",

    },

    {

        id: 2,

        icon: FaMapMarkerAlt,

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





/* ==========================================================

   FAQ

========================================================== */



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





/* ==========================================================

   WASTE MANAGEMENT CATEGORIES

========================================================== */



const wasteManagementCategories = {

    containers: {

        title: "Containers",

        arabicTitle: "الحاويات",



        items: [

            {

                id: "100-ltr-plastic-container",

                number: "01",

                title: "100 Ltr Plastic Container",

                arabicTitle: "حاوية بلاستيكية سعة 100 لتر",

                image: wasteContainerImage,

            },

            {

                id: "6-cubic-yard-rel",

                number: "02",

                title: "6 Cubic Yard REL",

                arabicTitle: "حاوية REL سعة 6 ياردات مكعبة",

                image: sixCubicYardRelImage,

            },

            {

                id: "12-cy-lugger",

                number: "03",

                title: "12 CY Lugger",

                arabicTitle: "حاوية Lugger سعة 12 ياردة مكعبة",

                image: twelveCyLuggerImage,

            },

            {

                id: "20-cy-rolloff",

                number: "04",

                title: "20 CY ROLLOFF",

                arabicTitle: "حاوية ROLLOFF سعة 20 ياردة مكعبة",

                image: twentyCyRolloffImage,

            },

            {

                id: "23-cy-rolloff",

                number: "05",

                title: "23 CY ROLLOFF",

                arabicTitle: "حاوية ROLLOFF سعة 23 ياردة مكعبة",

                image: twentyThreeCyRolloffImage,

            },

        ],

    },



    fleetCompactors: {

        title: "Fleet & Compactors",

        arabicTitle: "الأسطول والضواغط",



        items: [

            {

                id: "transport-compactor",

                number: "06",

                title: "Transport Compactor",

                arabicTitle: "ضاغط نقل النفايات",

                image: transportCompactorImage,

            },

            {

                id: "mobile-compactor",

                number: "07",

                title: "Mobile Compactor",

                arabicTitle: "ضاغط نفايات متنقل",

                image: mobileCompactorImage,

            },

            {

                id: "20-cy-hook-lift-compactor",

                number: "08",

                title: "20 CY Hook Lift Compactor",

                arabicTitle: "ضاغط Hook Lift سعة 20 ياردة مكعبة",

                image: hookLiftCompactorImage,

            },

            {

                id: "2y-cabinet-compactor",

                number: "09",

                title: "2 Y Cabinet Compactor",

                arabicTitle: "ضاغط خزانة سعة 2 ياردة",

                image: cabinetCompactorImage,

            },

        ],

    },



    sewage: {

        title: "Sewage Disposal",

        arabicTitle: "التخلص من مياه الصرف الصحي",



        items: [

            {

                id: "18-sewage-disposal",

                number: "10",

                title: "18 CY Sewage Disposal",

                arabicTitle:

                    "التخلص من مياه الصرف الصحي سعة 18 ياردة مكعبة",

                image: sewage18Image,

            },

            {

                id: "32-sewage-disposal",

                number: "11",

                title: "32 CY Sewage Disposal",

                arabicTitle:

                    "التخلص من مياه الصرف الصحي سعة 32 ياردة مكعبة",

                image: sewage32Image,

            },

        ],

    },

};





/* ==========================================================
   NON-WASTE SERVICE SELECTIONS
========================================================== */

const serviceSelectionOptions = {
    "PestControl": {
        title: "Pest Management",
        arabicTitle: "إدارة مكافحة الآفات",
        items: [
            {
                id: "rat-trap",
                number: "01",
                title: "Rat Trap",
                arabicTitle: "مصيدة الفئران",
                image: ratTrapImage,
            },
            {
                id: "cat-trap",
                number: "02",
                title: "Cat Trap",
                arabicTitle: "مصيدة القطط",
                image: catTrapImage,
            },
            {
                id: "ulv-machine",
                number: "03",
                title: "ULV Machine",
                arabicTitle: "جهاز ULV",
                image: ulvMachineImage,
            },
            {
                id: "gloria-machine",
                number: "04",
                title: "Gloria Machine",
                arabicTitle: "جهاز Gloria",
                image: gloriaMachineImage,
            },
            {
                id: "fogging-machine",
                number: "05",
                title: "Fogging Machine",
                arabicTitle: "جهاز الضباب",
                image: foggingMachineImage,
            },
        ],
    },

    "Janitorial": {
        title: "Janitorial Services",
        arabicTitle: "خدمات النظافة",
        items: [
            { id: "general-cleaning", number: "01", title: "General Cleaning", arabicTitle: "التنظيف العام" },
            { id: "deep-cleaning", number: "02", title: "Deep Cleaning", arabicTitle: "التنظيف العميق" },
            { id: "washroom-hygiene", number: "03", title: "Washroom Hygiene", arabicTitle: "نظافة دورات المياه" },
            { id: "floor-carpet-care", number: "04", title: "Floor & Carpet Care", arabicTitle: "العناية بالأرضيات والسجاد" },
            { id: "window-cleaning", number: "05", title: "Window Cleaning", arabicTitle: "تنظيف النوافذ" },
        ],
    },

    /*
     * Soft Facility Management includes the integrated MEP & HVAC
     * services. MEP is intentionally NOT a separate service.
     */
    "Soft-Facility-Management": {
        title: "Soft Facility Management",
        arabicTitle: "إدارة المرافق الناعمة",
        items: [
            { id: "housekeeping", number: "01", title: "Housekeeping", arabicTitle: "خدمات التدبير والنظافة" },
            { id: "landscaping", number: "02", title: "Landscaping", arabicTitle: "تنسيق الحدائق" },
            { id: "reception-front-office", number: "03", title: "Reception & Front Office", arabicTitle: "الاستقبال والمكاتب الأمامية" },
            { id: "support-services", number: "04", title: "Support Services", arabicTitle: "الخدمات المساندة" },
            { id: "workplace-services", number: "05", title: "Workplace Services", arabicTitle: "خدمات بيئة العمل" },

            { id: "mechanical-systems", number: "06", title: "Mechanical Systems", arabicTitle: "الأنظمة الميكانيكية" },
            { id: "electrical-systems", number: "07", title: "Electrical Systems", arabicTitle: "الأنظمة الكهربائية" },
            { id: "plumbing-systems", number: "08", title: "Plumbing Systems", arabicTitle: "أنظمة السباكة" },
            { id: "hvac-systems", number: "09", title: "HVAC Systems", arabicTitle: "أنظمة التكييف والتهوية" },
            { id: "preventive-maintenance", number: "10", title: "Preventive Maintenance", arabicTitle: "الصيانة الوقائية" },
            { id: "technical-support", number: "11", title: "Technical Support", arabicTitle: "الدعم الفني" },
        ],
    },
};


/* ==========================================================

   CONTACT COMPONENT

========================================================== */



export default function Contact() {

    const { t, i18n } = useTranslation();



    const isArabic = i18n.resolvedLanguage?.startsWith("ar");





    /* ======================================================

       CONTACT CARDS

    ====================================================== */



    const translatedCards = t("contact.cards", {

        returnObjects: true,

    });



    const localizedCards = contactCards.map((card, index) => ({

        ...card,

        ...(translatedCards?.[index] || {}),

    }));





    /* ======================================================

       FORM STATE

    ====================================================== */



    const [formData, setFormData] = useState({

        fullName: "",

        companyName: "",

        email: "",

        phone: "",



        service: "",

        serviceSlug: "",



        selectedEquipment: [],



        equipmentQuantities: {},



        message: "",

    });





    /* ======================================================

       OTHER STATES

    ====================================================== */



    const [status, setStatus] = useState("");



    const [loading, setLoading] = useState(false);



    const [activeFaq, setActiveFaq] = useState(null);



    const [wastePopupOpen, setWastePopupOpen] = useState(false);



    const [selectedWasteCategory, setSelectedWasteCategory] =

        useState("containers");

    const [servicePopupOpen, setServicePopupOpen] = useState(false);
    const [selectedServiceItems, setSelectedServiceItems] = useState([]);
    const [serviceItemQuantities, setServiceItemQuantities] = useState({});





    /* ======================================================

       NORMAL FORM CHANGE

    ====================================================== */



    const handleChange = (event) => {

        const { name, value } = event.target;



        setFormData((currentData) => ({

            ...currentData,

            [name]: value,

        }));

    };





    /* ======================================================

       SERVICE CHANGE

    ====================================================== */



    const contactServiceSlugs = [
        "WasteManagement",
        "PestControl",
        "Janitorial",
        "Soft-Facility-Management",
    ];

    const contactServices = services.filter((service) =>
        contactServiceSlugs.includes(service.slug)
    );

    const handleServiceChange = (event) => {
        const { value } = event.target;
        const selectedService = services.find((service) => service.title === value);
        const serviceSlug = selectedService?.slug || (value === "Other" ? "Other" : "");

        setFormData((currentData) => ({
            ...currentData,
            service: value,
            serviceSlug,
            selectedEquipment: [],
            equipmentQuantities: {},
        }));

        setSelectedServiceItems([]);
        setServiceItemQuantities({});
        setStatus("");

        if (serviceSlug === "WasteManagement") {
            setSelectedWasteCategory("containers");
            setWastePopupOpen(true);
            setServicePopupOpen(false);
            return;
        }

        setSelectedWasteCategory("containers");
        setWastePopupOpen(false);
        setServicePopupOpen(Boolean(serviceSelectionOptions[serviceSlug]));
    };



    const handleWasteCategoryChange = (event) => {

        const category = event.target.value;



        setSelectedWasteCategory(category);

    };





    /* ======================================================

       EQUIPMENT SELECTION

    ====================================================== */



    const toggleWasteEquipment = (equipmentId) => {

        setFormData((currentData) => {

            const isSelected = currentData.selectedEquipment.includes(
                equipmentId
            );

            if (isSelected) {
                const nextQuantities = {
                    ...currentData.equipmentQuantities,
                };

                delete nextQuantities[equipmentId];

                return {
                    ...currentData,
                    selectedEquipment: currentData.selectedEquipment.filter(
                        (id) => id !== equipmentId
                    ),
                    equipmentQuantities: nextQuantities,
                };
            }

            return {
                ...currentData,
                selectedEquipment: [
                    ...currentData.selectedEquipment,
                    equipmentId,
                ],
                equipmentQuantities: {
                    ...currentData.equipmentQuantities,
                    [equipmentId]: 1,
                },
            };
        });
    };



    const handleQuantityChange = (equipmentId, value) => {

        const quantity = Math.max(1, Number(value) || 1);

        setFormData((currentData) => ({
            ...currentData,
            equipmentQuantities: {
                ...currentData.equipmentQuantities,
                [equipmentId]: quantity,
            },
        }));
    };



    const handleWasteSelectionDone = () => {

        if (formData.selectedEquipment.length === 0) {
            setStatus(
                isArabic
                    ? "يرجى اختيار عنصر واحد على الأقل."
                    : "Please select at least one item."
            );
            return;
        }

        setStatus("");
        setWastePopupOpen(false);
    };



    /* ======================================================
       NON-WASTE SERVICE SELECTION
    ====================================================== */

    const currentServiceSelection = serviceSelectionOptions[formData.serviceSlug];

    const toggleServiceItem = (itemId) => {
        setSelectedServiceItems((currentItems) => {
            if (currentItems.includes(itemId)) {
                setServiceItemQuantities((currentQuantities) => {
                    const next = { ...currentQuantities };
                    delete next[itemId];
                    return next;
                });
                return currentItems.filter((id) => id !== itemId);
            }
            setServiceItemQuantities((currentQuantities) => ({ ...currentQuantities, [itemId]: 1 }));
            return [...currentItems, itemId];
        });
    };

    const handleServiceItemQuantityChange = (itemId, value) => {
        const quantity = Math.max(1, Number(value) || 1);
        setServiceItemQuantities((currentQuantities) => ({ ...currentQuantities, [itemId]: quantity }));
    };

    const handleServiceSelectionDone = () => {
        if (selectedServiceItems.length === 0) {
            setStatus(isArabic ? "يرجى اختيار عنصر واحد على الأقل." : "Please select at least one item.");
            return;
        }
        setStatus("");
        setServicePopupOpen(false);
    };

    const selectedServiceDetails = currentServiceSelection
        ? currentServiceSelection.items.filter((item) => selectedServiceItems.includes(item.id))
        : [];


    /* ======================================================
       SUBMIT
    ====================================================== */



    const handleSubmit = async (event) => {
        event.preventDefault();

        setLoading(true);
        setStatus(isArabic ? "جارٍ الإرسال..." : "Submitting...");

        try {
            const selectedWasteItems = Object.values(wasteManagementCategories)
                .flatMap((category) => category.items)
                .filter((item) => formData.selectedEquipment.includes(item.id))
                .map((item) => ({
                    id: item.id,
                    number: item.number,
                    title: item.title,
                    arabicTitle: item.arabicTitle,
                    quantity: formData.equipmentQuantities[item.id] || 1,
                    image: item.image,
                }));

            const selectedNonWasteItems = selectedServiceDetails.map((item) => ({
                id: item.id,
                number: item.number,
                title: item.title,
                arabicTitle: item.arabicTitle,
                quantity: serviceItemQuantities[item.id] || 1,
                image: item.image || null,
            }));

            const allSelectedItems = [
                ...selectedWasteItems,
                ...selectedNonWasteItems,
            ];

            const submitData = new FormData();

            submitData.append("name", formData.fullName.trim());
            submitData.append("company", formData.companyName.trim());
            submitData.append("email", formData.email.trim());
            submitData.append("phone", formData.phone.trim());
            submitData.append("service", formData.service);
            submitData.append("serviceSlug", formData.serviceSlug);
            submitData.append("message", formData.message.trim());

            submitData.append(
                "selectedItems",
                JSON.stringify(
                    allSelectedItems.map((item) => ({
                        id: item.id,
                        number: item.number,
                        title: item.title,
                        arabicTitle: item.arabicTitle,
                        quantity: item.quantity,
                    }))
                )
            );

            for (const item of allSelectedItems) {
                if (!item.image) continue;

                try {
                    const imageResponse = await fetch(item.image);

                    if (!imageResponse.ok) {
                        console.warn(`Unable to load image for ${item.id}`);
                        continue;
                    }

                    const blob = await imageResponse.blob();
                    const extension = blob.type.split("/")[1] || "jpg";

                    const file = new File(
                        [blob],
                        `${item.id}.${extension}`,
                        { type: blob.type }
                    );

                    submitData.append("itemImages", file);
                } catch (imageError) {
                    console.warn(
                        `Image upload skipped for ${item.id}:`,
                        imageError
                    );
                }
            }

            const response = await fetch(
                "http://localhost:5000/api/contact",
                {
                    method: "POST",
                    body: submitData,
                }
            );

            const data = await response.json();

            if (response.ok) {
                setStatus(
                    isArabic
                        ? "شكراً لك. تم إرسال استفسارك بنجاح."
                        : "Thank you. Your enquiry has been submitted successfully."
                );

                setFormData({
                    fullName: "",
                    companyName: "",
                    email: "",
                    phone: "",
                    service: "",
                    serviceSlug: "",
                    selectedEquipment: [],
                    equipmentQuantities: {},
                    message: "",
                });

                setWastePopupOpen(false);
                setServicePopupOpen(false);
                setSelectedServiceItems([]);
                setServiceItemQuantities({});
                setSelectedWasteCategory("containers");
            } else {
                setStatus(
                    data.message ||
                        (isArabic
                            ? "تعذر إرسال الاستفسار."
                            : "Unable to submit the enquiry.")
                );
            }
        } catch (error) {
            console.error("Contact form submission error:", error);

            setStatus(
                isArabic
                    ? "تعذر الاتصال بخادم النظام."
                    : "Unable to connect to the backend server."
            );
        } finally {
            setLoading(false);
        }
    };







    /* ======================================================

       FAQ

    ====================================================== */



    const toggleFaq = (faqId) => {

        setActiveFaq((currentFaq) =>

            currentFaq === faqId

                ? null

                : faqId

        );

    };





    /* ======================================================

       SCROLL TO FORM

    ====================================================== */



    const scrollToForm = () => {

        const formSection =

            document.getElementById("contact-form");



        if (formSection) {

            formSection.scrollIntoView({

                behavior: "smooth",

                block: "start",

            });

        }

    };





    /* ======================================================

       CURRENT WASTE CATEGORY

    ====================================================== */





    const currentWasteCategory =

        wasteManagementCategories[

        selectedWasteCategory

        ];





    /* ======================================================

       SELECTED WASTE EQUIPMENT

    ====================================================== */



    const selectedWasteEquipment =

        Object.values(wasteManagementCategories)

            .flatMap((category) => category.items)

            .filter((equipment) =>

                formData.selectedEquipment.includes(

                    equipment.id

                )

            );





    /* ======================================================

       RENDER

    ====================================================== */



    return (

        <PageTransition>



            <main className="contact-page">





                {/* ==================================================

                    HERO

                ================================================== */}



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



                            <span>

                                {t("contact.heroAccent")}

                            </span>

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





                {/* ==================================================

                    CONTACT CARDS

                ================================================== */}



                <section className="contact-cards-section">



                    <div className="contact-page-container">



                        <div className="contact-section-heading">



                            <span className="contact-page-eyebrow">

                                {t("contact.getInTouch")}

                            </span>





                            <h2>

                                {t("contact.reachTitle")}

                            </h2>





                            <p>

                                {t(

                                    "contact.reachDescription"

                                )}

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





                                        <h3>

                                            {card.title}

                                        </h3>





                                        {card.lines.map(

                                            (line) => (

                                                <p key={line}>

                                                    {line}

                                                </p>

                                            )

                                        )}

                                    </>

                                );





                                if (card.href) {

                                    return (

                                        <a

                                            key={card.id}

                                            href={card.href}

                                            target={

                                                card.href.startsWith(

                                                    "http"

                                                )

                                                    ? "_blank"

                                                    : undefined

                                            }

                                            rel={

                                                card.href.startsWith(

                                                    "http"

                                                )

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





                {/* ==================================================

                    CONTACT FORM

                ================================================== */}



                <section

                    className="contact-form-section"

                    id="contact-form"

                >



                    <div className="contact-page-container">



                        <div className="contact-form-layout">





                            {/* ==========================================

                                LEFT VISUAL

                            ========================================== */}



                            <div className="contact-form-visual">



                                <div className="contact-form-visual-overlay" />





                                <div className="contact-form-visual-content">



                                    <span className="contact-page-eyebrow">

                                        {t(

                                            "contact.supportLabel"

                                        )}

                                    </span>





                                    <h2>

                                        {t(

                                            "contact.supportTitle"

                                        )}

                                    </h2>





                                    <p>

                                        {t(

                                            "contact.supportDescription"

                                        )}

                                    </p>





                                    <div className="contact-visual-feature">



                                        <FaGlobe />



                                        <span>

                                            {t(

                                                "contact.coverageFeature"

                                            )}

                                        </span>



                                    </div>





                                    <div className="contact-visual-feature">



                                        <FaClock />



                                        <span>

                                            {t(

                                                "contact.responsiveFeature"

                                            )}

                                        </span>



                                    </div>



                                </div>



                            </div>





                            {/* ==========================================

                                RIGHT FORM

                            ========================================== */}



                            <div className="contact-form-panel">



                                <div className="contact-form-heading">



                                    <span className="contact-page-eyebrow">

                                        {t(

                                            "contact.formLabel"

                                        )}

                                    </span>





                                    <h2>

                                        {t(

                                            "contact.formTitle"

                                        )}

                                    </h2>





                                    <p>

                                        {t(

                                            "contact.formDescription"

                                        )}

                                    </p>



                                </div>





                                <form

                                    className="contact-form"

                                    onSubmit={handleSubmit}

                                >





                                    {/* ==================================

                                        NAME / COMPANY

                                    ================================== */}



                                    <div className="contact-form-row">



                                        <div className="contact-form-group">



                                            <label htmlFor="fullName">

                                                {t(

                                                    "contact.fullName"

                                                )}

                                            </label>





                                            <input

                                                type="text"

                                                id="fullName"

                                                name="fullName"

                                                value={

                                                    formData.fullName

                                                }

                                                onChange={

                                                    handleChange

                                                }

                                                placeholder={t(

                                                    "contact.fullNamePlaceholder"

                                                )}

                                                required

                                            />



                                        </div>





                                        <div className="contact-form-group">



                                            <label htmlFor="companyName">

                                                {t(

                                                    "contact.companyName"

                                                )}

                                            </label>





                                            <input

                                                type="text"

                                                id="companyName"

                                                name="companyName"

                                                value={

                                                    formData.companyName

                                                }

                                                onChange={

                                                    handleChange

                                                }

                                                placeholder={t(

                                                    "contact.companyPlaceholder"

                                                )}

                                            />



                                        </div>



                                    </div>





                                    {/* ==================================

                                        EMAIL / PHONE

                                    ================================== */}



                                    <div className="contact-form-row">



                                        <div className="contact-form-group">



                                            <label htmlFor="email">

                                                {t(

                                                    "contact.email"

                                                )}

                                            </label>





                                            <input

                                                type="email"

                                                id="email"

                                                name="email"

                                                value={

                                                    formData.email

                                                }

                                                onChange={

                                                    handleChange

                                                }

                                                placeholder={t(

                                                    "contact.emailPlaceholder"

                                                )}

                                                required

                                            />



                                        </div>





                                        <div className="contact-form-group">



                                            <label htmlFor="phone">

                                                {t(

                                                    "contact.phone"

                                                )}

                                            </label>





                                            <input

                                                type="tel"

                                                id="phone"

                                                name="phone"

                                                value={

                                                    formData.phone

                                                }

                                                onChange={

                                                    handleChange

                                                }

                                                placeholder={t(

                                                    "contact.phonePlaceholder"

                                                )}

                                                required

                                            />



                                        </div>



                                    </div>





                                    {/* ==================================

                                        SERVICE

                                    ================================== */}



                                    <div className="contact-form-group">



                                        <label htmlFor="service">

                                            {t(

                                                "contact.service"

                                            )}

                                        </label>





                                        <select

                                            id="service"

                                            name="service"

                                            value={

                                                formData.service

                                            }

                                            onChange={

                                                handleServiceChange

                                            }

                                            required

                                        >



                                            <option value="">

                                                {t(

                                                    "contact.selectService"

                                                )}

                                            </option>





                                            {contactServices.map(

                                                (service) => (

                                                    <option

                                                        key={

                                                            service.id

                                                        }

                                                        value={

                                                            service.title

                                                        }

                                                    >

                                                        {isArabic

                                                            ? t(

                                                                `serviceItems.${service.slug}.title`

                                                            )

                                                            : service.title}

                                                    </option>

                                                )

                                            )}





                                            <option value="Other">

                                                {t(

                                                    "contact.other"

                                                )}

                                            </option>



                                        </select>



                                    </div>





                                    {/* ==================================================

                                        WASTE MANAGEMENT POPUP

                                    ================================================== */}



                                    {wastePopupOpen &&

                                        formData.serviceSlug ===

                                        "WasteManagement" && (



                                            <div className="waste-popup-overlay">



                                                <div className="waste-popup">





                                                    {/* ======================================

                                                    HEADER

                                                ====================================== */}



                                                    <div className="waste-popup-header">



                                                        <div>



                                                            <span className="contact-page-eyebrow">

                                                                {isArabic

                                                                    ? "إدارة النفايات"

                                                                    : "Waste Management"}

                                                            </span>





                                                            <h3>

                                                                {isArabic

                                                                    ? "اختر نوع الخدمة"

                                                                    : "Select Service Type"}

                                                            </h3>



                                                        </div>





                                                        <button

                                                            type="button"

                                                            className="waste-popup-close"

                                                            onClick={() =>

                                                                setWastePopupOpen(

                                                                    false

                                                                )

                                                            }

                                                            aria-label="Close"

                                                        >

                                                            ×

                                                        </button>



                                                    </div>





                                                    {/* ======================================

                                                    DROPDOWN

                                                ====================================== */}



                                                    <div className="waste-popup-select">



                                                        <label htmlFor="wasteCategory">

                                                            {isArabic

                                                                ? "نوع إدارة النفايات"

                                                                : "Waste Management Type"}

                                                        </label>





                                                        <select

                                                            id="wasteCategory"

                                                            value={

                                                                selectedWasteCategory

                                                            }

                                                            onChange={

                                                                handleWasteCategoryChange

                                                            }

                                                        >



                                                            <option value="containers">

                                                                {isArabic

                                                                    ? "الحاويات"

                                                                    : "Containers"}

                                                            </option>





                                                            <option value="fleetCompactors">

                                                                {isArabic

                                                                    ? "الأسطول والضواغط"

                                                                    : "Fleet & Compactors"}

                                                            </option>





                                                            <option value="sewage">

                                                                {isArabic

                                                                    ? "التخلص من مياه الصرف الصحي"

                                                                    : "Sewage Disposal"}

                                                            </option>



                                                        </select>



                                                    </div>





                                                    {/* ======================================

                                                    CURRENT CATEGORY

                                                ====================================== */}



                                                    {currentWasteCategory && (



                                                        <div className="waste-popup-equipment">



                                                            <div className="waste-popup-equipment-heading">



                                                                <h4>

                                                                    {isArabic

                                                                        ? currentWasteCategory.arabicTitle

                                                                        : currentWasteCategory.title}

                                                                </h4>





                                                                <span>

                                                                    {isArabic

                                                                        ? "يمكنك اختيار أكثر من عنصر"

                                                                        : "You Can Select More Than One"}

                                                                </span>



                                                            </div>





                                                            {/* ==================================

                                                            EQUIPMENT GRID

                                                        ================================== */}



                                                            <div className="waste-equipment-grid">



                                                                {currentWasteCategory.items.map(

                                                                    (

                                                                        equipment

                                                                    ) => {



                                                                        const isSelected =

                                                                            formData.selectedEquipment.includes(

                                                                                equipment.id

                                                                            );





                                                                        return (

                                                                            <button

                                                                                type="button"

                                                                                key={

                                                                                    equipment.id

                                                                                }

                                                                                className={`waste-equipment-card ${isSelected

                                                                                    ? "waste-equipment-card-selected"

                                                                                    : ""

                                                                                    }`}

                                                                                onClick={() =>

                                                                                    toggleWasteEquipment(

                                                                                        equipment.id

                                                                                    )

                                                                                }

                                                                                aria-pressed={

                                                                                    isSelected

                                                                                }

                                                                            >



                                                                                {/* IMAGE */}



                                                                                <div className="waste-equipment-image-wrapper">



                                                                                    <img

                                                                                        src={

                                                                                            equipment.image

                                                                                        }

                                                                                        alt={

                                                                                            isArabic

                                                                                                ? equipment.arabicTitle

                                                                                                : equipment.title

                                                                                        }

                                                                                    />



                                                                                </div>





                                                                                {/* CONTENT */}



                                                                                <div className="waste-equipment-card-content">



                                                                                    <span className="waste-equipment-number">

                                                                                        {

                                                                                            equipment.number

                                                                                        }

                                                                                    </span>





                                                                                    <h4>

                                                                                        {isArabic

                                                                                            ? equipment.arabicTitle

                                                                                            : equipment.title}

                                                                                    </h4>





                                                                                    <span className="waste-equipment-arrow">

                                                                                        →

                                                                                    </span>



                                                                                </div>





                                                                                {/* CHECK */}



                                                                                <span className="waste-equipment-check">



                                                                                    {isSelected &&

                                                                                        "✓"}



                                                                                </span>



                                                                            </button>

                                                                        );

                                                                    }

                                                                )}



                                                            </div>



                                                        </div>



                                                    )}





                                                    {/* ======================================

                                                    FOOTER

                                                ====================================== */}



                                                    {/* ======================================

    REQUIREMENT MESSAGE

====================================== */}



                                                    {/* ======================================

    SELECTED EQUIPMENT + REQUIREMENT

====================================== */}



                                                    <div className="waste-popup-selection-summary">

                                                        <div className="waste-popup-selection-heading">
                                                            <h4>
                                                                {isArabic
                                                                    ? "العناصر المحددة"
                                                                    : "Selected Items"}
                                                            </h4>

                                                            <span>
                                                                {isArabic
                                                                    ? "حدد الكمية لكل عنصر"
                                                                    : "Set the quantity for each item"}
                                                            </span>
                                                        </div>

                                                        {selectedWasteEquipment.length > 0 ? (
                                                            <div className="waste-popup-selected-list">
                                                                {selectedWasteEquipment.map((equipment) => (
                                                                    <div
                                                                        className="waste-popup-selected-row"
                                                                        key={equipment.id}
                                                                    >
                                                                        <div className="waste-popup-selected-item-info">
                                                                            <img
                                                                                src={equipment.image}
                                                                                alt={
                                                                                    isArabic
                                                                                        ? equipment.arabicTitle
                                                                                        : equipment.title
                                                                                }
                                                                            />
                                                                            <div>
                                                                                <span className="waste-popup-selected-number">
                                                                                    {equipment.number}
                                                                                </span>
                                                                                <strong>
                                                                                    {isArabic
                                                                                        ? equipment.arabicTitle
                                                                                        : equipment.title}
                                                                                </strong>
                                                                            </div>
                                                                        </div>

                                                                        <div className="waste-popup-quantity-control">
                                                                            <label htmlFor={`quantity-${equipment.id}`}>
                                                                                {isArabic ? "الكمية" : "Quantity"}
                                                                            </label>
                                                                            <input
                                                                                id={`quantity-${equipment.id}`}
                                                                                type="number"
                                                                                min="1"
                                                                                step="1"
                                                                                value={
                                                                                    formData.equipmentQuantities[equipment.id] || 1
                                                                                }
                                                                                onChange={(event) =>
                                                                                    handleQuantityChange(
                                                                                        equipment.id,
                                                                                        event.target.value
                                                                                    )
                                                                                }
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        ) : (
                                                            <div className="waste-popup-empty-selection">
                                                                {isArabic
                                                                    ? "لم يتم اختيار أي عنصر"
                                                                    : "No items selected yet"}
                                                            </div>
                                                        )}

                                                    </div>
                                                    <div className="waste-popup-footer">
                                                        <div className="waste-popup-footer-actions">
                                                            <button
                                                                type="button"
                                                                className="waste-popup-submit"
                                                                onClick={handleWasteSelectionDone}
                                                            >
                                                                {isArabic ? "إرسال" : "Submit"}
                                                                <FaArrowRight />
                                                            </button>
                                                        </div>
                                                    </div>

                                                </div>



                                            </div>

                                        )}





                                    {/* NON-WASTE SERVICE SELECTION */}
                                    {servicePopupOpen && currentServiceSelection && (
                                        <div className="service-selection-overlay">
                                            <div className="service-selection-popup">
                                                <div className="service-selection-header">
                                                    <div>
                                                        <span className="contact-page-eyebrow">{isArabic ? "اختيار الخدمة" : "Service Selection"}</span>
                                                        <h3>{isArabic ? currentServiceSelection.arabicTitle : currentServiceSelection.title}</h3>
                                                        <p>{isArabic ? "يمكنك اختيار أكثر من عنصر وتحديد الكمية." : "Select one or more options and set the required quantity."}</p>
                                                    </div>
                                                    <button type="button" className="service-selection-close" onClick={() => setServicePopupOpen(false)}>×</button>
                                                </div>
                                                <div className="service-selection-grid">
                                                    {currentServiceSelection.items.map((item) => {
                                                        const isSelected = selectedServiceItems.includes(item.id);
                                                        return (
                                                            <button type="button" key={item.id} className={`service-selection-card ${isSelected ? "service-selection-card-selected" : ""}`} onClick={() => toggleServiceItem(item.id)} aria-pressed={isSelected}>
                                                                <div className="service-selection-image-wrapper">
                                                                    {item.image ? (
                                                                        <img
                                                                            src={item.image}
                                                                            alt={
                                                                                isArabic
                                                                                    ? item.arabicTitle
                                                                                    : item.title
                                                                            }
                                                                        />
                                                                    ) : (
                                                                        <div className="service-selection-image-placeholder">
                                                                            <span>{item.number}</span>
                                                                            <small>
                                                                                {isArabic
                                                                                    ? "الصورة قريباً"
                                                                                    : "Image coming soon"}
                                                                            </small>
                                                                        </div>
                                                                    )}
                                                                </div>
                                                                <div className="service-selection-card-content">
                                                                    <span className="service-selection-number">
                                                                        {item.number}
                                                                    </span>

                                                                    <h4>
                                                                        {isArabic
                                                                            ? item.arabicTitle
                                                                            : item.title}
                                                                    </h4>

                                                                    <span className="service-selection-arrow">
                                                                        →
                                                                    </span>

                                                                    {isSelected && (
                                                                        <span className="service-selection-check">
                                                                            ✓
                                                                        </span>
                                                                    )}
                                                                </div>
                                                            </button>
                                                        );
                                                    })}
                                                </div>
                                                <div className="service-selection-summary">
                                                    <div className="service-selection-summary-heading">
                                                        <h4>
                                                            {isArabic
                                                                ? "العناصر المحددة"
                                                                : "Selected Items"}
                                                        </h4>

                                                        <span>
                                                            {isArabic
                                                                ? "حدد الكمية لكل عنصر"
                                                                : "Set the quantity for each item"}
                                                        </span>
                                                    </div>
                                                    {selectedServiceDetails.length > 0 ? (
                                                        <div className="service-selection-selected-list">
                                                            {selectedServiceDetails.map((item) => (
                                                                <div className="service-selection-selected-row" key={item.id}>
                                                                    <div className="service-selection-selected-info">
                                                                        <div className="service-selection-mini-image">
                                                                            <img
                                                                                src={item.image}
                                                                                alt={isArabic ? item.arabicTitle : item.title}
                                                                            />
                                                                        </div>
                                                                        <div><span>{item.number}</span><strong>{isArabic ? item.arabicTitle : item.title}</strong></div></div>
                                                                    <div className="service-selection-quantity"><label htmlFor={`service-quantity-${item.id}`}>{isArabic ? "الكمية" : "Quantity"}</label><input id={`service-quantity-${item.id}`} type="number" min="1" step="1" value={serviceItemQuantities[item.id] || 1} onChange={(event) => handleServiceItemQuantityChange(item.id, event.target.value)} /></div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    ) : <div className="service-selection-empty">{isArabic ? "لم يتم اختيار أي عنصر" : "No items selected yet"}</div>}
                                                </div>
                                                <div className="service-selection-footer">
                                                    <div className="service-selection-footer-actions">
                                                        <button
                                                            type="button"
                                                            className="service-selection-submit"
                                                            onClick={handleServiceSelectionDone}
                                                        >
                                                            {isArabic ? "إرسال" : "Submit"}
                                                            <FaArrowRight />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* ==================================

                                        MESSAGE

                                    ================================== */}



                                    {/* ==================================
                                        SELECTED WASTE ITEMS
                                    ================================== */}

                                    {formData.serviceSlug === "WasteManagement" &&
                                        selectedWasteEquipment.length > 0 && (
                                            <div className="waste-enquiry-summary">
                                                <div className="waste-enquiry-summary-heading">
                                                    <div>
                                                        <span className="contact-page-eyebrow">
                                                            {isArabic
                                                                ? "العناصر المطلوبة"
                                                                : "Selected Items"}
                                                        </span>
                                                        <h3>
                                                            {isArabic
                                                                ? "العناصر والكمية"
                                                                : "Items & Quantity"}
                                                        </h3>
                                                    </div>

                                                    <button
                                                        type="button"
                                                        className="waste-enquiry-edit"
                                                        onClick={() => setWastePopupOpen(true)}
                                                    >
                                                        {isArabic ? "تعديل" : "Edit"}
                                                    </button>
                                                </div>

                                                <div className="waste-enquiry-summary-list">
                                                    {selectedWasteEquipment.map((equipment) => (
                                                        <div
                                                            className="waste-enquiry-summary-row"
                                                            key={equipment.id}
                                                        >
                                                            <div className="waste-enquiry-summary-item">
                                                                <img
                                                                    src={equipment.image}
                                                                    alt={
                                                                        isArabic
                                                                            ? equipment.arabicTitle
                                                                            : equipment.title
                                                                    }
                                                                />
                                                                <div>
                                                                    <span className="waste-enquiry-summary-number">
                                                                        {equipment.number}
                                                                    </span>
                                                                    <strong>
                                                                        {isArabic
                                                                            ? equipment.arabicTitle
                                                                            : equipment.title}
                                                                    </strong>
                                                                </div>
                                                            </div>

                                                            <div className="waste-enquiry-summary-quantity">
                                                                <span>
                                                                    {isArabic ? "الكمية" : "Quantity"}
                                                                </span>
                                                                <strong>
                                                                    {formData.equipmentQuantities[equipment.id] || 1}
                                                                </strong>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}


                                    {formData.serviceSlug !== "WasteManagement" && selectedServiceDetails.length > 0 && (
                                        <div className="waste-enquiry-summary service-enquiry-summary">
                                            <div className="waste-enquiry-summary-heading"><div><span className="contact-page-eyebrow">{isArabic ? "العناصر المطلوبة" : "Selected Items"}</span><h3>{isArabic ? "العناصر والكمية" : "Items & Quantity"}</h3></div><button type="button" className="waste-enquiry-edit" onClick={() => setServicePopupOpen(true)}>{isArabic ? "تعديل" : "Edit"}</button></div>
                                            <div className="waste-enquiry-summary-list">
                                                {selectedServiceDetails.map((item) => (
                                                    <div className="waste-enquiry-summary-row" key={item.id}>
                                                        <div className="waste-enquiry-summary-item">
                                                                {item.image ? (
                                                                    <div className="service-summary-image">
                                                                        <img
                                                                            src={item.image}
                                                                            alt={
                                                                                isArabic
                                                                                    ? item.arabicTitle
                                                                                    : item.title
                                                                            }
                                                                        />
                                                                    </div>
                                                                ) : (
                                                                    <div className="service-summary-placeholder">
                                                                        {item.number}
                                                                    </div>
                                                                )}

                                                                <div className="service-summary-details">
                                                                    <span className="waste-enquiry-summary-number">
                                                                        {item.number}
                                                                    </span>
                                                                    <strong>
                                                                        {isArabic
                                                                            ? item.arabicTitle
                                                                            : item.title}
                                                                    </strong>
                                                                </div>
                                                            </div>
                                                        <div className="waste-enquiry-summary-quantity"><span>{isArabic ? "الكمية" : "Quantity"}</span><strong>{serviceItemQuantities[item.id] || 1}</strong></div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}


                                    <div className="contact-form-group">



                                        <label htmlFor="message">

                                            {t(

                                                "contact.message"

                                            )}

                                        </label>





                                        <textarea

                                            id="message"

                                            name="message"

                                            value={

                                                formData.message

                                            }

                                            onChange={

                                                handleChange

                                            }

                                            placeholder={t(

                                                "contact.messagePlaceholder"

                                            )}

                                            rows="6"

                                            required

                                        />



                                    </div>





                                    {/* ==================================

                                        SUBMIT

                                    ================================== */}



                                    <button

                                        type="submit"

                                        className="contact-submit-button"

                                        disabled={loading}

                                    >



                                        {loading

                                            ? "Submitting..."

                                            : t(

                                                "contact.submit"

                                            )}





                                        {!loading && (

                                            <FaArrowRight />

                                        )}



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