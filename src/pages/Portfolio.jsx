import React from 'react';

import {
  portfolio
} from '../data/siteData.js';

import SectionHeader from '../components/SectionHeader.jsx';
import CTA from '../components/CTA.jsx';



export default function Portfolio() {

  return (
    <>

      {/* HERO SECTION */}
      <section className="page-hero">

        <div className="container">

          <span>
            PORTFOLIO
          </span>

          <h1>
            Products, platforms and
            digital systems by DropXcorp.
          </h1>

          <p>
            Replace these cards with your
            actual case studies, screenshots
            and client projects.
          </p>

        </div>

      </section>

      {/* PORTFOLIO GRID */}
      <section className="container page-section">

        <SectionHeader
          eyebrow="SELECTED WORK"
          title={
            <>
              Built with purpose
              {' '}
            </>
          }
        />

        <div className="portfolio-grid">

          {portfolio.map((p) => (

            <div
              className="project-card tall"
              key={p.name}
            >

              <span>
                {p.category}
              </span>

              <h3>
                {p.name}
              </h3>

              <p>
                {p.text}
              </p>

              <button>
                View Case Study
              </button>

            </div>

          ))}

        </div>

      </section>

      {/* CTA */}
      <CTA />

    </>
  );
}