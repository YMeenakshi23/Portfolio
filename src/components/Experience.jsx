import React from "react";

const experiences = [
  {
    logo: "JP",
    title: "Full Stack Developer — Code for Good 2025",
    company: "JPMorgan Chase & Co.",
    date: "June 2025 · 24-hour Hackathon",
    desc: "Selected among national applicants. Sole frontend developer — owned all React UI, role-based dashboards, chatbot UI, Razorpay flows, and multi-mode auth (Google OAuth + OTP + email). Delivered a fully functional live platform in 24 hours.",
    color: "#1e3a5f",
  },
  {
    logo: "NG",
    title: "Web Developer",
    company: "Solid NGO — Kash College",
    date: "July 2025 – October 2025",
    desc: "Building a production MERN + EJS platform to digitize operations for 500+ stakeholders. Full ownership of frontend architecture — designed 8+ interactive React data-visualization components.",
    color: "#0d9488",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="section section--surface"
      aria-labelledby="experience-heading"
    >
      <div className="section__inner">
        <header className="section-head">
          <span className="section-head__eyebrow">04</span>
          <h2 id="experience-heading" className="section-head__title">
            Experience
          </h2>
          <div className="section-head__line" aria-hidden />
        </header>
        <div className="exp-grid">
          {experiences.map((exp) => (
            <article key={exp.title} className="exp-card">
              <div className="exp-card__top">
                <div
                  className="exp-card__logo"
                  style={{
                    background: `${exp.color}14`,
                    borderColor: `${exp.color}44`,
                    color: exp.color,
                  }}
                >
                  {exp.logo}
                </div>
                <div className="exp-card__meta">
                  <h3 className="exp-card__title">{exp.title}</h3>
                  <div className="exp-card__company">{exp.company}</div>
                  <div className="exp-card__date">{exp.date}</div>
                </div>
              </div>
              <p className="exp-card__desc">{exp.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
