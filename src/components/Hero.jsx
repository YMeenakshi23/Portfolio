import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import profileImg from "../assets/profile.jpg";

const highlights = [
  { icon: "🏦", label: "JPMorgan Code for Good '25", sub: "Selected nationally" },
  { icon: "🎓", label: "KL University — 9.6 GPA", sub: "B.Tech CSE, 2026" },
  { icon: "🛡️", label: "CEH + Red Hat + JNCIA", sub: "3 industry certifications" },
  { icon: "⚡", label: "2 Live Production Apps", sub: "MERN + Spring Boot" },
];

const stats = [
  { num: "2", label: "Live Projects" },
  { num: "3", label: "Certifications" },
  { num: "9.6", label: "GPA" },
  { num: "JPM", label: "Code for Good" },
];

export default function Hero() {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    if (!showWelcome) return undefined;
    const t = window.setTimeout(() => setShowWelcome(false), 8000);
    return () => window.clearTimeout(t);
  }, [showWelcome]);

  return (
    <section id="home" className="hero" aria-labelledby="hero-heading">
      <div className="hero__grid">
        <div>
          <p className="hero__eyebrow">
            OPEN TO INTERNSHIPS &amp; FULL-TIME ROLES · 2026
          </p>
          <h1 id="hero-heading" className="hero__title">
            Hi, I&apos;m <span>Meenakshi</span>
          </h1>
          <p className="hero__role">
            Full Stack Developer · MERN · Spring Boot · React
          </p>
          <p className="hero__bio">
            I build production-ready web applications — not just class projects.
            Shipped a live Agri-tech platform at JPMorgan&apos;s Code for Good
            2025. Red Hat Certified · CEH · KL University &apos;26 (9.6 GPA).
          </p>
          <div className="hero__actions">
            <button
              type="button"
              className="btn btn--primary"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <span className="btn__label">View Projects</span>
            </button>
            <a
              className="btn btn--secondary"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="btn__label">View Resume</span>
            </a>
          </div>
          <div className="hero__stats">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="hero__stat-num">{s.num}</div>
                <div className="hero__stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <aside className="hero__aside">
          <button
            type="button"
            className="hero__photo-btn"
            onClick={() => setShowWelcome(true)}
            aria-label="Show a short welcome message"
          >
            <div className="hero__photo-ring">
              <div className="hero__photo-wrap">
                <img src={profileImg} alt="" />
              </div>
            </div>
          </button>
          {showWelcome &&
            createPortal(
              <div
                className="welcome-toast"
                role="status"
                aria-live="polite"
              >
                <p className="welcome-toast__text">
                  Hi, I&apos;m Meenakshi — hope you&apos;re doing well. Thanks for
                  viewing my portfolio!
                </p>
                <button
                  type="button"
                  className="welcome-toast__close"
                  onClick={() => setShowWelcome(false)}
                  aria-label="Dismiss message"
                >
                  ×
                </button>
              </div>,
              document.body
            )}
          <div className="hero__highlights">
            {highlights.map((h) => (
              <div key={h.label} className="highlight-card">
                <div className="highlight-card__icon" aria-hidden>
                  {h.icon}
                </div>
                <div className="highlight-card__label">{h.label}</div>
                <div className="highlight-card__sub">{h.sub}</div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
