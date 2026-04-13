import React, { useState } from "react";

function SocialBtn({ href, download, children }) {
  const [h, setH] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        background: h ? "#eff6ff" : "#ffffff",
        border: h ? "1px solid #bfdbfe" : "1px solid #e2e8f0",
        color: h ? "#2563eb" : "#475569",
        fontSize: "12px",
        fontWeight: "600",
        padding: "9px 20px",
        borderRadius: "8px",
        textDecoration: "none",
        transition: "all 0.2s",
        transform: h ? "translateY(-2px)" : "translateY(0)",
        display: "inline-block",
      }}
      {...(download ? { download: true } : {})}
    >
      {children}
    </a>
  );
}

export default function Footer() {
  const [emailH, setEmailH] = useState(false);
  return (
    <section id="contact" style={{ background: "#f8fafc", padding: "56px 60px", textAlign: "center", borderTop: "1px solid #e2e8f0" }}>
      <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#0f172a", marginBottom: "8px" }}>
        Let's build something together
      </h2>
      <p style={{ fontSize: "13px", color: "#64748b", marginBottom: "28px" }}>
        Open to Full Stack, Frontend & Backend internships at product companies
      </p>
      <a
        href="mailto:2200032487cseh@gmail.com"
        onMouseEnter={() => setEmailH(true)}
        onMouseLeave={() => setEmailH(false)}
        style={{
          display: "inline-block",
          background: emailH ? "#dbeafe" : "#eff6ff",
          color: "#2563eb",
          fontSize: "14px",
          fontWeight: "600",
          padding: "12px 28px",
          borderRadius: "8px",
          border: "1px solid #bfdbfe",
          marginBottom: "24px",
          textDecoration: "none",
          transform: emailH ? "translateY(-2px)" : "translateY(0)",
          boxShadow: emailH ? "0 4px 16px #2563eb22" : "none",
          transition: "all 0.2s",
        }}
      >
        2200032487cseh@gmail.com
      </a>
      <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginBottom: "36px" }}>
        <SocialBtn href="https://linkedin.com/in/meenakshi-yakkala">LinkedIn</SocialBtn>
        <SocialBtn href="https://github.com/YMeenakshi23">GitHub</SocialBtn>
        <SocialBtn href="/resume.pdf" download>Resume</SocialBtn>
      </div>
      <div style={{ fontSize: "11px", color: "#94a3b8" }}>
        © 2026 · Meenakshi Yakkala · Built with React
      </div>
    </section>
  );
}