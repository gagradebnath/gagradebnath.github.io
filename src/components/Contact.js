import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can integrate with email service like EmailJS here
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 section-title">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <div className="row">
          <div className="col-lg-5 mb-4">
            <div className="contact-info">
              <h4 className="mb-4">Contact Information</h4>
              <div className="mb-3">
                <i className="bi bi-envelope-fill text-primary me-3 fs-5"></i>
                <a href={`mailto:${personalInfo.email}`} className="text-decoration-none text-dark">
                  {personalInfo.email}
                </a>
              </div>
              <div className="mb-3">
                <i className="bi bi-telephone-fill text-primary me-3 fs-5"></i>
                <a href={`tel:${personalInfo.phone}`} className="text-decoration-none text-dark">
                  {personalInfo.phone}
                </a>
              </div>
              <div className="mb-3">
                <i className="bi bi-geo-alt-fill text-primary me-3 fs-5"></i>
                <span>{personalInfo.location}</span>
              </div>
              <div className="social-links mt-4">
                <h5 className="mb-3">Connect With Me</h5>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-dark me-2 mb-2"
                >
                  <i className="bi bi-github me-2"></i>
                  GitHub
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary me-2 mb-2"
                >
                  <i className="bi bi-linkedin me-2"></i>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="name" className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    <i className="bi bi-send me-2"></i>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
