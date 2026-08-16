import { motion } from "framer-motion";
import { Award, PlayCircle, TrendingUp } from "lucide-react";
import achievementVideo from "../images/Sabeer_Achievement.mp4";
import { reveal } from "../data/portfolio";

export default function Achievement() {
  return (
    <section id="achievement" className="achievement section">
      <div className="shell achievement-grid">
        <motion.div className="achievement-copy" {...reveal}>
          <p className="section-label">04 / BEST ACHIEVEMENT</p>
          <h2>
            Results worth
            <br />
            <span>celebrating.</span>
          </h2>
          <p>
            A milestone that reflects my focus on creative execution, audience
            growth, and content that delivers measurable impact.
          </p>

          <div className="achievement-points">
            <div>
              <TrendingUp size={19} />
              <span>
                <strong>13.2K+</strong>
                Organic community grown
              </span>
            </div>
            <div>
              <Award size={19} />
              <span>
                <strong>28%</strong>
                Lower cost per lead
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div className="achievement-video-wrap" {...reveal}>
          <div className="video-label">
            <PlayCircle size={17} /> Watch achievement
          </div>
          <video
            className="achievement-video"
            src={achievementVideo}
            controls
            playsInline
            preload="metadata"
            aria-label="Sabeerul Hasan best achievement video"
          >
            Your browser does not support the video element.
          </video>
        </motion.div>
      </div>
    </section>
  );
}
