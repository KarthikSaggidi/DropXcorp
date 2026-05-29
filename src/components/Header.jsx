import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  ArrowRight,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';

import { navItems } from '../data/siteData.js';

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleNavigation = () => {
    setOpen(false);

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header className="site-header">
      <div className="nav-shell">

        {/* LOGO */}
        <Link
          to="/"
          className="brand"
          onClick={handleNavigation}
        >
          <img
            src="/logo.png"
            alt="DropXcorp"
            className="main-logo"
          />
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          className="mobile-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Open menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* NAVIGATION */}
        <nav className={open ? 'nav-links show' : 'nav-links'}>
          {navItems.map((item) => (
            <div
              className="nav-item"
              key={item.label}
            >
              <NavLink
                to={item.path}
                end={item.path === '/'}
                onClick={() => {
                  if (!item.children) {
                    handleNavigation();
                  }
                }}
                className={({ isActive }) =>
                  isActive ? 'active' : ''
                }
              >
                {item.label}

                {item.children && (
                  <ChevronDown size={13} />
                )}
              </NavLink>

              {/* DROPDOWN */}
              {item.children && (
                <div className="dropdown">
                  {item.children.map((child) => (
                    <Link
                      key={child.path}
                      to={child.path}
                      onClick={handleNavigation}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* GET IN TOUCH BUTTON */}
        <Link
          to="/contact"
          className="top-cta"
          onClick={handleNavigation}
        >
          Get In Touch
          <ArrowRight size={18} />
        </Link>

      </div>
    </header>
  );
}