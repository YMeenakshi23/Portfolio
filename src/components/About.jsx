import React from "react";

export default function About() {
  return (
    <section id="about" style={{ background: "#f8fafc", padding: "56px 60px", borderBottom: "1px solid #e2e8f0" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "36px" }}>
        <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#0f172a" }}>About Me</h2>
        <div style={{ flex: 1, height: "1px", background: "#e2e8f0" }} />
      </div>
      <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "32px", maxWidth: "760px" }}>
        <p style={{ fontSize: "14px", color: "#475569", lineHeight: "1.85", marginBottom: "16px" }}>
          <span style={{ color: "#2563eb", fontWeight: "700" }}>I build software, not assignments.</span> As a
          final-year CSE student at KL University (9.6 GPA), I specialize in{" "}
          <span style={{ color: "#2563eb", fontWeight: "700" }}>full-stack development</span> using React,
          Spring Boot, and the MERN stack — with a strong focus on security and scalability.
        </p>
        <p style={{ fontSize: "14px", color: "#475569", lineHeight: "1.85", marginBottom: "16px" }}>
          I've worked on real NGO platforms, shipped live applications, and performed in
          high-pressure hackathons — most recently at{" "}
          <span style={{ color: "#2563eb", fontWeight: "700" }}>JPMorgan Chase's Code for Good 2025</span>, where
          I owned the entire frontend of a production Agri-tech platform, delivered in 24 hours.
        </p>
        <p style={{ fontSize: "14px", color: "#475569", lineHeight: "1.85", marginBottom: "16px" }}>
          Outside of coding, I hold certifications in{" "}
          <span style={{ color: "#2563eb", fontWeight: "700" }}>Red Hat Enterprise App Development</span>,{" "}
          <span style={{ color: "#2563eb", fontWeight: "700" }}>Certified Ethical Hacking (CEH)</span>, and{" "}
          <span style={{ color: "#2563eb", fontWeight: "700" }}>Juniper JNCIA-Junos</span> — because real growth
          happens outside the classroom.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "24px" }}>
          {["React.js","Node.js","Spring Boot","MongoDB","Java","CEH","Red Hat","JNCIA-Junos"].map((t) => (
            <span key={t} style={{ background: "#eff6ff", color: "#2563eb", fontSize: "11px", fontWeight: "600", padding: "4px 12px", borderRadius: "6px", border: "1px solid #bfdbfe" }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}