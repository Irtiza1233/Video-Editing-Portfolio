import React, { useRef, useState } from 'react';
import './Main.css'; // Your custom styles
import Header from './Header'; // Importing Header.js
import MainContent from './Main'; // Importing Main.js (assuming it exports its content as a default)
import Testimonials from './Testimonials'; // Importing Testimonials.js
import Footer from './Footer'; // Importing Footer.js
import About from './About'; // Importing About.js
import Portfolio from './Portfolio';
import Skills from './Skills';

function App() {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const testimonialSectionRef = useRef(null);
  const aboutSectionRef = useRef(null); // Ref for the About section

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - testimonialSectionRef.current.offsetLeft);
    setScrollLeft(testimonialSectionRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - testimonialSectionRef.current.offsetLeft;
    const walk = (x - startX) * 5; // Adjust scrolling speed here (increased from 3 to 5)
    requestAnimationFrame(() => {
      testimonialSectionRef.current.scrollLeft = scrollLeft - walk;
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    testimonialSectionRef.current.style.scrollBehavior = 'smooth'; // Enable smooth scrolling
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    testimonialSectionRef.current.style.scrollBehavior = 'smooth'; // Enable smooth scrolling
  };

  const scrollToAbout = () => {
    if (aboutSectionRef.current) {
      aboutSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <Header scrollToSection={scrollToAbout} /> {/* Pass scrollToAbout function to Header */}
      <MainContent /> {/* Using the MainContent component */}
      <About ref={aboutSectionRef} /> {/* Pass ref to About component */}
      <Portfolio />
      <Skills />
      <div
        ref={testimonialSectionRef}
        className="testimonial-section"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <Testimonials /> {/* Using the Testimonials component */}
      </div>
      <Footer /> {/* Using the Footer component */}
    </div>
  );
}

export default App;
