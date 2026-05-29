import React from 'react';

import {
  Link,
  useParams
} from 'react-router-dom';

import {
  ArrowRight,
  CheckCircle2,
  Building2,
  ShieldCheck,
  Database,
  BarChart3
} from 'lucide-react';

import {
  industries,
  services
} from '../data/siteData.js';

import SectionHeader from '../components/SectionHeader.jsx';
import CTA from '../components/CTA.jsx';



/* =========================================================
   INDUSTRY DETAIL PAGE
========================================================= */

export function IndustryDetail() {

  const { slug } = useParams();

  const item =
    industries.find((x) => x.slug === slug) ||
    industries[0];

  const Icon = item.icon;

  return (
    <>

      {/* HERO */}
      <section className="page-hero industry-hero">

        <div className="container">

          <span>
            INDUSTRY SOLUTION
          </span>

          <h1>
            Smart Technology Solutions for
            {' '}
            {item.title}
          </h1>

          <p>
            {item.text}
          </p>

        </div>

      </section>



      {/* MAIN DETAIL SECTION */}
      <section className="container split page-section">

        {/* LEFT */}
<div className="detail-card modern-industry-card">

  <div className="industry-icon-wrap">
    <Icon size={56} />
  </div>

  <span className="industry-badge">
    Industry Solution
  </span>

  <h2>
    {item.title}
  </h2>

  <p className="industry-description">
    {item.text}
  </p>

  <div className="industry-feature-grid">

    <div className="industry-feature-card">
      <ShieldCheck size={22} />
      <div>
        <h4>Secure Architecture</h4>
        <span>Enterprise-grade security and scalability.</span>
      </div>
    </div>

    <div className="industry-feature-card">
      <Database size={22} />
      <div>
        <h4>Cloud Management</h4>
        <span>Access data securely from anywhere.</span>
      </div>
    </div>

    <div className="industry-feature-card">
      <BarChart3 size={22} />
      <div>
        <h4>Live Analytics</h4>
        <span>Track performance in real time.</span>
      </div>
    </div>

    <div className="industry-feature-card">
      <CheckCircle2 size={22} />
      <div>
        <h4>Workflow Automation</h4>
        <span>Reduce manual work and improve efficiency.</span>
      </div>
    </div>

  </div>

  <Link
    className="btn industry-btn"
    to="/contact"
  >
    Discuss Project
    <ArrowRight size={18} />
  </Link>

</div>



        {/* RIGHT */}
        <div className="industry-right-content">

          <div className="pill">
            COMMON FEATURES
          </div>

          <h2>
            What’s included
            in the solution?
          </h2>

          <div className="check-list modern-check-list">

            <div>
              <CheckCircle2 size={18} />
              Dashboard and role-based access
            </div>

            <div>
              <CheckCircle2 size={18} />
              Billing, reports and searchable records
            </div>

            <div>
              <CheckCircle2 size={18} />
              Professional print/export-ready documents
            </div>

            <div>
              <CheckCircle2 size={18} />
              Mobile responsive modern UI
            </div>

            <div>
              <CheckCircle2 size={18} />
              Cloud deployment and data security
            </div>

            <div>
              <CheckCircle2 size={18} />
              Long-term support and maintenance
            </div>

          </div>

        </div>

      </section>



      {/* SERVICES */}
      <section className="soft-section">

        <div className="container">

          <SectionHeader
            eyebrow="USEFUL SERVICES"
            title={
              <>
                Recommended for {item.title}
                {' '}
              </>
            }
            text="Solutions and services commonly used by businesses in this industry."
          />



          <div className="service-grid">

            {services.slice(0, 4).map((s) => {

              const S = s.icon;

              return (

                <Link
                  to={`/services/${s.slug}`}
                  className="service-card modern-service-card"
                  key={s.slug}
                >

                  <S size={42} />

                  <h3>
                    {s.title}
                  </h3>

                  <p>
                    {s.short}
                  </p>

                  <div className="circle-arrow">

                    <ArrowRight size={16} />

                  </div>

                </Link>

              );

            })}

          </div>

        </div>

      </section>



      <CTA />

    </>
  );
}



/* =========================================================
   INDUSTRIES PAGE
========================================================= */

export default function Industries() {

  return (
    <>

      {/* HERO */}
      <section className="page-hero industries-main-hero">

        <div className="container">

          <span>
            INDUSTRIES
          </span>

          <h1>
            Technology for businesses
            that need clarity and control.
          </h1>

          <p>
            We build powerful digital systems
            tailored for real-world business
            operations across multiple industries.
          </p>

        </div>

      </section>



      {/* INDUSTRIES GRID */}
      <section className="container page-section">

        <SectionHeader
          eyebrow="INDUSTRY SOLUTIONS"
          title={
            <>
              Built around
              {' '}
              <span>real operations</span>
            </>
          }
          text="Choose any industry to explore dedicated digital solutions and services."
        />



        <div className="industry-grid big modern-industry-grid">

          {industries.map((i) => {

            const Icon = i.icon;

            return (

              <Link
                className="industry-card modern-industry-item"
                to={`/industries/${i.slug}`}
                key={i.slug}
              >

                <div className="industry-card-top">

                  <div className="industry-main-icon">

                    <Icon size={34} />

                  </div>

                  <Building2 size={18} />

                </div>

                <h3>
                  {i.title}
                </h3>

                <p>
                  {i.text}
                </p>

                <div className="industry-card-btn">

                  Explore Solution

                  <ArrowRight size={17} />

                </div>

              </Link>

            );

          })}

        </div>

      </section>



      <CTA />

    </>
  );
}