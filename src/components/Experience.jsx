import React, { useState } from "react";

const experiences = [
  {
    logo: "JP",
    title: "Full Stack Developer — Code for Good 2025",
    company: "JPMorgan Chase & Co.",
    date: "June 2025 · 24-hour Hackathon",
    desc: "Selected among national applicants. Sole frontend developer — owned all React UI, role-based dashboards, chatbot UI, Razorpay flows, and multi-mode auth (Google OAuth + OTP + email). Delivered a fully functional live platform in 24 hours.",
    color: "#2563eb",
  },
  {
    logo: "NG",
    title: "Web Developer",
    company: "Solid NGO — Kash College",
    date: "July 2025 – October 2025",
    desc: "Building a production MERN + EJS platform to digitize operations for 500+ stakeholders. Full ownership of frontend architecture — designed 8+ interactive React data-visualization components.",
    color: "#0f6e56",
  },
];

function ExpCard({ exp }) {
  const [h, setH] = useState(false);
  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        background: h ? "#ffffff" : "#f8fafc",
        border: h ? "1px solid #e2e8f0" : "1px solid #e2e8f0",
        borderRadius: "12px",
        padding: "24px",
        marginBottom: "16px",
        display: "flex",
        gap: "20px",
        alignItems: "flex-start",
        transform: h ? "translateY(-3px)" : "translateY(0)",
        boxShadow: h ? "0 6px 24px #00000010" : "none",
        transition: "all 0.2s",
      }}
    >
      <div style={{
        width: "46px", height: "46px", borderRadius: "10px",
        background: exp.color + "18", border: `1px solid ${exp.color}44`,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "13px", fontWeight: "800", color: exp.color, flexShrink: 0,
      }}>
        {exp.logo}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: "15px", fontWeight: "700", color: "#0f172a" }}>{exp.title}</div>
        <div style={{ fontSize: "13px", color: "#2563eb", fontWeight: "600", marginTop: "2px" }}>{exp.company}</div>
        <div style={{ fontSize: "11px", color: "#94a3b8", marginTop: "3px" }}>{exp.date}</div>
        <p style={{ fontSize: "13px", color: "#475569", marginTop: "10px", lineHeight: "1.7" }}>{exp.desc}</p>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" style={{ background: "#ffffff", padding: "56px 60px", borderBottom: "1px solid #e2e8f0" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "36px" }}>
        <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#0f172a" }}>Experience</h2>
        <div style={{ flex: 1, height: "1px", background: "#e2e8f0" }} />
      </div>
      {experiences.map((exp) => <ExpCard key={exp.title} exp={exp} />)}
    </section>
  );
}