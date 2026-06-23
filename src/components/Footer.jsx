import React from "react";

export default function Footer() {
  return (
    <footer id="contact" className="footer" aria-labelledby="contact-heading">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__intro">
            <h2 id="contact-heading" className="footer__title">
              Let&apos;s build something together
            </h2>
            <p className="footer__sub">
              Open to Full Stack, Frontend &amp; Backend internships at product
              companies
            </p>
          </div>
          <div className="footer__actions">
            <a
              className="footer__mailto"
              href="mailto:2200032487cseh@gmail.com"
            >
              2200032487cseh@gmail.com
            </a>
            <nav className="footer__socials" aria-label="Social links">
              <a
                className="footer__link"
                href="https://linkedin.com/in/meenakshi-yakkala"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="footer__link"
                href="https://github.com/YMeenakshi23"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className="footer__link"
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </nav>
          </div>
        </div>
        <p className="footer__copy">© 2026 · Meenakshi Yakkala</p>
      </div>
    </footer>
  );
}
