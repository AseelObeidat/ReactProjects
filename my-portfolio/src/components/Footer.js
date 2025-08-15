import React from "react";

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container text-center">
        <nav className="social-links" aria-label="Social links">
          <a href="mailto:aseel.ob.ao@gmail.com" aria-label="Email Aseel">
            <i className="fas fa-envelope" aria-hidden="true" />
          </a>
          <a href="tel:+962791149859" aria-label="Call Aseel">
            <i className="fas fa-phone" aria-hidden="true" />
          </a>
          <a href="https://www.linkedin.com/in/aseel-obeidat-058580131/" aria-label="LinkedIn profile">
            <i className="fab fa-linkedin" aria-hidden="true" />
          </a>
          <a href="https://github.com/AseelObeidat" aria-label="GitHub profile">
            <i className="fab fa-github" aria-hidden="true" />
          </a>
        </nav>
        <p className="mb-0">&copy; {new Date().getFullYear()} Aseel Obeidat. All rights reserved.</p>
      </div>
    </footer>
  );
}
