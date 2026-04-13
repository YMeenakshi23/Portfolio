import React from "react";

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="nav" aria-label="Primary">
      <button
        type="button"
        className="nav__brand"
        aria-label="Reload page"
        title="Reload page"
        onClick={() => window.location.reload()}
      >
        Meenakshi Yakkala
      </button>
      <div className="nav__links">
        {links.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            className="nav__link"
            onClick={() => scrollTo(id)}
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
}
