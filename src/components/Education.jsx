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
        <motion.div className="education-list" {...reveal}>
          <article className="edu-card current">
            <div className="edu-meta">
              <span>FEB 2026 — DEC 2026</span>
              <small>IN PROGRESS</small>
            </div>
            <h3>
              Level 7 + MBA (Top-Up)
              <br />
              Postgraduate Diploma / MBA Top-Up
            </h3>
            <p>IDM Nations Campus International</p>
            <p className="edu-dates">
              Enrolled February 2, 2026 · Expected graduation December 2026
            </p>
          </article>

          <article className="edu-card">
            <div className="edu-meta">
              <span>2023 — 2025</span>
              <small>COMPLETED</small>
            </div>
            <h3>
              Higher National Diploma
              <br />
              in Business Administration
            </h3>
            <p>SLIIT, Malabe · Specialization in Marketing Management</p>
          </article>
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
