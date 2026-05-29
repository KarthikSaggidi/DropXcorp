import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

/* COMPONENTS */
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

/* PAGES */
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';

import Services, {
  ServiceDetail
} from './pages/Services.jsx';

import Industries, {
  IndustryDetail
} from './pages/Industries.jsx';

import Portfolio from './pages/Portfolio.jsx';
import Careers from './pages/Careers.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <>
      {/* AUTO SCROLL TO TOP */}
      <ScrollToTop />

      {/* HEADER */}
      <Header />

      {/* MAIN CONTENT */}
      <main className="main-wrapper">
        <Routes>

          {/* HOME */}
          <Route
            path="/"
            element={<Home />}
          />

          {/* ABOUT */}
          <Route
            path="/about"
            element={<About />}
          />

          {/* SERVICES */}
          <Route
            path="/services"
            element={<Services />}
          />

          <Route
            path="/services/:slug"
            element={<ServiceDetail />}
          />

          {/* INDUSTRIES */}
          <Route
            path="/industries"
            element={<Industries />}
          />

          <Route
            path="/industries/:slug"
            element={<IndustryDetail />}
          />

          {/* PORTFOLIO */}
          <Route
            path="/portfolio"
            element={<Portfolio />}
          />

          {/* CAREERS */}
          <Route
            path="/careers"
            element={<Careers />}
          />

          {/* CONTACT */}
          <Route
            path="/contact"
            element={<Contact />}
          />

          {/* 404 */}
          <Route
            path="*"
            element={<NotFound />}
          />

        </Routes>
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
}