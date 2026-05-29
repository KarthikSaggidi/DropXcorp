import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  MapPin,
  Mail,
  Phone
} from 'lucide-react';

import Logo from './Logo.jsx';
import { services, industries, company } from '../data/siteData.js';

export default function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container footer-grid">

        {/* Company Info */}
        <div className="footer-company">
          <Link to="/" onClick={scrollToTop}>
            <Logo dark />
          </Link>

          <p className="footer-text">
            DropXcorp builds reliable software, websites,
            SaaS platforms and enterprise systems for
            businesses that want growth with clarity.
          </p>

          <Link
            className="footer-cta"
            to="/contact"
            onClick={scrollToTop}
          >
            Start a Project
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Services */}
        <div className="footer-column">
          <h4>Services</h4>

          {services.slice(0, 6).map((service) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              className="footer-link"
              onClick={scrollToTop}
            >
              {service.title}
            </Link>
          ))}
        </div>

        {/* Industries */}
        <div className="footer-column">
          <h4>Industries</h4>

          {industries.map((industry) => (
            <Link
              key={industry.slug}
              to={`/industries/${industry.slug}`}
              className="footer-link"
              onClick={scrollToTop}
            >
              {industry.title}
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h4>Contact</h4>

          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-contact"
          >
            <MapPin size={16} />
            <span>{company.address}</span>
          </a>

          <a
            href={`mailto:${company.email}`}
            className="footer-contact"
          >
            <Mail size={16} />
            <span>{company.email}</span>
          </a>

          <a
            href={`tel:${company.phone}`}
            className="footer-contact"
          >
            <Phone size={16} />
            <span>{company.phone}</span>
          </a>
        </div>

      </div>

      <div className="copyright">
        © {new Date().getFullYear()} DropXcorp. All Rights Reserved.
      </div>
    </footer>
  );
}