import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = ({ scrollToSection }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsNavOpen(false); // Close the navbar after clicking on a link
    }
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="portfolio-text">My Portfolio</div>
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleNav} // Toggle the navbar state onClick
      >
        <FontAwesomeIcon icon={isNavOpen ? faTimes : faAngleDown} />
      </button>
      <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={() => scrollTo('about')}>
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={() => scrollTo('portfolio')}>
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={() => scrollTo('skills')}>
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={() => scrollTo('testimonials')}>
              Testimonials
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
