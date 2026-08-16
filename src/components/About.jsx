import { motion } from "framer-motion";
import { reveal } from "../data/portfolio";
export default function About() {
  return (
    <section id="about" className="about shell section">
      <motion.div {...reveal}>
        <p className="section-label">01 / ABOUT</p>
        <h2>
          Strategy-led.
          <br />
          <span>Creatively driven.</span>
        </h2>
      </motion.div>
      <motion.div className="about-copy" {...reveal}>
        <p className="lead">
          I combine creative instinct with campaign thinking to make real estate
          brands feel human, relevant and impossible to scroll past.
        </p>
        <p>
          From the first content idea to the final performance report, I manage
          the full workflow: scripting, shooting, editing, design, publishing
          and optimization.
        </p>
        <div className="stats">
          <div>
            <strong>13.2K+</strong>
            <span>Organic followers grown</span>
          </div>
          <div>
            <strong>28%</strong>
            <span>Reduction in CPL</span>
          </div>
          <div>
            <strong>300+</strong>
            <span>Qualified leads</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
