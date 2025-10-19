import React from 'react';
import { skills } from '../data/portfolioData';

const SkillCategory = ({ title, skillList, icon }) => (
  <div className="col-md-6 mb-4">
    <div className="card h-100 shadow-sm border-0 skill-card">
      <div className="card-body">
        <h5 className="card-title mb-3">
          <i className={`bi ${icon} text-primary me-2`}></i>
          {title}
        </h5>
        <div className="d-flex flex-wrap gap-2">
          {skillList.map((skill, index) => (
            <span key={index} className="badge bg-primary-subtle text-primary px-3 py-2">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Skills = () => {
  const skillCategories = [
    { title: 'Programming Languages', skills: skills.languages, icon: 'bi-code-slash' },
    { title: 'Web Technologies', skills: skills.webTechnologies, icon: 'bi-globe' },
    { title: 'Tools & Software', skills: skills.tools, icon: 'bi-tools' },
    { title: 'Specializations', skills: skills.specializations, icon: 'bi-star' },
    { title: 'Soft Skills', skills: skills.softSkills, icon: 'bi-person-check' },
  ];

  return (
    <section id="skills" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5 section-title">
          My <span className="text-primary">Skills</span>
        </h2>
        <div className="row">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              skillList={category.skills}
              icon={category.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
