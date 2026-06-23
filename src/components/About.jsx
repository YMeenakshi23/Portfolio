import React from "react";

const tags = [
  "React.js",
  "Node.js",
  "Spring Boot",
  "MongoDB",
  "Java",
  "CEH",
  "Red Hat",
  "JNCIA-Junos",
];

export default function About() {
  return (
    <section id="about" className="section section--muted" aria-labelledby="about-heading">
      <div className="section__inner">
        <header className="section-head">
          <span className="section-head__eyebrow">01</span>
          <h2 id="about-heading" className="section-head__title">
            About
          </h2>
          <div className="section-head__line" aria-hidden />
        </header>
        <div className="about-card">
          <p>
            <span className="accent">I build software, not assignments.</span> As
            a final-year CSE student at KL University (9.6 GPA), I specialize in{" "}
            <span className="accent">full-stack development</span> using React,
            Spring Boot, and the MERN stack — with a strong focus on security and
            scalability.
          </p>
          <p>
            I&apos;ve worked on real NGO platforms, shipped live applications,
            and performed in high-pressure hackathons — most recently at{" "}
            <span className="accent">
              JPMorgan Chase&apos;s Code for Good 2025
            </span>
            , where I owned the entire frontend of a production Agri-tech
            platform, delivered in 24 hours.
          </p>
          <p>
            Outside of coding, I hold certifications in{" "}
            <span className="accent">Red Hat Enterprise App Development</span>,{" "}
            <span className="accent">Certified Ethical Hacking (CEH)</span>, and{" "}
            <span className="accent">Juniper JNCIA-Junos</span> — because real
            growth happens outside the classroom.
          </p>
          <div className="about-tags">
            {tags.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
