import React from 'react';
import { experience } from '../data/portfolioData';

const ExperienceCard = ({ exp }) => (
  <div className="col-lg-6 mb-4">
    <div className="card h-100 border-0 shadow-sm experience-card">
      <div className="card-body">
        <div className="d-flex align-items-start mb-3">
          <div className="bg-primary text-white rounded-circle p-3 me-3">
            <i className="bi bi-briefcase-fill fs-4"></i>
          </div>
          <div className="flex-grow-1">
            <h5 className="card-title fw-bold mb-1">{exp.role}</h5>
            <h6 className="text-primary mb-2">{exp.organization}</h6>
            <p className="text-muted mb-0">
              <i className="bi bi-calendar3 me-2"></i>
              {exp.duration}
            </p>
          </div>
        </div>
        <p className="text-muted mb-0">{exp.description}</p>
      </div>
    </div>
  </div>
);

const Experience = () => {
  return (
    <section id="experience" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 section-title">
          Experience & <span className="text-primary">Activities</span>
        </h2>
        <div className="row">
          {experience.map((exp) => (
            <ExperienceCard key={exp.id} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
