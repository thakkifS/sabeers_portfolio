import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { reveal } from "../data/portfolio";
export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="shell">
        <motion.div {...reveal}>
          <p className="eyebrow">
            <span /> HAVE A PROJECT IN MIND?
          </p>
          <h2>
            Let’s create something
            <br />
            <em>worth watching.</em>
          </h2>
          <a className="button tan" href="mailto:sabeerh2002@gmail.com">
            Start a conversation <ArrowUpRight size={19} />
          </a>
        </motion.div>
        <div className="contact-grid">
          <a href="mailto:sabeerh2002@gmail.com">
            <Mail />
            <span>
              Email<small>sabeerh2002@gmail.com</small>
            </span>
          </a>
          <a href="tel:+971503595587">
            <Phone />
            <span>
              Phone<small>+971 50 359 5587</small>
            </span>
          </a>
          <div>
            <MapPin />
            <span>
              Location<small>Al Karama, Dubai, UAE</small>
            </span>
          </div>
          <a href="#">
            <ArrowUpRight />
            <span>
              LinkedIn<small>Connect with me</small>
            </span>
          </a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Sabeerul Hasan</span>
          <span>English · Tamil · Sinhala</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
