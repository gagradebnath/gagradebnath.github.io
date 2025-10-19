import React from 'react';
import { about, achievements, interests } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 section-title">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="row align-items-center mb-5">
          <div className="col-lg-4 mb-4 mb-lg-0 text-center">
            <img
              src={about.image}
              alt="Profile"
              className="img-fluid rounded-circle shadow-lg"
              style={{ maxWidth: '300px' }}
            />
          </div>
          <div className="col-lg-8">
            <p className="lead mb-4">{about.description}</p>
            <h4 className="mb-3">Interests:</h4>
            <div className="d-flex flex-wrap gap-2">
              {interests.map((interest, index) => (
                <span key={index} className="badge bg-secondary-subtle text-secondary px-3 py-2">
                  <i className="bi bi-star-fill me-1"></i>
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Key Achievements Section - Enhanced */}
        <div className="achievements-section mt-5">
          <h3 className="text-center mb-4 fw-bold">
            <i className="bi bi-trophy-fill text-warning me-2"></i>
            Key <span className="text-primary">Achievements</span>
          </h3>
          <div className="row g-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="col-lg-6">
                <div className="achievement-card p-4 h-100 border-0 shadow-sm bg-white rounded-3">
                  <div className="d-flex align-items-start">
                    <div className="achievement-icon me-3">
                      <div className="bg-gradient rounded-circle p-3 shadow-sm" style={{
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        minWidth: '50px',
                        minHeight: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <i className="bi bi-award-fill text-white fs-4"></i>
                      </div>
                    </div>
                    <div className="achievement-content flex-grow-1">
                      <p className="mb-0 fw-semibold text-dark achievement-text">
                        {achievement}
                      </p>
                    </div>
                  </div>
                  <div className="achievement-shine"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
