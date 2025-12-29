import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience">
      <h2>Experience</h2>

      <div className="grid">
        {/* EXPERIENCE 1 */}
        <motion.div
          className="glass card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Web Developer</h3>
          <p style={styles.org}>Solid NGO • Kash College</p>
          <p style={styles.time}>July 2025 – Present</p>

          <p style={styles.desc}>
            Working on production-ready web applications to digitize NGO and
            college operations. Focused on building scalable MERN solutions,
            clean UI components, and interactive dashboards used by real users.
          </p>
        </motion.div>

        {/* EXPERIENCE 2 */}
        <motion.div
          className="glass card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3>Full Stack Developer</h3>
          <p style={styles.org}>Code for Good • JPMorgan Chase & Co.</p>
          <p style={styles.time}>June 2025</p>

          <p style={styles.desc}>
            Built an Agri-tech platform for an NGO under tight deadlines,
            implementing OTP login, Google OAuth, real-time features, and
            dashboards. Collaborated in a high-pressure hackathon environment
            to deliver a working solution.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

const styles = {
  org: {
    color: "#38bdf8",
    fontWeight: "600",
    marginTop: "6px",
  },
  time: {
    color: "#94a3b8",
    fontSize: "14px",
    marginBottom: "12px",
  },
  desc: {
    color: "#cbd5f5",
    lineHeight: "1.7",
  },
};
