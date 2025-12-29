import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={styles.footer}
    >
      <h2 style={styles.name}>Yakkala G L Meenakshi</h2>
      <p style={styles.role}>Full Stack Developer • Cybersecurity Enthusiast</p>

      <p style={styles.text}>
        Want to build something impactful together? <br />
        <span style={styles.highlight}>Contact me via mail</span>
      </p>

      <a href="mailto:2200032487cseh@gmail.com" style={styles.mail}>
        <Mail size={18} /> 2200032487cseh@gmail.com
      </a>

      <div style={styles.icons}>
        <a
          href="https://linkedin.com/in/meenakshi-yakkala"
          target="_blank"
          rel="noreferrer"
          style={styles.icon}
        >
          <Linkedin />
        </a>

        <a
          href="https://github.com/YMeenakshi23"
          target="_blank"
          rel="noreferrer"
          style={styles.icon}
        >
          <Github />
        </a>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          style={styles.icon}
        >
          <FileText />
        </a>
      </div>

      <p style={styles.copy}>
        © {new Date().getFullYear()} • Built with React & ❤️
      </p>
    </motion.footer>
  );
}

const styles = {
  footer: {
    marginTop: "120px",
    padding: "80px 20px",
    background: "linear-gradient(180deg, #020617, #020617cc)",
    backdropFilter: "blur(12px)",
    textAlign: "center",
    borderTop: "1px solid #1e293b",
  },
  name: {
    fontSize: "28px",
    fontWeight: "700",
    background: "linear-gradient(90deg, #38bdf8, #818cf8)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "6px",
  },
  role: {
    color: "#94a3b8",
    marginBottom: "20px",
  },
  text: {
    color: "#cbd5f5",
    fontSize: "16px",
    lineHeight: "1.6",
  },
  highlight: {
    color: "#38bdf8",
    fontWeight: "600",
  },
  mail: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    marginTop: "15px",
    color: "#38bdf8",
    textDecoration: "none",
    fontSize: "16px",
  },
  icons: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "30px",
  },
  icon: {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    border: "1px solid #1e293b",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#e5e7eb",
    transition: "all 0.3s ease",
  },
  copy: {
    marginTop: "40px",
    fontSize: "14px",
    color: "#64748b",
  },
};
