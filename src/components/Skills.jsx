import React from "react";

const skillGroups = [
  { title: "Frontend", skills: ["React.js", "JavaScript", "HTML & CSS", "EJS"] },
  { title: "Backend", skills: ["Node.js", "Express.js", "Spring Boot", "Django"] },
  { title: "Databases & Tools", skills: ["MongoDB", "MySQL", "Git", "GitHub"] },
  {
    title: "Auth & Integrations",
    skills: ["Google OAuth", "OTP / SMS", "Razorpay", "REST APIs"],
  },
  {
    title: "Security",
    skills: ["CEH Certified", "Secure Auth", "JNCIA-Junos", "Red Hat"],
  },
  {
    title: "Currently Learning",
    skills: ["System Design", "AWS / Cloud", "DSA", "Docker"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="section section--surface"
      aria-labelledby="skills-heading"
    >
      <div className="section__inner">
        <header className="section-head">
          <span className="section-head__eyebrow">02</span>
          <h2 id="skills-heading" className="section-head__title">
            Skills
          </h2>
          <div className="section-head__line" aria-hidden />
        </header>

        <div className="skills-bento">
          {skillGroups.map((group) => (
            <article key={group.title} className="skill-tile">
              <h3 className="skill-tile__title">{group.title}</h3>
              <ul className="skill-tile__list">
                {group.skills.map((skill) => (
                  <li key={skill} className="skill-tile__item">
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
