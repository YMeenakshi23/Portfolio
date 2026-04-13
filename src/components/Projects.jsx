import React, { useState } from "react";

const projects = [
  {
    badge: "JPMORGAN CODE FOR GOOD",
    title: "CML's Barn Live",
    desc: "Agri-tech platform for NGO CML — full frontend ownership. Role-based access for 3 user types, OTP + Google OAuth login, real-time chat, Razorpay donations, SMS crop alerts & data dashboards. Delivered in a 24-hour sprint.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Razorpay", "Twilio"],
    github: "https://github.com/YMeenakshi23",
    live: "https://cfg-hyd-2025-jpmc.vercel.app/",
  },
  {
    badge: "FULL STACK · SPRING BOOT",
    title: "Zakishi — Cybersecurity Job Portal",
    desc: "Secured RESTful API for a cybersecurity-focused job portal. Full job lifecycle: post, search, apply, and track. Spring Boot backend + React SPA + MongoDB with CEH-aligned security practices.",
    tech: ["Spring Boot", "React.js", "Java", "MongoDB", "REST API"],
    github: null,
    live: "https://zakishi.onrender.com/",
  },
];

function LinkBtn({ href, children }) {
  const [h, setH] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        fontSize: "12px",
        color: h ? "#1d4ed8" : "#2563eb",
        fontWeight: "700",
        textDecoration: h ? "underline" : "none",
        transition: "all 0.15s",
      }}
    >
      {children}
    </a>
  );
}

function ProjectCard({ p }) {
  const [h, setH] = useState(false);
  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        background: "#ffffff",
        border: h ? "1px solid #2563eb" : "1px solid #e2e8f0",
        borderRadius: "12px",
        padding: "24px 24px 24px 28px",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transform: h ? "translateY(-4px)" : "translateY(0)",
        boxShadow: h ? "0 8px 30px #2563eb18" : "none",
        transition: "all 0.25s",
      }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, width: "4px", height: "100%", background: "#2563eb", borderRadius: "2px 0 0 2px" }} />
      <span style={{ display: "inline-block", background: "#eff6ff", color: "#2563eb", fontSize: "10px", fontWeight: "700", padding: "3px 10px", borderRadius: "4px", marginBottom: "10px" }}>
        {p.badge}
      </span>
      <div style={{ fontSize: "16px", fontWeight: "700", color: "#0f172a", marginBottom: "10px" }}>{p.title}</div>
      <p style={{ fontSize: "13px", color: "#64748b", lineHeight: "1.7", marginBottom: "16px", flex: 1 }}>{p.desc}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "18px" }}>
        {p.tech.map((t) => (
          <span key={t} style={{ background: "#eff6ff", color: "#2563eb", fontSize: "11px", padding: "3px 9px", borderRadius: "4px", border: "1px solid #bfdbfe" }}>{t}</span>
        ))}
      </div>
      <div style={{ display: "flex", gap: "16px" }}>
        {p.github && <LinkBtn href={p.github}>GitHub</LinkBtn>}
        {p.live && <LinkBtn href={p.live}>Live Demo</LinkBtn>}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" style={{ background: "#f8fafc", padding: "56px 60px", borderBottom: "1px solid #e2e8f0" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "36px" }}>
        <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#0f172a" }}>Projects</h2>
        <div style={{ flex: 1, height: "1px", background: "#e2e8f0" }} />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
        {projects.map((p) => <ProjectCard key={p.title} p={p} />)}
      </div>
    </section>
  );
}