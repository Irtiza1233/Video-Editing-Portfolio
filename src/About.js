// About.js
import React, { forwardRef } from 'react'; // Import forwardRef
import './about.css';

// Use forwardRef to forward the ref to the outermost div
const About = forwardRef((props, ref) => {
  return (
    <div ref={ref} id="about" className="about"> {/* Add id="about" */}
      <div className="about-content">
        <h2>About Me</h2>
        <p>With more than Seven years of professional video editing experience, I possess a strong command of Adobe editing software. My expertise lies in crafting compelling narratives through visuals, and I am particularly passionate about the intricate details that elevate a video. Every project receives my dedicated attention as I strive to enhance visuals and breathe life into the narrative.</p>
      </div>
    </div>
  );
});

export default About;
