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
    slug: "WasteManagement",
    title: "Waste Management Services",
    menuTitle: "Waste Management",
    category: "Environmental Services",

    shortDescription:
      "Responsible Collection And Handling Solutions For Municipal, Construction, Wastewater And Specialist Waste Streams.",

    image: "/images/waste-management.jpg",
    logo: "/images/ioc-eco-logo.png",

    description:
      "IOC/ECO Provides Dependable Waste And Wastewater Services For Facilities And Projects Across Saudi Arabia. We Match The Collection Method, Equipment And Service Frequency To Each Waste Stream While Supporting Safe Handling, Responsible Disposal And Cleaner Operating Environments.",

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
          "Identify Waste Streams, Volumes, Site Constraints And Collection Needs.",
      },

      {
        title: "Configure",
        text:
          "Select Suitable Containers, Vehicles, Frequencies And Handling Procedures.",
      },

      {
        title: "Collect",
        text:
          "Deliver Scheduled Or Responsive Collection Through Equipped Operations Teams.",
      },

      {
        title: "Document",
        text:
          "Maintain Service Records And Support Responsible Transfer And Disposal.",
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
      "Targeted, Environmentally Responsible Pest Management Built Around Inspection, Prevention And Monitoring.",

    description:
      "IOC/ECO Delivers Sustainable Pest-Management Programmes Across Saudi Arabia. We Begin With A Detailed Site Survey, Identify Activity And Contributing Conditions, Then Combine Sanitation Guidance, Pest Proofing, Targeted Treatment And Ongoing Monitoring To Help Maintain A Safe, Pest-Free Environment.",

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
          "Survey The Premises And Identify Signs Of Activity, Access Points And Risk Areas.",
      },

      {
        title: "Identify",
        text:
          "Confirm The Pest And Evaluate Sanitation And Environmental Conditions.",
      },

      {
        title: "Control",
        text:
          "Apply Proofing, Preventive Measures And Targeted Treatments Where Required.",
      },

      {
        title: "Monitor",
        text:
          "Track Activity, Document Results And Adjust The Programme Over Time.",
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
      "Professional Daily And Specialist Cleaning For Healthier, Safer And Better-Presented Environments.",

    description:
      "From Daily Cleaning To Demanding Specialist Assignments, IOC/ECO Develops Practical Cleaning Programmes Around Each Facility’s Use, Footfall And Hygiene Requirements. Trained Teams, Appropriate Equipment And Active Supervision Help Us Maintain Dependable Standards Across Indoor And Outdoor Spaces.",

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
          "Review Surfaces, Traffic Patterns, Hygiene Risks And Operating Hours.",
      },

      {
        title: "Design",
        text:
          "Set The Cleaning Scope, Frequencies, Methods, Staffing And Equipment.",
      },

      {
        title: "Deliver",
        text:
          "Execute Daily And Periodic Tasks Through Trained, Supervised Teams.",
      },

      {
        title: "Verify",
        text:
          "Inspect Results, Record Performance And Address Service Observations.",
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
    slug: "MEP",
    title: "Mechanical, Electrical And Plumbing Services",
    menuTitle: "MEP Services",
    category: "Technical Maintenance",

    shortDescription:
      "Proactive MEP And HVAC Maintenance That Supports Reliable, Efficient And Safe Building Operations.",

    description:
      "IOC/ECO Manages And Maintains Mechanical, Electrical And Plumbing Systems Using Planned Maintenance, Technical Inspections And Responsive On-Site Support. Our Focus Is To Improve System Reliability, Limit Avoidable Breakdowns And Help Critical Building Services Perform Efficiently.",

    overviewTitle:
      "Keeping Essential Building Systems Running",

    icon: FaTools,

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
          "Review System Condition, Operating History And Critical Maintenance Needs.",
      },

      {
        title: "Schedule",
        text:
          "Build A Preventive Plan Around Assets, Risk And Operational Priorities.",
      },

      {
        title: "Service",
        text:
          "Complete Planned Work And Responsive Repairs With Equipped Technicians.",
      },

      {
        title: "Optimize",
        text:
          "Monitor Recurring Faults And Recommend Practical Performance Improvements.",
      },
    ],

    sectors: [
      "Healthcare",
      "Commercial Real Estate",
      "Data Centres",
      "Industrial Facilities",
    ],
  },


  {
    id: 5,
    slug: "Soft-Facility-Management",
    title: "Soft Facility Management",
    menuTitle: "Soft Facility Management",
    category: "People & Workplace Services",

    shortDescription:
      "Coordinated Workplace Services That Keep Facilities Clean, Welcoming And Ready For Everyday Operations.",

    description:
      "IOC/ECO Brings Essential Non-Technical Services Under One Accountable Team. We Shape Each Programme Around The Facility, Its Occupants And The Client’s Operating Standards, Then Coordinate People, Schedules, Supplies And Quality Checks To Deliver A Consistent Workplace Experience.",

    overviewTitle:
      "A Better Everyday Experience For Every Facility",

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
          "Review The Site, Occupancy Profile And Daily Operational Requirements.",
      },

      {
        title: "Plan",
        text:
          "Define Staffing, Schedules, Materials, Responsibilities And Service Levels.",
      },

      {
        title: "Mobilize",
        text:
          "Deploy Trained Teams With Clear Procedures And Site-Specific Supervision.",
      },

      {
        title: "Improve",
        text:
          "Monitor Delivery, Resolve Issues And Continually Refine The Programme.",
      },
    ],

    sectors: [
      "Offices",
      "Hospitality",
      "Education",
      "Residential Communities",
    ],
  },
];

export default services;