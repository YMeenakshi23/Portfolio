import React, { useState } from "react";

const skillGroups = [
  { title: "Frontend", skills: ["React.js", "JavaScript", "HTML & CSS", "EJS"] },
  { title: "Backend", skills: ["Node.js", "Express.js", "Spring Boot", "Django"] },
  { title: "Databases & Tools", skills: ["MongoDB", "MySQL", "Git", "GitHub"] },
  { title: "Auth & Integrations", skills: ["Google OAuth", "OTP / SMS", "Razorpay", "REST APIs"] },
  { title: "Security", skills: ["CEH Certified", "Secure Auth", "JNCIA-Junos", "Red Hat"] },
  { title: "Currently Learning", skills: ["System Design", "AWS / Cloud", "DSA", "Docker"] },
];

function SkillCard({ group }) {
  const [h, setH] = useState(false);
  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        background: h ? "#ffffff" : "#f8fafc",
        border: h ? "1px solid #2563eb" : "1px solid #e2e8f0",
        borderRadius: "12px",
        padding: "20px",
        transform: h ? "translateY(-3px)" : "translateY(0)",
        boxShadow: h ? "0 6px 20px #2563eb11" : "none",
        transition: "all 0.2s",
      }}
    >
      <div style={{ fontSize: "12px", fontWeight: "700", color: "#2563eb", marginBottom: "14px", letterSpacing: "0.5px", display: "flex", alignItems: "center", gap: "8px" }}>
        <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#2563eb" }} />
        {group.title}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {group.skills.map((skill) => (
          <span key={skill} style={{ background: "#ffffff", color: "#475569", fontSize: "11px", padding: "4px 10px", borderRadius: "6px", border: "1px solid #e2e8f0" }}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" style={{ background: "#ffffff", padding: "56px 60px", borderBottom: "1px solid #e2e8f0" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "36px" }}>
        <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#0f172a" }}>Skills</h2>
        <div style={{ flex: 1, height: "1px", background: "#e2e8f0" }} />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
        {skillGroups.map((group) => <SkillCard key={group.title} group={group} />)}
      </div>
    </section>
  );
}