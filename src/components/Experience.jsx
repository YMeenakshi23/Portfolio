import React from "react";

const experiences = [
  {
    logo: "IN",
    title: "Full Stack Developer Intern",
    company: "Infosys Springboard 7.0 — Virtual Internship",
    date: "June 2026 – August 2026",
    desc: "Built a Carbon Footprint Tracker end-to-end (React, Tailwind, Spring Boot, PostgreSQL) with user, organization (CSR), and admin modules. Implemented Spring Security 6 JWT + Google OAuth, an email-OTP reset flow, a real-time emission engine, and gamified analytics. Integrated a Gemini-powered AI assistant, multi-language support, and a PWA with an installable Android build. Deployed on Vercel and Render.",
    color: "#007cc3",
  },
  {
    logo: "JP",
    title: "Full Stack Developer — Code for Good 2025",
    company: "JPMorgan Chase & Co.",
    date: "June 2025 · 24-hour Hackathon",
    desc: "Selected among national applicants. Sole frontend developer — owned all React UI, role-based dashboards, chatbot UI, Razorpay flows, and multi-mode auth (Google OAuth + OTP + email). Delivered a fully functional live platform in 24 hours.",
    color: "#1e3a5f",
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