const LINKS = ["Home", "About", "Services", "Contact"];

export default function MobileMenu({ open, onClose }) {
  return (
    <div className={`mobile-menu${open ? " open" : ""}`}>
      <button className="close-btn" aria-label="Close menu" onClick={onClose}>
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
          <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
      {LINKS.map((label) => (
        <a key={label} href={`#${label.toLowerCase()}`} onClick={onClose}>
          {label}
        </a>
      ))}
    </div>
  );
}
