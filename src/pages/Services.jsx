import React from 'react';
import { Link, useParams } from 'react-router-dom';

import {
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

import {
  services,
  processSteps
} from '../data/siteData.js';

import SectionHeader from '../components/SectionHeader.jsx';
import CTA from '../components/CTA.jsx';



/* =========================================================
   SERVICE DETAIL PAGE
========================================================= */

export function ServiceDetail() {

  const { slug } = useParams();

  const s =
    services.find((x) => x.slug === slug) ||
    services[0];

  const Icon = s.icon;

  return (
    <>

      {/* HERO */}
      <section className="page-hero">

        <div className="container">

          <span>
            SERVICE DETAIL
          </span>

          <h1>
            {s.title}
          </h1>

          <p>
            {s.details}
          </p>

        </div>

      </section>

      {/* CONTENT */}
      <section className="container split page-section">

        {/* LEFT CARD */}
        <div className="detail-card">

          <Icon />

          <h2>
            {s.title}
          </h2>

          <p>
            {s.details}
          </p>

          <Link
            className="btn"
            to="/contact"
          >
            Start This Service
            <ArrowRight size={18} />
          </Link>

        </div>

        {/* RIGHT */}
        <div>

          <h2>
            What you get
          </h2>

          <div className="check-list">

            <div>
              <CheckCircle2 size={18} />
              Requirement planning and solution structure
            </div>

            <div>
              <CheckCircle2 size={18} />
              Modern responsive UI and clean user experience
            </div>

            <div>
              <CheckCircle2 size={18} />
              Secure backend, database and admin workflows
            </div>

            <div>
              <CheckCircle2 size={18} />
              Deployment, testing and post-launch support
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <CTA />

    </>
  );
}



/* =========================================================
   SERVICES PAGE
========================================================= */

export default function Services() {

  return (
    <>

      {/* HERO */}
      <section className="page-hero">

        <div className="container">

          <span>
            OUR SERVICES
          </span>

          <h1>
            End-to-end digital services
            for modern businesses.
          </h1>

          <p>
            Every service page is separate
            and editable. Change content
            from src/data/siteData.js.
          </p>

        </div>

      </section>

      {/* SERVICES */}
      <section className="container page-section">

        <SectionHeader
          eyebrow="WHAT WE DO"
          title={
            <>
              Digital Solutions Built to Scale
              {' '}
            </>
          }
        />

        <div className="service-grid large">

          {services.map((s) => {

            const Icon = s.icon;

            return (

              <Link
                to={`/services/${s.slug}`}
                className="service-card"
                key={s.slug}
              >

                <Icon size={48} />

                <h3>
                  {s.title}
                </h3>

                <p>
                  {s.short}
                </p>

                <div className="circle-arrow">
                  <ArrowRight size={17} />
                </div>

              </Link>

            );
          })}

        </div>

      </section>

      {/* PROCESS */}
      <section className="soft-section">

        <div className="container">

          <SectionHeader
            eyebrow="DELIVERY FLOW"
            title={
              <>
                From idea to launch
                {' '}
              </>
            }
          />

          <div className="timeline-grid">

            {processSteps.map((p, i) => (

              <div key={p.title}>

                <span>
                  {String(i + 1).padStart(2, '0')}
                </span>

                <h3>
                  {p.title}
                </h3>

                <p>
                  {p.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <CTA />

    </>
  );
}