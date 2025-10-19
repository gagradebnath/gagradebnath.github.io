import React from 'react';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <p className="mb-0">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-white me-3">
              <i className="bi bi-github fs-5"></i>
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-white me-3">
              <i className="bi bi-linkedin fs-5"></i>
            </a>
            <a href={`mailto:${personalInfo.email}`} className="text-white">
              <i className="bi bi-envelope fs-5"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
