import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { experience, reveal } from "../data/portfolio";
export default function Experience() {
  return (
    <section id="experience" className="section shell">
      <motion.div className="section-head exp-head" {...reveal}>
        <div>
          <p className="section-label">03 / EXPERIENCE</p>
          <h2>
            A career built
            <br />
            <span>on momentum.</span>
          </h2>
        </div>
        <p>
          Six years across content, paid media, audience growth and creative
          production.
        </p>
      </motion.div>
      <div className="timeline">
        {experience.map((job, i) => (
          <motion.article key={job.company} {...reveal}>
            <div className="year">{job.years}</div>
            <div className="job">
              <p>{job.place}</p>
              <h3>{job.role}</h3>
              <h4>{job.company}</h4>
              <div className="job-detail">
                <p>{job.copy}</p>
                <ul>
                  {job.points.map((p) => (
                    <li key={p}>
                      <Check size={15} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <span className="num">0{i + 1}</span>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
