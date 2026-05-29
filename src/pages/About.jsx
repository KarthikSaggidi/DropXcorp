import React from 'react';

import {
  CheckCircle2
} from 'lucide-react';

import SectionHeader from '../components/SectionHeader.jsx';
import CTA from '../components/CTA.jsx';

import {
  stats,
  processSteps,
  valueProps
} from '../data/siteData.js';



export default function About() {

  return (
    <>

      {/* HERO SECTION */}
      <section className="page-hero">

        <div className="container">

          <span>
            ABOUT DROPXCORP
          </span>

          <h1>
            We create digital systems that
            make businesses faster, smarter
            and easier to manage.
          </h1>

          <p>
            DropXcorp is a technology studio focused on
            practical, scalable and modern products for
            real business operations.
          </p>

        </div>

      </section>



      {/* ABOUT SECTION */}
      <section className="container split page-section">

        {/* LEFT */}
        <div>

          <SectionHeader
            eyebrow="WHO WE ARE"
            title={
              <>
                Innovate. Build. Deliver.
                {' '}
                    
              </>
            }
            text="We work with businesses that need more than a website. We build full software ecosystems with design, backend, database, deployment and support."
          />

          <div className="check-list">

            <div>
              <CheckCircle2 size={18} />
              Product-first development
            </div>

            <div>
              <CheckCircle2 size={18} />
              Secure and scalable architecture
            </div>

            <div>
              <CheckCircle2 size={18} />
              Professional UI/UX and responsive design
            </div>

            <div>
              <CheckCircle2 size={18} />
              Support after launch
            </div>

          </div>

        </div>



        {/* RIGHT */}
        <div className="glass-panel modern-about-card">

          <div className="about-card-glow"></div>

          <h3>
            Our Mission
          </h3>

          <p>
            To help businesses grow using technology
            that is clean, powerful, secure and easy
            for teams to use every day.
          </p>

          <div className="about-divider"></div>

          <h3>
            Our Vision
          </h3>

          <p>
            To become a trusted technology partner
            for companies building their next generation
            of digital products.
          </p>

        </div>

      </section>



      {/* STATS */}
      <section className="container">

        <div className="stats-panel">

          {stats.map((s) => {

            const Icon = s.icon;

            return (

              <div key={s.label}>

                <Icon />

                <strong>
                  {s.value}
                </strong>

                <span>
                  {s.label}
                </span>

              </div>

            );

          })}

        </div>

      </section>



      {/* PROCESS */}
      <section className="soft-section">

        <div className="container">

          <SectionHeader
            eyebrow="OUR PROCESS"
            title={
              <>
                Simple, clear and delivery focused
                {' '}
              </>
            }
          />

          <div className="timeline-grid">

            {processSteps.map((p, i) => (

              <div
                key={p.title}
                className="timeline-card"
              >

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



      {/* VALUES */}
      <section className="container page-section">

        <div className="value-strip full modern-value-strip">

          {valueProps.map((v) => {

            const Icon = v.icon;

            return (

              <div
                className="value-card"
                key={v.title}
              >

                <Icon />

                <div>

                  <h3>
                    {v.title}
                  </h3>

                  <p>
                    {v.text}
                  </p>

                </div>

              </div>

            );

          })}

        </div>

      </section>



      {/* CTA */}
      <CTA />

    </>
  );
}