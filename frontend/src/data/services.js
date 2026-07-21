import {
  FaBroom,
  FaTools,
  FaLeaf,
  FaBuilding,
  FaTruck,
  FaShieldAlt,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    slug: "Soft-Facility-Management",
    title: "Soft Facility Management",
    shortDescription:
      "Housekeeping, janitorial, hospitality, office support and other non-technical facility services.",
    description:
      "Our Soft Facility Management services are designed to maintain clean, comfortable and efficient workplaces. We provide reliable support services tailored to each client’s operational requirements.",
    icon: FaBroom,
    features: [
      "Housekeeping and janitorial services",
      "Office and workplace support",
      "Hospitality and concierge services",
      "Landscaping and external cleaning",
      "Consumables and hygiene management",
    ],
  },
  {
    id: 2,
    slug: "Hard-Facility-Management",
    title: "Hard Facility Management",
    shortDescription:
      "MEP, HVAC, electrical, plumbing and preventive maintenance solutions for reliable operations.",
    description:
      "Our Hard Facility Management team maintains essential building systems through preventive maintenance, corrective repairs and technical support.",
    icon: FaTools,
    features: [
      "Mechanical, electrical and plumbing services",
      "HVAC maintenance",
      "Preventive maintenance programs",
      "Corrective maintenance and repairs",
      "Building system inspections",
    ],
  },
  {
    id: 3,
    slug: "PestControl",
    title: "Pest Control Services",
    shortDescription:
      "Waste management, pest control, sewage removal and environmentally responsible service solutions.",
    description:
      "Our Environmental Services support healthier facilities and responsible operations through safe, compliant and sustainable service practices.",
    icon: FaLeaf,
    features: [
      "Waste collection and management",
      "Pest control services",
      "Sewage and wastewater removal",
      "Disinfection and sanitization",
      "Environmental compliance support",
    ],
  },
  {
    id: 4,
    slug: "Janitorial",
    title: "Janitorial Services",
    shortDescription:
      "Renovation, office setup, fit-out works and infrastructure improvement services.",
    description:
      "We provide project and fit-out support for offices, commercial spaces and operational facilities, from planning through final handover.",
    icon: FaBuilding,
    features: [
      "Office and commercial fit-out",
      "Renovation and refurbishment",
      "Interior improvement works",
      "Infrastructure modifications",
      "Project coordination and supervision",
    ],
  },
  {
    id: 5,
    slug: "MEP",
    title: "Mechanical, Electrical, and Plumbing (MEP) Services",
    shortDescription:
      "Transportation, accommodation support and operational assistance tailored to client needs.",
    description:
      "Our Logistics and Support services help clients maintain smooth daily operations through dependable transport, accommodation and workforce support.",
    icon: FaTruck,
    features: [
      "Transportation support",
      "Accommodation management",
      "Operational logistics",
      "Workforce movement coordination",
      "Site support services",
    ],
  },
  {
    id: 6,
    slug: "WasteManagement",
    title: "Waste Management Services",
    shortDescription:
      "Safety inspections, compliance support and risk-control practices for secure workplaces.",
    description:
      "We support clients in maintaining safe and compliant workplaces through inspections, risk-control practices and operational safety support.",
    icon: FaShieldAlt,
    features: [
      "Workplace safety inspections",
      "Risk identification and control",
      "Compliance support",
      "Safety documentation",
      "Operational safety monitoring",
    ],
  },
];

export default services;