import React from "react";

const projects = [
  {
    badge: "INFOSYS SPRINGBOARD 7.0",
    title: "Carbon Footprint Tracker",
    desc: "Full-stack sustainability analytics platform with separate user, organization (CSR), and admin modules. Real-time emission engine, analytics dashboards, goals, badges & leaderboard. Secured with Spring Security 6 JWT, Google OAuth, and email-OTP reset. Includes EcoBot (Gemini AI assistant), multi-language support, and an installable PWA.",
    tech: [
      "React.js",
      "Spring Boot",
      "PostgreSQL",
      "Tailwind CSS",
      "JWT",
      "Gemini API",
    ],
    github: "https://github.com/YMeenakshi23/CarbonFootprint-Tracker",
    live: "https://carbon-footprint-tracker-swart.vercel.app/",
  },
  {
    badge: "JPMORGAN CODE FOR GOOD",
    title: "CML's Barn Live",
    desc: "Agri-tech platform for NGO CML — full frontend ownership. Role-based access for 3 user types, OTP + Google OAuth login, real-time chat, Razorpay donations, SMS crop alerts & data dashboards. Delivered in a 24-hour sprint.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Razorpay",
      "Twilio",
    ],
    github: "https://github.com/YMeenakshi23",
    live: "https://cfg-hyd-2025-jpmc.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="section section--muted"
      aria-labelledby="projects-heading"
    >
      <div className="section__inner">
        <header className="section-head">
          <span className="section-head__eyebrow">03</span>
          <h2 id="projects-heading" className="section-head__title">
            Projects
          </h2>
          <div className="section-head__line" aria-hidden />
        </header>
        <div className="projects-grid">
          {projects.map((p) => (
            <article key={p.title} className="project-card">
              <div className="project-card__accent" aria-hidden />
              <span className="project-card__badge">{p.badge}</span>
              <h3 className="project-card__title">{p.title}</h3>
              <p className="project-card__desc">{p.desc}</p>
              <div className="project-card__tech">
                {p.tech.map((t) => (
                  <span key={t} className="tech-chip">
                    {t}
                  </span>
                ))}
              </div>
              <div className="project-card__links">
                {p.github && (
                  <a
                    className="link-arrow"
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                )}
                {p.live && (
                  <a
                    className="link-arrow"
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
