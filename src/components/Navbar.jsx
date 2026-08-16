import { useState } from "react";
import { ArrowUpRight, Download, Menu, X } from "lucide-react";
import { navigation } from "../data/portfolio";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="nav shell">
      <a className="logo" href="#top">
        SH<span>.</span>
      </a>
      <div className="navlinks">
        {navigation.map((n) => (
          <a key={n} href={`#${n.toLowerCase()}`}>
            {n}
          </a>
        ))}
      </div>
      <div className="nav-actions">
        <a className="nav-download" href="/Sabeerul-Hasan-CV.pdf" download>
          <Download size={15} /> Download CV
        </a>
        <a className="nav-cta" href="mailto:sabeerh2002@gmail.com">
          Let’s talk <ArrowUpRight size={16} />
        </a>
      </div>
      <button
        className="menu"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X /> : <Menu />}
      </button>
      {open && (
        <div className="mobile-menu">
          {navigation.map((n) => (
            <a
              onClick={() => setOpen(false)}
              key={n}
              href={`#${n.toLowerCase()}`}
            >
              {n}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
