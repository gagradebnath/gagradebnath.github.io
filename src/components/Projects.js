import React from 'react';
import { projects } from '../data/portfolioData';

const ProjectCard = ({ project }) => (
  <div className="col-lg-4 col-md-6 mb-4">
    <div className="card h-100 shadow-sm border-0 project-card">
      <img src={project.image} className="card-img-top" alt={project.title} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-bold">{project.title}</h5>
        <p className="card-text text-muted">{project.description}</p>
        <div className="mb-3">
          {project.technologies.map((tech, index) => (
            <span key={index} className="badge bg-secondary me-1 mb-1">
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-auto d-flex gap-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary btn-sm flex-grow-1"
          >
            <i className="bi bi-github me-1"></i>
            Code
          </a>
          {project.demo !== "#" && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm flex-grow-1"
            >
              <i className="bi bi-box-arrow-up-right me-1"></i>
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 section-title">
          My <span className="text-primary">Projects</span>
        </h2>
        <div className="row">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
