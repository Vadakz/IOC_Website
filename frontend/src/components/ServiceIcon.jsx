export default function ServiceIcon({ id, color }) {
  switch (id) {
    case "waste":
      return (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
          <path
            d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14"
            stroke={color}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "janitorial":
      return (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
          <path
            d="M4 20l7-14 2 4-5 10H4zM13 6l3-3 5 5-3 3M9 15l6-6"
            stroke={color}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "pest":
      return (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="13" rx="5" ry="7" stroke={color} strokeWidth="1.8" />
          <path
            d="M12 6V3M8 6L6 4M16 6l2-2M7 12H3M21 12h-4M8 19l-2 2M16 19l2 2"
            stroke={color}
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    case "mep":
      return (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="3" stroke={color} strokeWidth="1.8" />
          <path
            d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"
            stroke={color}
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    case "scenting":
      return (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
          <path
            d="M9 3h6v4l3 4v7a2 2 0 01-2 2H8a2 2 0 01-2-2v-7l3-4V3z"
            stroke={color}
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path d="M9 12h6" stroke={color} strokeWidth="1.6" />
        </svg>
      );
    default:
      return null;
  }
}
