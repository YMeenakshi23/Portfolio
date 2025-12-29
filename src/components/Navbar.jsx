import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={styles.nav}
    >
      <h3 style={styles.name}>Yakkala G L Meenakshi</h3>

      <div style={styles.links}>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </div>
    </motion.nav>
  );
}

const styles = {
  nav: {
    position: "sticky",
    top: 0,
    zIndex: 100,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "18px 10%",
    background: "rgba(2,6,23,0.7)",
    backdropFilter: "blur(14px)",
    borderBottom: "1px solid #1e293b",
  },
  name: {
    background: "linear-gradient(90deg,#38bdf8,#818cf8)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  links: {
    display: "flex",
    gap: "20px",
  },
};
