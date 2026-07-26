import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const en = {
  common: {
    companyName: "International Operations Company",
    learnMore: "Learn More",
    arrow: "→",
  },
  navbar: {
    home: "Home",
    about: "About Us",
    services: "Services",
    coverage: "Coverage",
    contact: "Contact Us",
    quote: "Get a Quote",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
    selectLanguage: "Select language",
  },
  hero: {
    label: "Established 1982 · Saudi Arabia",
    titleFirst: "Embracing",
    titleSecond: "sustainable living.",
    description:
      "Delivering integrated waste management, janitorial, pest control, MEP and environmental services for cleaner, safer and more sustainable communities across Saudi Arabia.",
    explore: "Explore Services",
    requestQuote: "Request a Quote",
    badges: ["Nationwide Coverage", "Integrated Services", "24/7 Operations"],
    stats: [
      { value: "40+", label: "Years of excellence" },
      { value: "600+", label: "Clients nationwide" },
      { value: "500+", label: "Employees" },
      { value: "24/7", label: "Customer support" },
    ],
    scroll: "Scroll to discover",
    scrollLabel: "Scroll to about section",
  },
  about: {
    imageAlt: "IOC employee representing decades of operational excellence",
    label: "About IOC/ECO",
    title: "Delivering Excellence",
    titleAccent: "Since 1982",
    paragraphOne:
      "International Operations Company provides integrated facility management and environmental services across Saudi Arabia.",
    paragraphTwo:
      "With more than four decades of experience, we support businesses, industries and communities through reliable, sustainable and professionally managed solutions.",
    highlights: [
      { value: "600+", label: "Clients Served" },
      { value: "500+", label: "Employees" },
      { value: "40+", label: "Years of Experience" },
      { value: "1982", label: "Established" },
    ],
    button: "Learn More About Us",
  },
  servicesSection: {
    label: "Our Services",
    title: "Six services. One standard of delivery.",
    description:
      "From daily workplace care to critical building systems, IOC/ECO delivers services shaped around your facility and operational needs.",
    viewLabel: "View {{service}}",
    learnMore: "Learn More",
  },
  coverage: {
    label: "Our Coverage",
    title: "Operational coverage across the",
    titleAccent: "Kingdom of Saudi Arabia",
    description:
      "IOC provides integrated facility management and operational support across major cities and industrial regions throughout the Kingdom.",
    locationsLabel: "Operational locations",
    locationsCount: "{{count}} Locations",
    network: "IOC Operational Network",
    networkTitle: "Kingdom-wide service coverage",
    active: "Active",
    popup: "IOC operational service coverage",
    locations: {
      Riyadh: { name: "Riyadh", region: "Central Region" },
      Jeddah: { name: "Jeddah", region: "Western Region" },
      Dammam: { name: "Dammam", region: "Eastern Region" },
      Jubail: { name: "Jubail", region: "Eastern Industrial Region" },
    },
    stats: [
      { value: "4", label: "Operational Hubs" },
      { value: "24/7", label: "Support Services" },
      { value: "KSA", label: "Nationwide Capability" },
    ],
  },
  whyChoose: {
    label: "Why Choose IOC",
    title: "A trusted partner for",
    titleAccent: "integrated facility management",
    intro:
      "IOC combines operational expertise, skilled professionals and reliable service systems to deliver solutions tailored to each client’s requirements.",
    years: "Years of proven operational excellence",
    strengths: [
      {
        title: "Operational Excellence",
        description:
          "Efficient, reliable and performance-driven services designed to support continuous business operations.",
        points: [
          "Reliable service delivery",
          "Continuous improvement",
          "Performance-focused operations",
        ],
      },
      {
        title: "Quality & Compliance",
        description:
          "Our operations follow strict quality, safety and regulatory standards across every service.",
        points: [
          "Safety-first approach",
          "Quality control systems",
          "Regulatory compliance",
        ],
      },
      {
        title: "Experienced Team",
        description:
          "Skilled professionals and experienced operational teams committed to delivering dependable results.",
        points: [
          "Qualified professionals",
          "Dedicated support teams",
          "Industry experience",
        ],
      },
      {
        title: "Nationwide Capability",
        description:
          "Strategic operational presence supporting clients across major commercial and industrial cities.",
        points: [
          "Riyadh and Jeddah",
          "Dammam and Jubail",
          "Flexible service deployment",
        ],
      },
    ],
    bottom:
      "Delivering safe, reliable and sustainable operational support throughout the Kingdom.",
    industriesLink: "Industries We Serve",
  },
  industries: {
    heroLabel: "Industries We Serve",
    heroTitle: "Tailored solutions for",
    heroAccent: "diverse industries",
    heroDescription:
      "IOC delivers integrated facility management and operational support designed around the requirements of each industry.",
    expertiseLabel: "Our Industry Expertise",
    expertiseTitle:
      "Supporting complex operational environments across the Kingdom",
    expertiseDescription:
      "From commercial and industrial facilities to healthcare, education and hospitality environments, IOC provides reliable, safe and efficient service delivery.",
    items: [
      {
        title: "Commercial",
        description:
          "Integrated facility management solutions for offices, corporate buildings and business centres.",
      },
      {
        title: "Industrial",
        description:
          "Reliable operational support for factories, warehouses and industrial facilities.",
      },
      {
        title: "Healthcare",
        description:
          "Safe, hygienic and compliant facility services for hospitals, clinics and medical centres.",
      },
      {
        title: "Hospitality",
        description:
          "Professional facility support for hotels, accommodation facilities and hospitality properties.",
      },
      {
        title: "Education",
        description:
          "Clean, safe and efficient environments for schools, colleges and universities.",
      },
      {
        title: "Retail",
        description:
          "Responsive facility management for shopping malls, showrooms and retail outlets.",
      },
    ],
    clientsLabel: "Our Clients",
    clientsTitle: "Trusted partnerships across the industries we serve",
    clientsDescription:
      "We are proud to support leading organizations through dependable facility management, technical services and operational expertise.",
    clientLogoAlt: "{{client}} logo",
    partnerLabel: "Partner With IOC",
    partnerTitle: "Reliable operational support for your industry",
    partnerButton: "Discuss Your Requirements",
  },
  contact: {
    cards: [
      { title: "Head Office", lines: ["Al Murabba, Riyadh 12626"] },
      { title: "Customer Service", lines: ["+966 9200 51300"] },
      { title: "Email", lines: ["info@iocl.sa"] },
      {
        title: "Working Hours",
        lines: ["Sunday – Thursday", "8:00 AM – 5:00 PM"],
      },
    ],
    heroLabel: "Contact International Operations Company",
    heroTitle: "Let’s Build Better",
    heroAccent: "Operations Together.",
    heroDescription:
      "Speak with our team about integrated facility management, environmental services and operational solutions across Saudi Arabia.",
    sendEnquiry: "Send an Enquiry",
    callTeam: "Call Our Team",
    getInTouch: "Get in Touch",
    reachTitle: "Choose the easiest way to reach us.",
    reachDescription:
      "Our team is available to support enquiries, quotations, service requests and business partnerships.",
    supportLabel: "Reliable Support",
    supportTitle: "Solutions designed around your operations.",
    supportDescription:
      "Share your requirements with us and our team will recommend the right service solution for your business.",
    coverageFeature: "Nationwide operational coverage",
    responsiveFeature: "Responsive customer support",
    formLabel: "Send an Enquiry",
    formTitle: "Tell us how we can assist you.",
    formDescription:
      "Complete the form and our team will contact you as soon as possible.",
    fullName: "Full Name",
    fullNamePlaceholder: "Enter your full name",
    companyName: "Company Name",
    companyPlaceholder: "Enter company name",
    email: "Email Address",
    emailPlaceholder: "name@company.com",
    phone: "Phone Number",
    phonePlaceholder: "+966",
    service: "Interested Service",
    selectService: "Select a service",
    other: "Other",
    message: "Message",
    messagePlaceholder: "Tell us about your requirements",
    submit: "Send Enquiry",
    success:
      "Thank you. Your enquiry has been recorded. Our team will contact you shortly.",
  },
  serviceDetails: {
    notFound: "Service not found",
    notFoundDescription: "The service you’re looking for is not available.",
    returnHome: "Return to homepage",
    allServices: "All services",
    discuss: "Discuss your requirements",
    benefitsLabel: "Service benefits",
    expect: "What you can expect",
    overview: "Service overview",
    sectors: "Supporting your sector",
    capabilities: "Our capabilities",
    provide: "What we provide",
    processLabel: "How we work",
    processTitle: "A clear path from assessment to improvement",
    processDescription:
      "Every programme is shaped around the facility, its risks and the standards that matter to your operation.",
  },
  footer: {
    logoAlt: "International Operations Company",
    description:
      "Delivering integrated facility management, environmental and operational solutions that create cleaner, safer and more sustainable environments.",
    tagline: "Creating Sustainable Living",
    company: "Company",
    companyLinksLabel: "Footer company links",
    home: "Home",
    about: "About Us",
    industries: "Industries",
    clients: "Our Clients",
    contactUs: "Contact Us",
    services: "Our Services",
    serviceLinksLabel: "Footer service links",
    contact: "Contact",
    riyadh: "Riyadh",
    country: "Kingdom of Saudi Arabia",
    copyright:
      "© {{year}} International Operations Company. All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms & Conditions",
  },
};

