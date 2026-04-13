import React from "react";

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export default function Navbar() {
  return (
    <nav style={{
      background: "#ffffff",
      borderBottom: "1px solid #e2e8f0",
      padding: "16px 60px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      position: "sticky",
      top: 0,
      zIndex: 100,
    }}>
      <span style={{ color: "#2563eb", fontWeight: "800", fontSize: "16px", cursor: "pointer" }}>
        Meenakshi Yakkala
      </span>
      <div style={{ display: "flex", gap: "28px" }}>
        {["skills", "projects", "experience", "contact"].map((id) => (
          <span
            key={id}
            onClick={() => scrollTo(id)}
            onMouseEnter={(e) => {
              e.target.style.color = "#2563eb";
              e.target.style.fontWeight = "700";
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "#64748b";
              e.target.style.fontWeight = "500";
            }}
            style={{ color: "#64748b", fontSize: "13px", fontWeight: "500", cursor: "pointer", transition: "all 0.2s" }}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </span>
        ))}
      </div>
    </nav>
  );
}