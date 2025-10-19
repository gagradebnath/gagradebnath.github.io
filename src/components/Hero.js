import React from 'react';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  return (
    <section id="home" className="hero-section min-vh-100 d-flex align-items-center bg-dark text-white">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h1 className="display-3 fw-bold mb-3 animate-slide-up">
              Hi, I'm <span className="text-primary">{personalInfo.name}</span>
            </h1>
            <h2 className="h3 mb-4 text-secondary animate-slide-up">
              {personalInfo.title}
            </h2>
            <p className="lead mb-4 animate-fade-in">
              Blockchain Champion | AI Enthusiast | Full-Stack Developer | Research Associate
            </p>
            <div className="d-flex gap-3 flex-wrap animate-fade-in">
              <a href="#contact" className="btn btn-primary btn-lg">
                <i className="bi bi-envelope me-2"></i>
                Get In Touch
              </a>
              <a href="#projects" className="btn btn-outline-light btn-lg">
                <i className="bi bi-code-square me-2"></i>
                View Projects
              </a>
            </div>
            <div className="social-links mt-4 animate-fade-in">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-white me-3 fs-4">
                <i className="bi bi-github"></i>
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-white me-3 fs-4">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href={`mailto:${personalInfo.email}`} className="text-white me-3 fs-4">
                <i className="bi bi-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
