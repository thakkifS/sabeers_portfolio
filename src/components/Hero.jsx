import { motion } from "framer-motion";
import { ArrowDownRight, Phone } from "lucide-react";
import portrait from "../images/Sabeer.jpeg";
export default function Hero() {
  return (
    <>
      <header id="top" className="hero shell">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="eyebrow">
            <span /> DUBAI-BASED CREATIVE MARKETER
          </p>
          <h1>
            I turn property
            <br />
            stories into <em>attention.</em>
          </h1>
          <p className="intro">
            I’m Sabeerul Hasan, a Social Media Marketing Manager creating
            scroll-stopping content, campaigns and digital growth for ambitious
            real estate brands.
          </p>
          <div className="hero-actions">
            <a className="button dark" href="#experience">
              Explore my work <ArrowDownRight size={18} />
            </a>
            <a className="text-link" href="tel:+971503595587">
              <Phone size={17} /> +971 50 359 5587
            </a>
          </div>
        </motion.div>
        <motion.div
          className="portrait-wrap"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          <div className="portrait">
            <img src={portrait} alt="Sabeerul Hasan" />
          </div>
          <div className="available">
            <i /> Available for creative opportunities
          </div>
          <div className="experience-badge">
            <strong>5+</strong>
            <span>
              YEARS OF
              <br />
              EXPERIENCE
            </span>
          </div>
        </motion.div>
      </header>
      <section className="ticker">
        <div>
          CONTENT STRATEGY <i /> REAL ESTATE MARKETING <i /> VIDEO PRODUCTION{" "}
          <i /> META ADS <i /> BRAND STORYTELLING <i /> CONTENT STRATEGY <i />{" "}
          REAL ESTATE MARKETING
        </div>
      </section>
    </>
  );
}
