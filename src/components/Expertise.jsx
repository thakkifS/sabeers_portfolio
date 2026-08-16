import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { reveal, skills } from "../data/portfolio";
export default function Expertise() {
  return (
    <section id="expertise" className="expertise section">
      <div className="shell">
        <motion.div className="section-head" {...reveal}>
          <div>
            <p className="section-label light">02 / EXPERTISE</p>
            <h2>
              What I bring
              <br />
              <span>to the table.</span>
            </h2>
          </div>
          <p>
            Full-stack social media marketing, shaped for fast-moving brands and
            Dubai’s competitive property market.
          </p>
        </motion.div>
        <div className="skill-grid">
          {skills.map((s, i) => (
            <motion.div
              className="skill"
              key={s}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.07 }}
            >
              <span>{String(i + 1).padStart(2, "0")}</span>
              <h3>{s}</h3>
              <ArrowUpRight />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
