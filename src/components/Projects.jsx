import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="grid">
        {/* CML PROJECT */}
        <motion.div className="glass card" whileHover={{ scale: 1.05 }}>
          <h3>CML’s Barn Live</h3>
          <p>
            Agri-tech platform for NGO with farmer onboarding,
            OTP login, Google OAuth, real-time chat,
            donations, SMS alerts & dashboards.
          </p>

          <span className="badge">MERN Stack</span>

          <div style={styles.links}>
            <a
              href="https://github.com/hyderabad25/Team-27"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={18} /> GitHub
            </a>

            <a
              href="https://cfg-hyd-2025-jpmc.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink size={18} /> Live
            </a>
          </div>
        </motion.div>

        {/* ZAKISHI PROJECT */}
        <motion.div className="glass card" whileHover={{ scale: 1.05 }}>
          <h3>Zakishi – Cybersecurity Job Portal</h3>
          <p>
            Cybersecurity-focused job portal with secure authentication,
            job search, application tracking & REST APIs.
          </p>

          <span className="badge">Spring Boot • React</span>

          <div style={styles.links}>
            <a
              href="https://zakishi.onrender.com/"
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink size={18} /> Live
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const styles = {
  links: {
    marginTop: "20px",
    display: "flex",
    gap: "20px",
  },
};
