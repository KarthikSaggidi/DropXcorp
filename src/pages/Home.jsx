import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

import {
  company,
  stats,
  services,
  valueProps,
  industries,
  portfolio,
  checks,
  processSteps
} from '../data/siteData.js';

import SectionHeader from '../components/SectionHeader.jsx';
import CTA from '../components/CTA.jsx';

export default function Home() {

  return (
    <>

      {/* HERO SECTION */}
      <section className="hero">

        <div className="hero-left">

          <div className="pill">
            {company.heroBadge}
          </div>

          <h1>
            {company.heroTitleLine1}
            {' '}
            <span>
              {company.heroTitleHighlight}
            </span>
            <br />
            {company.heroTitleLine2}
          </h1>

          <p>
            {company.heroText}
          </p>

          <div className="hero-actions">

            <Link
              className="btn"
              to="/services"
            >
              Explore Our Services
              <ArrowRight size={18} />
            </Link>

            <Link
              className="btn ghost"
              to="/contact"
            >
              Let’s Talk
              <ArrowRight size={18} />
            </Link>

          </div>

          {/* STATS */}
          <div className="stats-row">

            {stats.map((s, i) => {

              const Icon = s.icon;

              return (

                <div
                  className="stat"
                  key={s.label}
                >

                  <div className="mini-icon">
                    <Icon size={22} />
                  </div>

                  <div>
                    <strong>{s.value}</strong>
                    <span>{s.label}</span>
                  </div>

                  {i < stats.length - 1 && <em />}

                </div>

              );
            })}

          </div>

        </div>

        {/* HERO IMAGE */}
        <div className="hero-art">

          <img
            src="/hero-city.jpeg"
            alt="DropXcorp innovative digital city"
          />

        </div>

      </section>

      {/* SERVICES SECTION */}
      <section className="services-section container">

        <SectionHeader
          eyebrow="OUR SERVICES"
          title={
            <>
              End-to-End Digital Solutions
              {' '}
              
            </>
          }
          text="We design, build and deliver digital products that help businesses grow."
        />

        <div className="service-grid">

          {services.map((s) => {

            const Icon = s.icon;

            return (

              <Link
                to={`/services/${s.slug}`}
                className="service-card"
                key={s.slug}
              >

                <Icon size={44} />

                <h3>{s.title}</h3>

                <p>{s.short}</p>

                <div className="circle-arrow">
                  <ArrowRight size={17} />
                </div>

              </Link>

            );
          })}

        </div>

        {/* VALUE STRIP */}
        <div className="value-strip">

          {valueProps.map((v, i) => {

            const Icon = v.icon;

            return (

              <div
                className="value-card"
                key={v.title}
              >

                <Icon />

                <div>

                  <h3>{v.title}</h3>

                  <p>{v.text}</p>

                </div>

                {i < valueProps.length - 1 && <b />}

              </div>

            );
          })}

        </div>

      </section>

      {/* WHY DROPXCORP */}
      <section className="soft-section">

        <div className="container split">

          <div>

            <div className="pill">
              WHY DROPXCORP
            </div>

            <h2>
              Everything your business needs,
              built in one place.
            </h2>

            <p>
              Our approach combines design,
              development, deployment and
              long-term support. You get a
              practical technology partner
              instead of scattered freelancers
              and disconnected tools.
            </p>

            <div className="check-list">

              {checks.map((c) => (

                <div key={c}>

                  <CheckCircle2 size={18} />

                  {c}

                </div>

              ))}

            </div>

          </div>

          {/* PROCESS */}
          <div className="process-card">

            {processSteps.map((p, i) => (

              <div
                className="process-row"
                key={p.title}
              >

                <span>
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div>

                  <h3>{p.title}</h3>

                  <p>{p.text}</p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* INDUSTRIES */}
      <section className="container page-section">

        <SectionHeader
          eyebrow="INDUSTRIES"
          title={
            <>
              Solutions for Modern Businesses
              {' '}
            </>
          }
          text="Editable industry pages are included so you can customize content anytime."
        />

        <div className="industry-grid">

          {industries.map((i) => {

            const Icon = i.icon;

            return (

              <Link
                className="industry-card"
                to={`/industries/${i.slug}`}
                key={i.slug}
              >

                <Icon />

                <h3>{i.title}</h3>

                <p>{i.text}</p>

                <ArrowRight size={18} />

              </Link>

            );
          })}

        </div>

      </section>

      {/* PORTFOLIO */}
      <section className="container page-section">

        <SectionHeader
          eyebrow="PORTFOLIO"
          title={
            <>
              Products & Case Studies
              {' '}
            </>
          }
          text="Use these cards to showcase your live projects, client work and internal products."
        />

        <div className="portfolio-grid">

          {portfolio.slice(0, 3).map((p) => (

            <div
              className="project-card"
              key={p.name}
            >

              <span>{p.category}</span>

              <h3>{p.name}</h3>

              <p>{p.text}</p>

            </div>

          ))}

        </div>

      </section>

      {/* CTA */}
      <CTA />

    </>
  );
}