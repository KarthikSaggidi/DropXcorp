import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { contactCards } from '../data/siteData.js';

export default function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert('Message submitted successfully!');

    setFormData({
      name: '',
      email: '',
      phone: '',
      project: '',
      message: ''
    });
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="page-hero">
        <div className="container">

          <span>CONTACT US</span>

          <h1>
            Let’s build your next
            digital solution.
          </h1>

          <p>
            Tell us what you want to build.
            We will help you plan the best
            product and technology path.
          </p>

        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="container contact-wrap page-section">

        {/* LEFT CONTACT CARDS */}
        <div className="contact-cards">

          {contactCards.map((c) => {
            const Icon = c.icon;

            return (
              <div
                key={c.title}
                className="contact-card"
              >
                <Icon size={30} />

                <h3>{c.title}</h3>

                <p>{c.value}</p>
              </div>
            );
          })}

        </div>

        {/* CONTACT FORM */}
        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <h2>Send a Message</h2>

          <div className="form-row">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />

          </div>

          <div className="form-row">

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />

            <input
              type="text"
              name="project"
              placeholder="Project Type"
              value={formData.project}
              onChange={handleChange}
            />

          </div>

          <textarea
            name="message"
            placeholder="Tell us about your project"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="btn"
          >
            Submit Message
            <Send size={17} />
          </button>

        </form>

      </section>
    </>
  );
}