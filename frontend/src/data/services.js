import {
  FaBroom,
  FaBuilding,
  FaBug,
  FaRecycle,
  FaUsersCog,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    slug: "WasteManagement",
    title: "Waste Management Services",
    menuTitle: "Waste Management",
    category: "Environmental Services",

    shortDescription:
      "Responsible collection and handling solutions for municipal, construction, wastewater and specialist waste streams.",

    image: "/images/waste-management.jpg",
    logo: "/images/ioc-eco-logo.png",

    description:
      "IOC/ECO provides dependable waste and wastewater services for facilities and projects across Saudi Arabia. We match the collection method, equipment and service frequency to each waste stream while supporting safe handling, responsible disposal and cleaner operating environments.",

    overviewTitle:
      "Practical Waste Solutions, Responsibly Managed",

    icon: FaRecycle,

    features: [
      "Municipal Solid-Waste Collection",
      "Construction And Demolition Waste",
      "Wastewater And Sewage Removal",
      "Hazardous And Medical Waste Support",
      "Recycling And Waste-Diversion Programmes",
      "RORO Bins, Lugger Bins, Compactors And Tankers",
    ],

    outcomes: [
      "Reliable Collection Schedules",
      "Equipment Matched To Each Site",
      "Cleaner And Safer Operations",
    ],

    process: [
      {
        title: "Profile",
        text:
          "Identify waste streams, volumes, site constraints and collection needs.",
      },
      {
        title: "Configure",
        text:
          "Select suitable containers, vehicles, frequencies and handling procedures.",
      },
      {
        title: "Collect",
        text:
          "Deliver scheduled or responsive collection through equipped operations teams.",
      },
      {
        title: "Document",
        text:
          "Maintain service records and support responsible transfer and disposal.",
      },
    ],

    sectors: [
      "Commercial",
      "Healthcare",
      "Construction",
      "Industrial",
    ],
  },

  {
    id: 2,
    slug: "PestControl",
    title: "Pest Control Services",
    menuTitle: "Pest Control",
    category: "Integrated Pest Management",

    shortDescription:
      "Targeted, environmentally responsible pest management built around inspection, prevention and monitoring.",

    description:
      "IOC/ECO delivers sustainable pest-management programmes across Saudi Arabia. We begin with a detailed site survey, identify activity and contributing conditions, then combine sanitation guidance, pest proofing, targeted treatment and ongoing monitoring to help maintain a safe, pest-free environment.",

    overviewTitle:
      "Control The Cause, Not Only The Visible Problem",

    icon: FaBug,

    features: [
      "Crawling And Flying Insect Control",
      "Rodent, Termite And Bedbug Control",
      "Fumigation And Specialist Treatments",
      "Pest Proofing And Prevention",
      "Sanitation And Risk Recommendations",
      "Scheduled Monitoring And Reporting",
    ],

    outcomes: [
      "Site-Specific Treatment Plans",
      "Reduced Risk Of Recurrence",
      "Responsible Product Selection",
    ],

    process: [
      {
        title: "Inspect",
        text:
          "Survey the premises and identify signs of activity, access points and risk areas.",
      },
      {
        title: "Identify",
        text:
          "Confirm the pest and evaluate sanitation and environmental conditions.",
      },
      {
        title: "Control",
        text:
          "Apply proofing, preventive measures and targeted treatments where required.",
      },
      {
        title: "Monitor",
        text:
          "Track activity, document results and adjust the programme over time.",
      },
    ],

    sectors: [
      "Food Operations",
      "Healthcare",
      "Hospitality",
      "Residential And Industrial Sites",
    ],
  },

  {
    id: 3,
    slug: "Janitorial",
    title: "Janitorial Services",
    menuTitle: "Janitorial Services",
    category: "Professional Cleaning",

    shortDescription:
      "Professional daily and specialist cleaning for healthier, safer and better-presented environments.",

    description:
      "From daily cleaning to demanding specialist assignments, IOC/ECO develops practical cleaning programmes around each facility’s use, footfall and hygiene requirements. Trained teams, appropriate equipment and active supervision help us maintain dependable standards across indoor and outdoor spaces.",

    overviewTitle:
      "A Touch Of Perfection, Delivered Consistently",

    icon: FaBroom,

    features: [
      "Daily Cleaning, Dusting And Sanitizing",
      "Deep Cleaning For Indoor And Outdoor Areas",
      "Floor Sweeping, Mopping And Vacuuming",
      "Washroom And High-Touch-Point Cleaning",
      "Window And Façade Cleaning",
      "Commercial, Education, Healthcare And Industrial Cleaning",
    ],

    outcomes: [
      "Cleaner, Healthier Workplaces",
      "Service Plans Matched To Site Use",
      "Professional Presentation Every Day",
    ],

    process: [
      {
        title: "Assess",
        text:
          "Review surfaces, traffic patterns, hygiene risks and operating hours.",
      },
      {
        title: "Design",
        text:
          "Set the cleaning scope, frequencies, methods, staffing and equipment.",
      },
      {
        title: "Deliver",
        text:
          "Execute daily and periodic tasks through trained, supervised teams.",
      },
      {
        title: "Verify",
        text:
          "Inspect results, record performance and address service observations.",
      },
    ],

    sectors: [
      "Commercial",
      "Education",
      "Healthcare",
      "Industrial",
    ],
  },

  {
    id: 4,
    slug: "Soft-Facility-Management",
    title: "Soft Facilities Management",
    menuTitle: "Soft Facilities Management",
    category: "Integrated Facility Management",

    shortDescription:
      "Coordinated soft facilities management services supported by technical MEP solutions for clean, safe and efficient facilities.",

    description:
      "IOC/ECO brings essential soft facilities management services under one accountable team. We shape each programme around the facility, its occupants and the client’s operating standards, then coordinate people, schedules, supplies, technical support and quality checks to deliver a consistent workplace experience.",

    overviewTitle:
      "Integrated Soft Facilities Management For Every Facility",

    icon: FaUsersCog,

    features: [
      "Housekeeping And Workplace Support",
      "Hospitality And Pantry Support",
      "Reception And Front-Of-House Assistance",
      "Washroom And Hygiene Management",
      "External-Area And Common-Area Care",
      "Consumables Planning And Replenishment",
    ],

    outcomes: [
      "One Coordinated Service Plan",
      "Consistent Presentation Standards",
      "Responsive On-Site Support",
    ],

    process: [
      {
        title: "Understand",
        text:
          "Review the site, occupancy profile and daily operational requirements.",
      },
      {
        title: "Plan",
        text:
          "Define staffing, schedules, materials, responsibilities and service levels.",
      },
      {
        title: "Mobilize",
        text:
          "Deploy trained teams with clear procedures and site-specific supervision.",
      },
      {
        title: "Improve",
        text:
          "Monitor delivery, resolve issues and continually refine the programme.",
      },
    ],

    sectors: [
      "Offices",
      "Hospitality",
      "Education",
      "Residential Communities",
    ],

    /*
     * MEP IS NOW PART OF SOFT FACILITIES MANAGEMENT
     * It is intentionally not a top-level service.
     */
    subServices: [
      {
        id: 1,
        slug: "MEP",
        title: "Mechanical, Electrical And Plumbing Services",
        menuTitle: "MEP Services",
        category: "Technical Maintenance",

        shortDescription:
          "Proactive MEP and HVAC maintenance that supports reliable, efficient and safe building operations.",

        description:
          "IOC/ECO manages and maintains mechanical, electrical and plumbing systems using planned maintenance, technical inspections and responsive on-site support. Our focus is to improve system reliability, limit avoidable breakdowns and help critical building services perform efficiently.",

        overviewTitle:
          "Keeping Essential Building Systems Running",

        features: [
          "Mechanical-System Maintenance",
          "Electrical-System Inspections And Repairs",
          "Plumbing Maintenance And Response",
          "HVAC Servicing And Performance Checks",
          "Preventive And Corrective Maintenance",
          "Building Automation And Technical Support",
        ],

        outcomes: [
          "Fewer Avoidable Breakdowns",
          "Improved Operating Efficiency",
          "Safer, More Dependable Systems",
        ],

        process: [
          {
            title: "Inspect",
            text:
              "Review system condition, operating history and critical maintenance needs.",
          },
          {
            title: "Schedule",
            text:
              "Build a preventive plan around assets, risk and operational priorities.",
          },
          {
            title: "Service",
            text:
              "Complete planned work and responsive repairs with equipped technicians.",
          },
          {
            title: "Optimize",
            text:
              "Monitor recurring faults and recommend practical performance improvements.",
          },
        ],

        sectors: [
          "Healthcare",
          "Commercial Real Estate",
          "Data Centres",
          "Industrial Facilities",
        ],
      },
    ],
  },
];

export default services;