import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { certifications, reveal } from "../data/portfolio";
export default function Education() {
  return (
    <section className="education section">
      <div className="shell edu-grid">
        <motion.div {...reveal}>
          <p className="section-label light">05 / EDUCATION</p>
          <h2>
            Always
            <br />
            <span>learning.</span>
          </h2>
        </motion.div>
        <motion.div className="edu-card" {...reveal}>
          <span>2023 — 2025</span>
          <h3>
            Higher National Diploma
            <br />
            in Business Administration
          </h3>
          <p>SLIIT, Malabe · Specialization in Marketing Management</p>
        </motion.div>
        <motion.div className="certs" {...reveal}>
          <h3>Credentials & workshops</h3>
          {certifications.map((x) => (
            <p key={x}>
              {x}
              <ArrowUpRight size={16} />
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
