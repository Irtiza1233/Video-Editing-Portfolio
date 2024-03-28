import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  // Function to handle smooth scrolling
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="portfolio" className="portfolio-section container"> {/* Added id="portfolio" */}
      <h2 className='h2'>Portfolio</h2>

      <iframe 
        width="560" 
        height="315"
        src="https://www.youtube.com/embed/ienKhZrd_Kw?rel=0"   
     
        title="Video 1" 
        frameBorder="0"
        allowFullScreen 
      ></iframe>

      <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/ObeIINymxEs?rel=0" 
        title="Video 2" 
        frameBorder="0" 
        allowFullScreen
      ></iframe>

      <div className="more-videos">
        <button className="more-videos-button btn" onClick={() => window.location.href = 'https://morevideosample.netlify.app/'}>
          More Videos
        </button>
      </div>
    </div>
  );
}

export default Portfolio;
