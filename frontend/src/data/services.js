import {
  FaBroom,
  FaBuilding,
  FaBug,
  FaRecycle,
  FaTools,
  FaUsersCog,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    slug: "Soft-Facility-Management",
    title: "Soft Facility Management",
    menuTitle: "Soft Facility Management",
    category: "People & workplace services",
    shortDescription:
      "Coordinated workplace services that keep facilities clean, welcoming and ready for everyday operations.",
    description:
      "IOC/ECO brings essential non-technical services under one accountable team. We shape each programme around the facility, its occupants and the client’s operating standards, then coordinate people, schedules, supplies and quality checks to deliver a consistent workplace experience.",
    overviewTitle: "A better everyday experience for every facility",
    icon: FaUsersCog,
    features: [
      "Housekeeping and workplace support",
      "Hospitality and pantry support",
      "Reception and front-of-house assistance",
      "Washroom and hygiene management",
      "External-area and common-area care",
      "Consumables planning and replenishment",
    ],
    outcomes: [
      "One coordinated service plan",
      "Consistent presentation standards",
      "Responsive on-site support",
    ],
    process: [
      {
        title: "Understand",
        text: "Review the site, occupancy profile and daily operational requirements.",
      },
      {
        title: "Plan",
        text: "Define staffing, schedules, materials, responsibilities and service levels.",
      },
      {
        title: "Mobilize",
        text: "Deploy trained teams with clear procedures and site-specific supervision.",
      },
      {
        title: "Improve",
        text: "Monitor delivery, resolve issues and continually refine the programme.",
      },
    ],
    sectors: ["Offices", "Hospitality", "Education", "Residential communities"],
  },
  {
    id: 2,
    slug: "Hard-Facility-Management",
    title: "Hard Facility Management",
    menuTitle: "Hard Facility Management",
    category: "Asset & building performance",
    shortDescription:
      "Planned technical care for critical building assets, infrastructure and life-safety systems.",
    description:
      "IOC/ECO supports the performance and reliability of essential building systems through structured asset care. Our teams combine planned maintenance, responsive repairs, inspections and performance monitoring to protect assets, reduce disruption and support safe facility operations.",
    overviewTitle: "Protecting the systems your operation depends on",
    icon: FaBuilding,
    features: [
      "Asset inspections and condition reporting",
      "Planned preventive maintenance",
      "Corrective and reactive maintenance",
      "Building fabric and infrastructure support",
      "Fire and life-safety system coordination",
      "Asset records and maintenance reporting",
    ],
    outcomes: [
      "Improved asset reliability",
      "Reduced operational disruption",
      "Longer equipment service life",
    ],
    process: [
      {
        title: "Survey",
        text: "Assess the facility, asset condition, risks and current maintenance practices.",
      },
      {
        title: "Prioritize",
        text: "Identify critical systems and establish the maintenance strategy.",
      },
      {
        title: "Maintain",
        text: "Deliver planned and corrective work through qualified technical teams.",
      },
      {
        title: "Report",
        text: "Track performance, recurring issues and improvement opportunities.",
      },
    ],
    sectors: ["Commercial real estate", "Healthcare", "Education", "Industrial facilities"],
  },
  {
    id: 3,
    slug: "PestControl",
    title: "Pest Control Services",
    menuTitle: "Pest Control",
    category: "Integrated pest management",
    shortDescription:
      "Targeted, environmentally responsible pest management built around inspection, prevention and monitoring.",
    description:
      "IOC/ECO delivers sustainable pest-management programmes across Saudi Arabia. We begin with a detailed site survey, identify activity and contributing conditions, then combine sanitation guidance, pest proofing, targeted treatment and ongoing monitoring to help maintain a safe, pest-free environment.",
    overviewTitle: "Control the cause, not only the visible problem",
    icon: FaBug,
    features: [
      "Crawling and flying insect control",
      "Rodent, termite and bedbug control",
      "Fumigation and specialist treatments",
      "Pest proofing and prevention",
      "Sanitation and risk recommendations",
      "Scheduled monitoring and reporting",
    ],
    outcomes: [
      "Site-specific treatment plans",
      "Reduced risk of recurrence",
      "Responsible product selection",
    ],
    process: [
      {
        title: "Inspect",
        text: "Survey the premises and identify signs of activity, access points and risk areas.",
      },
      {
        title: "Identify",
        text: "Confirm the pest and evaluate sanitation and environmental conditions.",
      },
      {
        title: "Control",
        text: "Apply proofing, preventive measures and targeted treatments where required.",
      },
      {
        title: "Monitor",
        text: "Track activity, document results and adjust the programme over time.",
      },
    ],
    sectors: ["Food operations", "Healthcare", "Hospitality", "Residential and industrial sites"],
  },
  {
    id: 4,
    slug: "Janitorial",
    title: "Janitorial Services",
    menuTitle: "Janitorial Services",
    category: "Professional cleaning",
    shortDescription:
      "Professional daily and specialist cleaning for healthier, safer and better-presented environments.",
    description:
      "From daily cleaning to demanding specialist assignments, IOC/ECO develops practical cleaning programmes around each facility’s use, footfall and hygiene requirements. Trained teams, appropriate equipment and active supervision help us maintain dependable standards across indoor and outdoor spaces.",
    overviewTitle: "A touch of perfection, delivered consistently",
    icon: FaBroom,
    features: [
      "Daily cleaning, dusting and sanitizing",
      "Deep cleaning for indoor and outdoor areas",
      "Floor sweeping, mopping and vacuuming",
      "Washroom and high-touch-point cleaning",
      "Window and façade cleaning",
      "Commercial, education, healthcare and industrial cleaning",
    ],
    outcomes: [
      "Cleaner, healthier workplaces",
      "Service plans matched to site use",
      "Professional presentation every day",
    ],
    process: [
      {
        title: "Assess",
        text: "Review surfaces, traffic patterns, hygiene risks and operating hours.",
      },
      {
        title: "Design",
        text: "Set the cleaning scope, frequencies, methods, staffing and equipment.",
      },
      {
        title: "Deliver",
        text: "Execute daily and periodic tasks through trained, supervised teams.",
      },
      {
        title: "Verify",
        text: "Inspect results, record performance and address service observations.",
      },
    ],
    sectors: ["Commercial", "Education", "Healthcare", "Industrial"],
  },
  {
    id: 5,
    slug: "MEP",
    title: "Mechanical, Electrical and Plumbing Services",
    menuTitle: "MEP Services",
    category: "Technical maintenance",
    shortDescription:
      "Proactive MEP and HVAC maintenance that supports reliable, efficient and safe building operations.",
    description:
      "IOC/ECO manages and maintains mechanical, electrical and plumbing systems using planned maintenance, technical inspections and responsive on-site support. Our focus is to improve system reliability, limit avoidable breakdowns and help critical building services perform efficiently.",
    overviewTitle: "Keeping essential building systems running",
    icon: FaTools,
    features: [
      "Mechanical-system maintenance",
      "Electrical-system inspections and repairs",
      "Plumbing maintenance and response",
      "HVAC servicing and performance checks",
      "Preventive and corrective maintenance",
      "Building automation and technical support",
    ],
    outcomes: [
      "Fewer avoidable breakdowns",
      "Improved operating efficiency",
      "Safer, more dependable systems",
    ],
    process: [
      {
        title: "Inspect",
        text: "Review system condition, operating history and critical maintenance needs.",
      },
      {
        title: "Schedule",
        text: "Build a preventive plan around assets, risk and operational priorities.",
      },
      {
        title: "Service",
        text: "Complete planned work and responsive repairs with equipped technicians.",
      },
      {
        title: "Optimize",
        text: "Monitor recurring faults and recommend practical performance improvements.",
      },
    ],
    sectors: ["Healthcare", "Commercial real estate", "Data centres", "Industrial facilities"],
  },
  {
    id: 6,
    slug: "WasteManagement",
    title: "Waste Management Services",
    menuTitle: "Waste Management",
    category: "Environmental services",
    shortDescription:
      "Responsible collection and handling solutions for municipal, construction, wastewater and specialist waste streams.",
    description:
      "IOC/ECO provides dependable waste and wastewater services for facilities and projects across Saudi Arabia. We match the collection method, equipment and service frequency to each waste stream while supporting safe handling, responsible disposal and cleaner operating environments.",
    overviewTitle: "Practical waste solutions, responsibly managed",
    icon: FaRecycle,
    features: [
      "Municipal solid-waste collection",
      "Construction and demolition waste",
      "Wastewater and sewage removal",
      "Hazardous and medical waste support",
      "Recycling and waste-diversion programmes",
      "RORO bins, lugger bins, compactors and tankers",
    ],
    outcomes: [
      "Reliable collection schedules",
      "Equipment matched to each site",
      "Cleaner and safer operations",
    ],
    process: [
      {
        title: "Profile",
        text: "Identify waste streams, volumes, site constraints and collection needs.",
      },
      {
        title: "Configure",
        text: "Select suitable containers, vehicles, frequencies and handling procedures.",
      },
      {
        title: "Collect",
        text: "Deliver scheduled or responsive collection through equipped operations teams.",
      },
      {
        title: "Document",
        text: "Maintain service records and support responsible transfer and disposal.",
      },
    ],
    sectors: ["Commercial", "Healthcare", "Construction", "Industrial"],
  },
];

export default services;