const ar = {
  common: {
    companyName: "الشركة الدولية للتشغيل",
    learnMore: "اعرف المزيد",
    arrow: "←",
  },
  navbar: {
    home: "الرئيسية",
    about: "من نحن",
    services: "خدماتنا",
    coverage: "نطاق التغطية",
    contact: "اتصل بنا",
    quote: "اطلب عرض سعر",
    openMenu: "فتح قائمة التنقل",
    closeMenu: "إغلاق قائمة التنقل",
    selectLanguage: "اختر اللغة",
  },
  hero: {
    label: "تأسست عام 1982 · المملكة العربية السعودية",
    titleFirst: "نحتضن",
    titleSecond: "الحياة المستدامة.",
    description:
      "نقدم خدمات متكاملة في إدارة النفايات والنظافة ومكافحة الآفات والأعمال الميكانيكية والكهربائية والصحية، لبناء مجتمعات أكثر نظافة وأماناً واستدامة في المملكة.",
    explore: "استكشف خدماتنا",
    requestQuote: "اطلب عرض سعر",
    badges: ["تغطية على مستوى المملكة", "خدمات متكاملة", "عمليات على مدار الساعة"],
    stats: [
      { value: "+40", label: "عاماً من التميز" },
      { value: "+600", label: "عميل في المملكة" },
      { value: "+500", label: "موظف" },
      { value: "24/7", label: "دعم العملاء" },
    ],
    scroll: "اكتشف المزيد",
    scrollLabel: "الانتقال إلى قسم من نحن",
  },
  about: {
    imageAlt: "موظف في الشركة الدولية للتشغيل يمثل عقوداً من التميز التشغيلي",
    label: "عن IOC/ECO",
    title: "نقدم التميز",
    titleAccent: "منذ عام 1982",
    paragraphOne:
      "تقدم الشركة الدولية للتشغيل خدمات متكاملة لإدارة المرافق والخدمات البيئية في مختلف أنحاء المملكة العربية السعودية.",
    paragraphTwo:
      "بخبرة تتجاوز أربعة عقود، ندعم الشركات والقطاعات والمجتمعات من خلال حلول موثوقة ومستدامة ومدارة باحترافية.",
    highlights: [
      { value: "+600", label: "عميل نخدمه" },
      { value: "+500", label: "موظف" },
      { value: "+40", label: "عاماً من الخبرة" },
      { value: "1982", label: "عام التأسيس" },
    ],
    button: "اعرف المزيد عنا",
  },
  servicesSection: {
    label: "خدماتنا",
    title: "ست خدمات، بمعيار واحد للأداء.",
    description:
      "من العناية اليومية بمكان العمل إلى أنظمة المباني الحيوية، تقدم IOC/ECO خدمات مصممة وفق احتياجات منشأتك وعملياتك.",
    viewLabel: "عرض خدمة {{service}}",
    learnMore: "اعرف المزيد",
  },
  coverage: {
    label: "نطاق التغطية",
    title: "تغطية تشغيلية في جميع أنحاء",
    titleAccent: "المملكة العربية السعودية",
    description:
      "تقدم IOC خدمات متكاملة لإدارة المرافق والدعم التشغيلي في المدن والمناطق الصناعية الرئيسية في المملكة.",
    locationsLabel: "المواقع التشغيلية",
    locationsCount: "{{count}} مواقع",
    network: "شبكة IOC التشغيلية",
    networkTitle: "تغطية خدمية على مستوى المملكة",
    active: "نشط",
    popup: "تغطية خدمات IOC التشغيلية",
    locations: {
      Riyadh: { name: "الرياض", region: "المنطقة الوسطى" },
      Jeddah: { name: "جدة", region: "المنطقة الغربية" },
      Dammam: { name: "الدمام", region: "المنطقة الشرقية" },
      Jubail: { name: "الجبيل", region: "المنطقة الصناعية الشرقية" },
    },
    stats: [
      { value: "4", label: "مراكز تشغيلية" },
      { value: "24/7", label: "خدمات الدعم" },
      { value: "المملكة", label: "قدرات تغطي المملكة" },
    ],
  },
  whyChoose: {
    label: "لماذا تختار IOC",
    title: "شريك موثوق في",
    titleAccent: "الإدارة المتكاملة للمرافق",
    intro:
      "تجمع IOC بين الخبرة التشغيلية والكفاءات المتخصصة وأنظمة الخدمة الموثوقة لتقديم حلول تناسب متطلبات كل عميل.",
    years: "عاماً من التميز التشغيلي المثبت",
    strengths: [
      {
        title: "التميز التشغيلي",
        description:
          "خدمات فعالة وموثوقة تركز على الأداء وتدعم استمرارية أعمالك.",
        points: ["تقديم خدمات موثوقة", "تحسين مستمر", "عمليات تركز على الأداء"],
      },
      {
        title: "الجودة والامتثال",
        description:
          "تلتزم عملياتنا بمعايير صارمة للجودة والسلامة والأنظمة في جميع الخدمات.",
        points: ["السلامة أولاً", "أنظمة ضبط الجودة", "الامتثال للأنظمة"],
      },
      {
        title: "فريق ذو خبرة",
        description:
          "متخصصون وفرق تشغيلية ذات خبرة ملتزمون بتقديم نتائج موثوقة.",
        points: ["متخصصون مؤهلون", "فرق دعم مخصصة", "خبرة قطاعية"],
      },
      {
        title: "قدرات تغطي المملكة",
        description:
          "حضور تشغيلي استراتيجي يدعم العملاء في المدن التجارية والصناعية الرئيسية.",
        points: ["الرياض وجدة", "الدمام والجبيل", "مرونة في نشر الخدمات"],
      },
    ],
    bottom:
      "نقدم دعماً تشغيلياً آمناً وموثوقاً ومستداماً في جميع أنحاء المملكة.",
    industriesLink: "القطاعات التي نخدمها",
  },
  industries: {
    heroLabel: "القطاعات التي نخدمها",
    heroTitle: "حلول مصممة لتناسب",
    heroAccent: "مختلف القطاعات",
    heroDescription:
      "تقدم IOC إدارة متكاملة للمرافق ودعماً تشغيلياً مصمماً حسب متطلبات كل قطاع.",
    expertiseLabel: "خبراتنا القطاعية",
    expertiseTitle: "ندعم البيئات التشغيلية المعقدة في جميع أنحاء المملكة",
    expertiseDescription:
      "من المنشآت التجارية والصناعية إلى مرافق الرعاية الصحية والتعليم والضيافة، تقدم IOC خدمات موثوقة وآمنة وفعالة.",
    items: [
      {
        title: "القطاع التجاري",
        description:
          "حلول متكاملة لإدارة المرافق للمكاتب ومباني الشركات ومراكز الأعمال.",
      },
      {
        title: "القطاع الصناعي",
        description:
          "دعم تشغيلي موثوق للمصانع والمستودعات والمنشآت الصناعية.",
      },
      {
        title: "الرعاية الصحية",
        description:
          "خدمات مرافق آمنة وصحية ومتوافقة للمستشفيات والعيادات والمراكز الطبية.",
      },
      {
        title: "الضيافة",
        description:
          "دعم احترافي للمرافق في الفنادق ومرافق الإقامة والمنشآت السياحية.",
      },
      {
        title: "التعليم",
        description:
          "بيئات نظيفة وآمنة وفعالة للمدارس والكليات والجامعات.",
      },
      {
        title: "التجزئة",
        description:
          "إدارة سريعة الاستجابة للمرافق في المجمعات التجارية والمعارض ومنافذ البيع.",
      },
    ],
    clientsLabel: "عملاؤنا",
    clientsTitle: "شراكات موثوقة في القطاعات التي نخدمها",
    clientsDescription:
      "نفخر بدعم المؤسسات الرائدة من خلال إدارة موثوقة للمرافق وخدمات فنية وخبرة تشغيلية.",
    clientLogoAlt: "شعار {{client}}",
    partnerLabel: "كن شريكاً لـ IOC",
    partnerTitle: "دعم تشغيلي موثوق لقطاعك",
    partnerButton: "ناقش متطلباتك معنا",
  },
  contact: {
    cards: [
      { title: "المكتب الرئيسي", lines: ["المربع، الرياض 12626"] },
      { title: "خدمة العملاء", lines: ["+966 9200 51300"] },
      { title: "البريد الإلكتروني", lines: ["info@iocl.sa"] },
      {
        title: "ساعات العمل",
        lines: ["الأحد – الخميس", "8:00 صباحاً – 5:00 مساءً"],
      },
    ],
    heroLabel: "تواصل مع الشركة الدولية للتشغيل",
    heroTitle: "لنبنِ معاً",
    heroAccent: "عمليات أفضل.",
    heroDescription:
      "تحدث مع فريقنا حول الإدارة المتكاملة للمرافق والخدمات البيئية والحلول التشغيلية في المملكة العربية السعودية.",
    sendEnquiry: "أرسل استفسارك",
    callTeam: "اتصل بفريقنا",
    getInTouch: "تواصل معنا",
    reachTitle: "اختر الطريقة الأنسب للتواصل معنا.",
    reachDescription:
      "فريقنا متاح لدعم الاستفسارات وطلبات عروض الأسعار والخدمات والشراكات التجارية.",
    supportLabel: "دعم موثوق",
    supportTitle: "حلول مصممة وفق عملياتك.",
    supportDescription:
      "شاركنا متطلباتك وسيقترح فريقنا حل الخدمة المناسب لأعمالك.",
    coverageFeature: "تغطية تشغيلية على مستوى المملكة",
    responsiveFeature: "دعم سريع الاستجابة للعملاء",
    formLabel: "أرسل استفسارك",
    formTitle: "أخبرنا كيف يمكننا مساعدتك.",
    formDescription: "أكمل النموذج وسيتواصل معك فريقنا في أقرب وقت ممكن.",
    fullName: "الاسم الكامل",
    fullNamePlaceholder: "أدخل اسمك الكامل",
    companyName: "اسم الشركة",
    companyPlaceholder: "أدخل اسم الشركة",
    email: "البريد الإلكتروني",
    emailPlaceholder: "name@company.com",
    phone: "رقم الهاتف",
    phonePlaceholder: "+966",
    service: "الخدمة المطلوبة",
    selectService: "اختر خدمة",
    other: "أخرى",
    message: "الرسالة",
    messagePlaceholder: "أخبرنا عن متطلباتك",
    submit: "إرسال الاستفسار",
    success:
      "شكراً لك. تم تسجيل استفسارك وسيتواصل معك فريقنا قريباً.",
  },
  serviceDetails: {
    notFound: "الخدمة غير موجودة",
    notFoundDescription: "الخدمة التي تبحث عنها غير متاحة.",
    returnHome: "العودة إلى الرئيسية",
    allServices: "جميع الخدمات",
    discuss: "ناقش متطلباتك معنا",
    benefitsLabel: "مزايا الخدمة",
    expect: "ما الذي يمكنك توقعه",
    overview: "نظرة عامة على الخدمة",
    sectors: "ندعم قطاعك",
    capabilities: "قدراتنا",
    provide: "ما نقدمه",
    processLabel: "آلية عملنا",
    processTitle: "مسار واضح من التقييم إلى التحسين",
    processDescription:
      "يتم تصميم كل برنامج وفق المنشأة ومخاطرها والمعايير المهمة لعملياتك.",
  },
  footer: {
    logoAlt: "الشركة الدولية للتشغيل",
    description:
      "نقدم حلولاً متكاملة لإدارة المرافق والخدمات البيئية والتشغيلية لبيئات أكثر نظافة وأماناً واستدامة.",
    tagline: "نصنع حياة مستدامة",
    company: "الشركة",
    companyLinksLabel: "روابط الشركة في التذييل",
    home: "الرئيسية",
    about: "من نحن",
    industries: "القطاعات",
    clients: "عملاؤنا",
    contactUs: "اتصل بنا",
    services: "خدماتنا",
    serviceLinksLabel: "روابط الخدمات في التذييل",
    contact: "التواصل",
    riyadh: "الرياض",
    country: "المملكة العربية السعودية",
    copyright: "© {{year}} الشركة الدولية للتشغيل. جميع الحقوق محفوظة.",
    privacy: "سياسة الخصوصية",
    terms: "الشروط والأحكام",
  },
  serviceItems: {
    "Soft-Facility-Management": {
      title: "الإدارة الناعمة للمرافق",
      menuTitle: "الإدارة الناعمة للمرافق",
      category: "خدمات الأفراد وبيئة العمل",
      shortDescription:
        "خدمات منسقة تحافظ على نظافة المنشآت وترحيبها وجاهزيتها للعمليات اليومية.",
      description:
        "تجمع IOC/ECO الخدمات غير الفنية الأساسية تحت مسؤولية فريق واحد. نصمم كل برنامج وفق المنشأة وشاغليها ومعايير العميل التشغيلية، ثم ننسق الأفراد والجداول والمواد وفحوصات الجودة لتقديم تجربة متسقة في مكان العمل.",
      overviewTitle: "تجربة يومية أفضل لكل منشأة",
      features: [
        "التدبير المنزلي ودعم مكان العمل",
        "خدمات الضيافة والبانتري",
        "دعم الاستقبال والواجهة الأمامية",
        "إدارة دورات المياه والنظافة",
        "العناية بالمناطق الخارجية والمشتركة",
        "تخطيط المستهلكات وإعادة تزويدها",
      ],
      outcomes: [
        "خطة خدمة موحدة ومنسقة",
        "معايير عرض متسقة",
        "دعم سريع في الموقع",
      ],
      process: [
        {
          title: "الفهم",
          text: "مراجعة الموقع ونمط الإشغال ومتطلبات التشغيل اليومية.",
        },
        {
          title: "التخطيط",
          text: "تحديد القوى العاملة والجداول والمواد والمسؤوليات ومستويات الخدمة.",
        },
        {
          title: "التجهيز",
          text: "نشر فرق مدربة بإجراءات واضحة وإشراف مخصص للموقع.",
        },
        {
          title: "التحسين",
          text: "مراقبة الأداء ومعالجة الملاحظات وتطوير البرنامج باستمرار.",
        },
      ],
      sectors: ["المكاتب", "الضيافة", "التعليم", "المجمعات السكنية"],
    },
    "Hard-Facility-Management": {
      title: "الإدارة الفنية للمرافق",
      menuTitle: "الإدارة الفنية للمرافق",
      category: "أداء الأصول والمباني",
      shortDescription:
        "عناية فنية مخططة بأصول المباني والبنية التحتية وأنظمة السلامة الحيوية.",
      description:
        "تدعم IOC/ECO أداء وموثوقية أنظمة المباني الأساسية من خلال العناية المنظمة بالأصول. تجمع فرقنا بين الصيانة المخططة والإصلاحات السريعة والفحوصات ومراقبة الأداء لحماية الأصول وتقليل التعطل ودعم التشغيل الآمن.",
      overviewTitle: "حماية الأنظمة التي تعتمد عليها عملياتك",
      features: [
        "فحص الأصول وتقارير حالتها",
        "الصيانة الوقائية المخططة",
        "الصيانة التصحيحية والطارئة",
        "دعم هيكل المبنى والبنية التحتية",
        "تنسيق أنظمة الحريق وسلامة الأرواح",
        "سجلات الأصول وتقارير الصيانة",
      ],
      outcomes: [
        "تحسين موثوقية الأصول",
        "تقليل التعطل التشغيلي",
        "إطالة العمر التشغيلي للمعدات",
      ],
      process: [
        {
          title: "المسح",
          text: "تقييم المنشأة وحالة الأصول والمخاطر وممارسات الصيانة الحالية.",
        },
        {
          title: "تحديد الأولويات",
          text: "تحديد الأنظمة الحرجة ووضع استراتيجية الصيانة.",
        },
        {
          title: "الصيانة",
          text: "تنفيذ الأعمال المخططة والتصحيحية بواسطة فرق فنية مؤهلة.",
        },
        {
          title: "التقارير",
          text: "متابعة الأداء والمشكلات المتكررة وفرص التحسين.",
        },
      ],
      sectors: [
        "العقارات التجارية",
        "الرعاية الصحية",
        "التعليم",
        "المنشآت الصناعية",
      ],
    },
    PestControl: {
      title: "خدمات مكافحة الآفات",
      menuTitle: "مكافحة الآفات",
      category: "الإدارة المتكاملة للآفات",
      shortDescription:
        "إدارة مستهدفة ومسؤولة بيئياً للآفات تعتمد على الفحص والوقاية والمراقبة.",
      description:
        "تقدم IOC/ECO برامج مستدامة لمكافحة الآفات في أنحاء المملكة. نبدأ بمسح تفصيلي للموقع وتحديد النشاط والظروف المسببة، ثم نجمع بين إرشادات النظافة ومنع الدخول والعلاج المستهدف والمراقبة المستمرة للمساعدة في الحفاظ على بيئة آمنة وخالية من الآفات.",
      overviewTitle: "نعالج السبب، وليس المشكلة الظاهرة فقط",
      features: [
        "مكافحة الحشرات الزاحفة والطائرة",
        "مكافحة القوارض والنمل الأبيض وبق الفراش",
        "التبخير والمعالجات المتخصصة",
        "منع دخول الآفات والوقاية منها",
        "توصيات النظافة وتقليل المخاطر",
        "المراقبة المجدولة والتقارير",
      ],
      outcomes: [
        "خطط معالجة مخصصة للموقع",
        "تقليل احتمالات تكرار الإصابة",
        "اختيار مسؤول للمواد",
      ],
      process: [
        {
          title: "الفحص",
          text: "مسح الموقع وتحديد علامات النشاط ونقاط الدخول ومناطق الخطر.",
        },
        {
          title: "التحديد",
          text: "تحديد نوع الآفة وتقييم ظروف النظافة والبيئة.",
        },
        {
          title: "المكافحة",
          text: "تطبيق إجراءات المنع والوقاية والعلاجات المستهدفة عند الحاجة.",
        },
        {
          title: "المراقبة",
          text: "متابعة النشاط وتوثيق النتائج وتعديل البرنامج بمرور الوقت.",
        },
      ],
      sectors: ["المنشآت الغذائية", "الرعاية الصحية", "الضيافة", "المواقع السكنية والصناعية"],
    },
    Janitorial: {
      title: "خدمات النظافة",
      menuTitle: "خدمات النظافة",
      category: "التنظيف الاحترافي",
      shortDescription:
        "تنظيف يومي ومتخصص لبيئات أكثر صحة وأماناً وحسن مظهر.",
      description:
        "من التنظيف اليومي إلى المهام المتخصصة، تطور IOC/ECO برامج تنظيف عملية وفق استخدام كل منشأة وكثافة الحركة ومتطلبات النظافة. تساعد الفرق المدربة والمعدات المناسبة والإشراف الفعال في الحفاظ على معايير موثوقة للمساحات الداخلية والخارجية.",
      overviewTitle: "لمسة من الإتقان نقدمها باستمرار",
      features: [
        "التنظيف اليومي وإزالة الغبار والتعقيم",
        "التنظيف العميق للمناطق الداخلية والخارجية",
        "كنس الأرضيات ومسحها وشفطها",
        "تنظيف دورات المياه ونقاط اللمس العالية",
        "تنظيف النوافذ والواجهات",
        "تنظيف المنشآت التجارية والتعليمية والصحية والصناعية",
      ],
      outcomes: [
        "أماكن عمل أنظف وأكثر صحة",
        "خطط خدمة تناسب استخدام الموقع",
        "مظهر احترافي كل يوم",
      ],
      process: [
        {
          title: "التقييم",
          text: "مراجعة الأسطح وأنماط الحركة ومخاطر النظافة وساعات التشغيل.",
        },
        {
          title: "التصميم",
          text: "تحديد نطاق التنظيف وتكراره وطرقه والقوى العاملة والمعدات.",
        },
        {
          title: "التنفيذ",
          text: "تنفيذ المهام اليومية والدورية بواسطة فرق مدربة وتحت الإشراف.",
        },
        {
          title: "التحقق",
          text: "فحص النتائج وتسجيل الأداء ومعالجة ملاحظات الخدمة.",
        },
      ],
      sectors: ["التجاري", "التعليم", "الرعاية الصحية", "الصناعي"],
    },
    MEP: {
      title: "خدمات الأعمال الميكانيكية والكهربائية والصحية",
      menuTitle: "خدمات MEP",
      category: "الصيانة الفنية",
      shortDescription:
        "صيانة استباقية لأنظمة MEP والتكييف تدعم عمليات مبانٍ موثوقة وفعالة وآمنة.",
      description:
        "تدير IOC/ECO الأنظمة الميكانيكية والكهربائية والصحية وتصونها من خلال الصيانة المخططة والفحوصات الفنية والدعم السريع في الموقع. نركز على تحسين موثوقية الأنظمة وتقليل الأعطال الممكن تجنبها ومساعدة خدمات المبنى الحيوية على العمل بكفاءة.",
      overviewTitle: "نحافظ على استمرارية أنظمة المبنى الأساسية",
      features: [
        "صيانة الأنظمة الميكانيكية",
        "فحص وإصلاح الأنظمة الكهربائية",
        "صيانة وتمديدات السباكة",
        "خدمة أنظمة التكييف وفحص أدائها",
        "الصيانة الوقائية والتصحيحية",
        "أتمتة المباني والدعم الفني",
      ],
      outcomes: [
        "أعطال أقل يمكن تجنبها",
        "تحسين الكفاءة التشغيلية",
        "أنظمة أكثر أماناً وموثوقية",
      ],
      process: [
        {
          title: "الفحص",
          text: "مراجعة حالة الأنظمة وسجل التشغيل واحتياجات الصيانة الحرجة.",
        },
        {
          title: "الجدولة",
          text: "بناء خطة وقائية وفق الأصول والمخاطر والأولويات التشغيلية.",
        },
        {
          title: "الخدمة",
          text: "تنفيذ الأعمال المخططة والإصلاحات السريعة بواسطة فنيين مجهزين.",
        },
        {
          title: "التحسين",
          text: "متابعة الأعطال المتكررة واقتراح تحسينات عملية للأداء.",
        },
      ],
      sectors: ["الرعاية الصحية", "العقارات التجارية", "مراكز البيانات", "المنشآت الصناعية"],
    },
    WasteManagement: {
      title: "خدمات إدارة النفايات",
      menuTitle: "إدارة النفايات",
      category: "الخدمات البيئية",
      shortDescription:
        "حلول مسؤولة لجمع ومعالجة النفايات البلدية والإنشائية ومياه الصرف والنفايات المتخصصة.",
      description:
        "تقدم IOC/ECO خدمات موثوقة للنفايات ومياه الصرف للمنشآت والمشاريع في أنحاء المملكة. نطابق طريقة الجمع والمعدات وتكرار الخدمة مع كل نوع من النفايات، مع دعم التداول الآمن والتخلص المسؤول وبيئات تشغيلية أنظف.",
      overviewTitle: "حلول عملية لإدارة النفايات بمسؤولية",
      features: [
        "جمع النفايات البلدية الصلبة",
        "نفايات البناء والهدم",
        "إزالة مياه الصرف والمياه العادمة",
        "دعم النفايات الخطرة والطبية",
        "برامج إعادة التدوير وتحويل النفايات",
        "حاويات RORO وLugger والضواغط والصهاريج",
      ],
      outcomes: [
        "جداول جمع موثوقة",
        "معدات مناسبة لكل موقع",
        "عمليات أنظف وأكثر أماناً",
      ],
      process: [
        {
          title: "التصنيف",
          text: "تحديد أنواع النفايات وأحجامها وقيود الموقع واحتياجات الجمع.",
        },
        {
          title: "الإعداد",
          text: "اختيار الحاويات والمركبات والتكرار وإجراءات المناولة المناسبة.",
        },
        {
          title: "الجمع",
          text: "تقديم جمع مجدول أو سريع بواسطة فرق تشغيل مجهزة.",
        },
        {
          title: "التوثيق",
          text: "حفظ سجلات الخدمة ودعم النقل والتخلص المسؤول.",
        },
      ],
      sectors: ["التجاري", "الرعاية الصحية", "الإنشاءات", "الصناعي"],
    },
  },
};

const resources = {
  en: { translation: en },
  ar: { translation: ar },
};

const savedLanguage = localStorage.getItem("language") || "en";

const applyDocumentLanguage = (language) => {
  const normalizedLanguage = language?.startsWith("ar") ? "ar" : "en";
  document.documentElement.lang = normalizedLanguage;
  document.documentElement.dir = normalizedLanguage === "ar" ? "rtl" : "ltr";
};

i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

applyDocumentLanguage(savedLanguage);
i18n.on("languageChanged", applyDocumentLanguage);

export default i18n;
