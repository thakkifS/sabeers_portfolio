import { useEffect, useState } from "react";
import {
  BriefcaseBusiness,
  Download,
  Layers3,
  Mail,
  UserRound,
} from "lucide-react";

const links = [
  { label: "About", href: "#about", icon: UserRound },
  { label: "Expertise", href: "#expertise", icon: Layers3 },
  { label: "Experience", href: "#experience", icon: BriefcaseBusiness },
  { label: "Contact", href: "#contact", icon: Mail },
];

export default function MobileBottomNav() {
  const [active, setActive] = useState("About");

  useEffect(() => {
    const scroller = document.querySelector("main");
    const updateActive = () => {
      const current = links.reduce(
        (closest, link) => {
          const section = document.querySelector(link.href);
          if (!section) return closest;
          const distance = Math.abs(section.getBoundingClientRect().top - 120);
          return distance < closest.distance
            ? { label: link.label, distance }
            : closest;
        },
        { label: "About", distance: Infinity },
      );
      setActive(current.label);
    };
    updateActive();
    scroller?.addEventListener("scroll", updateActive, { passive: true });
    return () => scroller?.removeEventListener("scroll", updateActive);
  }, []);

  return (
    <nav className="mobile-bottom-nav" aria-label="Mobile navigation">
      {links.map(({ label, href, icon: Icon }) => (
        <a
          className={active === label ? "active" : ""}
          key={label}
          href={href}
          aria-label={label}
          aria-current={active === label ? "page" : undefined}
        >
          <Icon size={19} />
          <span>{label}</span>
        </a>
      ))}
      <a
        className="cv-download"
        href="/Sabeerul-Hasan-CV.pdf"
        download
        aria-label="Download CV"
      >
        <Download size={19} />
        <span>CV</span>
      </a>
    </nav>
  );
}
