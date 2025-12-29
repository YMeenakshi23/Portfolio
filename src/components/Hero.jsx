import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import profile from "../assets/profile.jpg";

const text =
  "I build secure, scalable, real-world web applications using React, Spring Boot, and the MERN stack";

export default function Hero() {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={styles.hero}
    >
      {/* LEFT TEXT */}
      <div>
        <h1>
          Hi, I’m{" "}
          <span style={styles.gradientText}>
            Yakkala G L Meenakshi
          </span>
        </h1>

        <h3 style={styles.subtitle}>
          Full Stack Developer • Cybersecurity Enthusiast
        </h3>

        <p style={styles.typing}>
          {displayText}
          {displayText.length === text.length && "."}
        </p>

        <div style={styles.buttons}>
          <a className="badge" href="#projects">View Projects</a>
          <a className="badge" href="/resume.pdf" target="_blank" rel="noreferrer">
            View Resume
          </a>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3 }}
        style={styles.imageWrapper}
      >
        <img src={profile} alt="Profile" style={styles.image} />
      </motion.div>
    </motion.section>
  );
}

const styles = {
  hero: {
    display: "grid",
    gridTemplateColumns: "1.2fr 0.8fr",
    gap: "60px",
    alignItems: "center",
  },
  gradientText: {
    background: "linear-gradient(90deg,#38bdf8,#818cf8)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  subtitle: {
    color: "#94a3b8",
    marginTop: "10px",
  },
  typing: {
    maxWidth: "650px",
    marginTop: "25px",
    minHeight: "60px",
  },
  buttons: {
    marginTop: "30px",
    display: "flex",
    gap: "16px",
  },
  imageWrapper: {
    display: "flex",
    justifyContent: "center",
  },
  image: {
    width: "260px",
    height: "260px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "4px solid rgba(56,189,248,0.4)",
    boxShadow: "0 0 40px rgba(56,189,248,0.35)",
  },
};
