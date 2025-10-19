import React from 'react';
import { education } from '../data/portfolioData';

const EducationCard = ({ edu }) => (
  <div className="col-lg-6 mb-4">
    <div className="card h-100 border-0 shadow-sm education-card">
      <div className="card-body">
        <div className="d-flex align-items-start mb-3">
          <div className="bg-primary text-white rounded-circle p-3 me-3">
            <i className="bi bi-mortarboard-fill fs-4"></i>
          </div>
          <div>
            <h5 className="card-title fw-bold mb-1">{edu.degree}</h5>
            <h6 className="text-primary mb-2">{edu.institution}</h6>
            <p className="text-muted mb-0">
              <i className="bi bi-calendar3 me-2"></i>
              {edu.duration}
            </p>
          </div>
        </div>
        <p className="mb-2">
          <strong>Grade:</strong> {edu.grade}
        </p>
        <p className="text-muted mb-0">{edu.description}</p>
      </div>
    </div>
  </div>
);

const Education = () => {
  return (
    <section id="education" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5 section-title">
          <span className="text-primary">Education</span>
        </h2>
        <div className="row">
          {education.map((edu) => (
            <EducationCard key={edu.id} edu={edu} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
