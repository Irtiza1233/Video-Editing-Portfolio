import React from 'react';
import './Main.css'; // Import CSS file for styling

// function Main() {

  const Main = ({ scrollToSection }) => {
    const scrollTo = (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
  
  return (
    <div className="main-container">
      <div className="bg-image"></div>
      <div className="content">
        <h1>Hi, I'm a video editor</h1>
        <p className="attitude-line">Turning raw footage into cinematic masterpieces</p>




        <a className="nav-link btn" href="#" onClick={() => scrollTo('footer')}>
              Have a project?
            </a>



      </div>
    </div>
  );
}

export default Main;
