import React from 'react';
import './skills.css'; // Import CSS file

const Skills = ({ id }) => { // Accept id prop
  // Function to handle smooth scrolling
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Define skills
  const skills = [
    { name: 'Editing', percentage: 80 },
    { name: 'Color Grading', percentage: 70 },
    { name: 'Motion Graphics', percentage: 60 },
    { name: 'Audio Editing', percentage: 75 },
    { name: 'Visual Effects', percentage: 65 },
  ];

  // Define software and mobile apps
  const software = [
    { name: 'Adobe Premiere Pro', proficiency: 90 },
    { name: 'Adobe After Effects', proficiency: 85 },
    { name: 'DaVinci Resolve', proficiency: 80 },
  ];

  const mobileApps = [
    { name: 'Adobe Premiere Rush', proficiency: 75 },
    { name: 'InShot', proficiency: 70 },
  ];

  return (
    <div id='skills' className="container"> {/* Added id prop */}
      <div className="row">
        <div className="col-md-6 box">
            <h2>Skills</h2>
          {/* Left box for skills */}
          {skills.map((skill, index) => (
            <div key={index} className="skill">
              <h3 className="small-text">{skill.name}</h3>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${skill.percentage}%` }}
                  aria-valuenow={skill.percentage}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {skill.percentage}%
                </div>
              </div>
            </div>
          ))}
        </div>

        
        <div className="col-md-6 box">
        <h2>Softwares</h2>
          {/* Right box for software and mobile apps */}
          {software.map((item, index) => (
            <div key={index} className="skill">
              <div className="small-text">{item.name}</div>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${item.proficiency}%` }}
                  aria-valuenow={item.proficiency}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {item.proficiency}%
                </div>
              </div>
            </div>
          ))}
          {mobileApps.map((item, index) => (
            <div key={index} className="skill">
              <div className="small-text">{item.name}</div>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${item.proficiency}%` }}
                  aria-valuenow={item.proficiency}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {item.proficiency}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="heading-container">
        <h2 className='h2' id='testimonials'>Testimonials</h2>
      </div>
    </div>
  );
};

export default Skills;
