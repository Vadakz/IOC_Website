import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            navbar: {
                home: "Home",
                about: "About Us",
                services: "Services",
                coverage: "Coverage",
                contact: "Contact Us",
                quote: "Get a Quote",
                openMenu: "Open navigation menu",
                closeMenu: "Close navigation menu",
            },

            hero: {
                label: "Established 1982 · Saudi Arabia",
                titleFirst: "Embracing",
                titleSecond: "Sustainable Living.",
                description:
                    "Delivering integrated waste management, janitorial, pest control, MEP and environmental services for cleaner, safer and more sustainable communities across Saudi Arabia.",
                explore: "Explore Services",
                requestQuote: "Request a Quote",
            },
        },
    },

    ar: {
        translation: {
            navbar: {
                home: "الرئيسية",
                about: "من نحن",
                services: "خدماتنا",
                coverage: "نطاق التغطية",
                contact: "اتصل بنا",
                quote: "اطلب عرض سعر",
                openMenu: "فتح قائمة التنقل",
                closeMenu: "إغلاق قائمة التنقل",
            },

            hero: {
                label: "تأسست عام 1982 · المملكة العربية السعودية",
                titleFirst: "نحو مستقبل",
                titleSecond: "أكثر استدامة",
                description:
                    "نقدم خدمات متكاملة في إدارة النفايات والنظافة ومكافحة الآفات والأعمال الكهروميكانيكية والخدمات البيئية، لبناء مجتمعات أكثر نظافة وأماناً واستدامة في المملكة العربية السعودية.",
                explore: "استكشف خدماتنا",
                requestQuote: "اطلب عرض سعر",
            },
        },
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: localStorage.getItem("language") || "en",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;