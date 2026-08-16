import { useState } from "react";
import { Mail, Share2, X } from "lucide-react";

function BrandIcon({ brand }) {
  if (brand === "Instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.4" cy="6.7" r="1" className="brand-fill" />
      </svg>
    );
  }
  if (brand === "YouTube") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M21 8.1a3 3 0 0 0-2.1-2.2C17.1 5.4 12 5.4 12 5.4s-5.1 0-6.9.5A3 3 0 0 0 3 8.1a31 31 0 0 0 0 7.8 3 3 0 0 0 2.1 2.2c1.8.5 6.9.5 6.9.5s5.1 0 6.9-.5a3 3 0 0 0 2.1-2.2 31 31 0 0 0 0-7.8Z" />
        <path d="m10 9 5 3-5 3Z" className="brand-fill" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="letter-icon">
      <circle cx="12" cy="12" r="9" />
      <text x="12" y="16" textAnchor="middle">
        {brand === "LinkedIn" ? "in" : "f"}
      </text>
    </svg>
  );
}

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sabeer-ul-hasan-549299325/",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/sabeer_ul_hasan?igsh=MWczNm8xdHB1cmcydw%3D%3D&utm_source=qr",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1Cu4YTHTRS/?mibextid=wwXIfr",
  },
  { label: "YouTube", href: "https://www.youtube.com" },
  { label: "Email", href: "mailto:sabeerh2002@gmail.com", icon: Mail },
];

export default function SocialMediaRail() {
  const [open, setOpen] = useState(false);

  return (
    <aside
      className={`social-rail ${open ? "open" : ""}`}
      aria-label="Social media links"
    >
      <button
        className="social-toggle"
        type="button"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close social links" : "Open social links"}
        aria-expanded={open}
      >
        {open ? <X size={16} /> : <Share2 size={16} />}
      </button>
      <span className="social-rail-label">FOLLOW</span>
      {socialLinks.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noreferrer" : undefined}
          aria-label={label}
          title={label}
          onClick={() => setOpen(false)}
        >
          {Icon ? <Icon size={17} /> : <BrandIcon brand={label} />}
          <span>{label}</span>
        </a>
      ))}
    </aside>
  );
}
