import React from 'react';

import {
  Send,
  BriefcaseBusiness,
  MapPin,
  Clock3,
  ArrowRight
} from 'lucide-react';

import {
  jobs
} from '../data/siteData.js';

import SectionHeader from '../components/SectionHeader.jsx';
import CTA from '../components/CTA.jsx';



export default function Careers() {

  return (
    <>

      {/* HERO SECTION */}
      <section className="page-hero careers-hero">

        <div className="container careers-hero-content">

          <span>
            CAREERS AT DROPXCORP
          </span>

          <h1>
            Join a Team Building
            <span> Future-Ready Digital Products</span>
          </h1>

          <p>
            We’re building modern SaaS platforms, ERP systems,
            AI-powered tools and scalable digital experiences.
            Work with a creative and ambitious tech team.
          </p>

          <div className="career-hero-buttons">

            <button className="btn">

              Explore Roles

              <ArrowRight size={18} />

            </button>

            <button className="btn ghost">

              Learn About Culture

            </button>

          </div>

        </div>

      </section>



      {/* JOBS SECTION */}
      <section className="container page-section">

        <SectionHeader
          eyebrow="OPEN ROLES"
          title={
            <>
              Grow with
              {' '}
              <span>DropXcorp</span>
            </>
          }
          text="Explore exciting opportunities and work on innovative digital products."
        />



        <div className="jobs-grid modern-jobs-grid">

          {jobs.map((j) => (

            <div
              className="job-card modern-job-card"
              key={j.role}
            >

              {/* TOP */}
              <div className="job-card-top">

                <span className="job-type">

                  {j.type}

                </span>

              </div>



              {/* ICON */}
              <div className="job-icon-wrap">

                <BriefcaseBusiness size={30} />

              </div>



              {/* CONTENT */}
              <div className="job-content">

                <h3>
                  {j.role}
                </h3>

                <p>
                  {j.text}
                </p>

              </div>



              {/* META */}
              <div className="job-meta">

                <div>

                  <MapPin size={16} />

                  <span>
                    Hyderabad
                  </span>

                </div>

                <div>

                  <Clock3 size={16} />

                  <span>
                    Full Time
                  </span>

                </div>

              </div>



              {/* BUTTON */}
              <button className="modern-apply-btn">

                Apply Now

                <Send size={15} />

              </button>

            </div>

          ))}

        </div>

      </section>



      {/* BENEFITS SECTION */}
      <section className="soft-section">

        <div className="container">

          <SectionHeader
            eyebrow="WHY JOIN US"
            title={
              <>
                Perks of working at
                {' '}
                <span>DropXcorp</span>
              </>
            }
            text="We focus on innovation, growth and creating an inspiring workplace."
          />



          <div className="career-benefits-grid">

            <div className="career-benefit-card">

              <h3>
                Flexible Work
              </h3>

              <p>
                Hybrid and remote-friendly work culture
                with flexible schedules.
              </p>

            </div>

            <div className="career-benefit-card">

              <h3>
                Learning & Growth
              </h3>

              <p>
                Access to mentorship, real-world projects
                and modern technologies.
              </p>

            </div>

            <div className="career-benefit-card">

              <h3>
                Innovative Projects
              </h3>

              <p>
                Work on SaaS platforms, AI tools,
                ERP systems and scalable products.
              </p>

            </div>

            <div className="career-benefit-card">

              <h3>
                Team Culture
              </h3>

              <p>
                Collaborate with a passionate and
                highly creative development team.
              </p>

            </div>

          </div>

        </div>

      </section>



      {/* CTA */}
      <CTA />

    </>
  );
}