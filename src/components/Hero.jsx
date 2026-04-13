import React, { useState } from "react";
import profileImg from "../assets/profile.jpg";

function PrimaryBtn({ children, onClick }) {
  const [h, setH] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        background: h ? "#1d4ed8" : "#2563eb",
        color: "#fff",
        padding: "11px 24px",
        borderRadius: "8px",
        fontSize: "13px",
        fontWeight: "700",
        border: "none",
        cursor: "pointer",
        transform: h ? "translateY(-2px)" : "translateY(0)",
        boxShadow: h ? "0 6px 20px #2563eb33" : "none",
        transition: "all 0.2s",
      }}
    >
      {children}
    </button>
  );
}

function SecondaryBtn({ children, href }) {
  const [h, setH] = useState(false);
  return (
    <a
      href={href}
      download
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        display: "inline-block",
        background: h ? "#eff6ff" : "transparent",
        color: "#2563eb",
        padding: "11px 24px",
        borderRadius: "8px",
        fontSize: "13px",
        fontWeight: "700",
        border: "1px solid #bfdbfe",
        cursor: "pointer",
        transform: h ? "translateY(-2px)" : "translateY(0)",
        transition: "all 0.2s",
        textDecoration: "none",
      }}
    >
      {children}
    </a>
  );
}

const highlights = [
  { icon: "🏦", label: "JPMorgan Code for Good '25", sub: "Selected nationally" },
  { icon: "🎓", label: "KL University — 9.6 GPA", sub: "B.Tech CSE, 2026" },
  { icon: "🛡️", label: "CEH + Red Hat + JNCIA", sub: "3 industry certifications" },
  { icon: "⚡", label: "2 Live Production Apps", sub: "MERN + Spring Boot" },
];

export default function Hero() {
  return (
    <section style={{
      background: "#ffffff",
      padding: "60px 60px 60px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: "60px",
      borderBottom: "1px solid #e2e8f0",
      flexWrap: "wrap",
    }}>

      {/* LEFT */}
      <div style={{ flex: 1, minWidth: "300px" }}>
        <div style={{
          display: "inline-block", background: "#eff6ff", color: "#2563eb",
          fontSize: "11px", fontWeight: "700", padding: "4px 14px",
          borderRadius: "20px", letterSpacing: "0.8px", marginBottom: "20px",
          border: "1px solid #bfdbfe",
        }}>
          OPEN TO INTERNSHIPS & FULL-TIME ROLES · 2026
        </div>
        <h1 style={{ fontSize: "48px", fontWeight: "800", lineHeight: "1.1", color: "#0f172a", marginBottom: "8px" }}>
          Hi, I'm <span style={{ color: "#2563eb" }}>Meenakshi</span>
        </h1>
        <p style={{ fontSize: "16px", color: "#64748b", fontWeight: "500", marginBottom: "16px" }}>
          Full Stack Developer · MERN · Spring Boot · React
        </p>
        <p style={{ fontSize: "14px", color: "#475569", lineHeight: "1.75", marginBottom: "28px", maxWidth: "460px" }}>
          I build production-ready web applications — not just class projects.
          Shipped a live Agri-tech platform at JPMorgan's Code for Good 2025.
          Red Hat Certified · CEH · KL University '26 (9.6 GPA).
        </p>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <PrimaryBtn onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}>
            View Projects
          </PrimaryBtn>
          <SecondaryBtn href="/resume.pdf">Download Resume</SecondaryBtn>
        </div>

        {/* Stats row */}
        <div style={{ display: "flex", gap: "32px", marginTop: "36px", paddingTop: "28px", borderTop: "1px solid #e2e8f0", flexWrap: "wrap" }}>
          {[
            { num: "2", label: "Live Projects" },
            { num: "3", label: "Certifications" },
            { num: "9.6", label: "GPA" },
            { num: "JPM", label: "Code for Good" },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "24px", fontWeight: "800", color: "#2563eb" }}>{s.num}</div>
              <div style={{ fontSize: "11px", color: "#94a3b8", marginTop: "3px" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "24px", minWidth: "280px" }}>

        {/* Bigger photo */}
        <div style={{
          width: "240px",
          height: "240px",
          borderRadius: "50%",
          border: "4px solid #2563eb",
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <img src={profileImg} alt="Meenakshi" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>

        {/* Highlight cards grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", width: "100%" }}>
          {highlights.map((h) => (
            <div key={h.label} style={{
              background: "#f8fafc",
              border: "1px solid #e2e8f0",
              borderRadius: "10px",
              padding: "12px 14px",
            }}>
              <div style={{ fontSize: "18px", marginBottom: "4px" }}>{h.icon}</div>
              <div style={{ fontSize: "11px", fontWeight: "700", color: "#0f172a", lineHeight: "1.4" }}>{h.label}</div>
              <div style={{ fontSize: "10px", color: "#94a3b8", marginTop: "2px" }}>{h.sub}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}