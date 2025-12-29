import { motion } from "framer-motion";
import {
  Code,
  Server,
  Database,
  ShieldCheck,
  Wrench,
  Sparkles
} from "lucide-react";

const skills = [
  {
    title: "Frontend",
    icon: <Code />,
    items: [
      { name: "React.js", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "HTML & CSS", level: 80 },
    ],
  },
  {
    title: "Backend",
    icon: <Server />,
    items: [
      { name: "Spring Boot", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 75 },
    ],
  },
  {
    title: "Databases",
    icon: <Database />,
    items: [
      { name: "MongoDB", level: 80 },
      { name: "MySQL", level: 75 },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: <Wrench />,
    items: [
      { name: "Git & GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "IntelliJ / Eclipse", level: 80 },
    ],
  },
  {
    title: "Security",
    icon: <ShieldCheck />,
    items: [
      { name: "Secure Auth (OTP, OAuth)", level: 75 },
      { name: "Ethical Hacking Basics", level: 70 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>

      <div className="grid">
        {skills.map((group, index) => (
          <motion.div
            key={index}
            className="glass card skill-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div style={styles.header}>
              <span style={styles.icon}>{group.icon}</span>
              <h3>{group.title}</h3>
            </div>

            {group.items.map((skill, i) => (
              <div key={i} style={{ marginBottom: "12px" }}>
                <div style={styles.label}>
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>

                <div className="skill-bar">
                  <motion.div
                    className="skill-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        ))}
      </div>

      {/* CURRENTLY LEARNING */}
      <motion.div
        className="glass card"
        style={{ marginTop: "60px" }}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h3 style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <Sparkles color="#38bdf8" /> Currently Learning
        </h3>

        <div style={styles.learning}>
          <span className="badge">Advanced Spring Boot</span>
          <span className="badge">Cloud & Deployment</span>
          <span className="badge">System Design Basics</span>
          <span className="badge">Security Best Practices</span>
        </div>
      </motion.div>
    </section>
  );
}

const styles = {
  header: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "20px",
  },
  icon: {
    color: "#38bdf8",
  },
  label: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "14px",
    color: "#cbd5f5",
  },
  learning: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
    marginTop: "15px",
  },
};
