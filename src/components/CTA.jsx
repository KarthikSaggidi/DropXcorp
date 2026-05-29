import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="cta-band">
      <div className="container cta-inner">

        <div className="cta-content">
          <span>LET'S BUILD TOGETHER</span>

          <h2>
            Ready to create your next digital product?
          </h2>

          <p>
            Share your idea. We will help you shape it into a secure,
            scalable and user-friendly solution.
          </p>
        </div>

        <Link
          to="/contact"
          className="btn white"
        >
          Get In Touch
          <ArrowRight size={18} />
        </Link>

      </div>
    </section>
  );
}