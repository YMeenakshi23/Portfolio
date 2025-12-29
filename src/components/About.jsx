import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2>About Me</h2>

      <motion.p
        style={{
          maxWidth: "850px",
          fontSize: "18px",
          lineHeight: "1.8",
          color: "#cbd5f5",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        <strong style={{ color: "#38bdf8" }}>
          I build software, not assignments.
        </strong>{" "}
        As a Computer Science Engineering student, I specialize in{" "}
        <span style={highlight}>full-stack development</span> using{" "}
        <span style={highlight}>React</span>,{" "}
        <span style={highlight}>Spring Boot</span>, and the{" "}
        <span style={highlight}>MERN stack</span>, with a strong focus on{" "}
        <span style={highlight}>security</span> and{" "}
        <span style={highlight}>scalability</span>. I’ve worked on real NGO
        platforms, shipped live applications, and performed in high-pressure
        hackathons — because real growth happens outside the classroom.
      </motion.p>
    </motion.section>
  );
}

const highlight = {
  color: "#38bdf8",
  fontWeight: "600",
};
