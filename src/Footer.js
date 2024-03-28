import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faInstagram, faFacebook, faLinkedin, faXTwitter, faTelegram } from '@fortawesome/free-brands-svg-icons';
import './footer.css';


function Footer() {
  return (
    <footer id='footer' className="footer-container footer">
      <div className="contact-me"> 
        <h2>Contact Me</h2>
        <div className="contact-box">
          <p><FontAwesomeIcon icon={faEnvelope} />  <a href="mailto:mrirtizaa@gmail.com" target="_blank" rel="noopener noreferrer">Message on Gmail</a></p>
          <p><FontAwesomeIcon icon={faWhatsapp} />  <a href="https://wa.me/03473116844" target="_blank" rel="noopener noreferrer" >Message on Whatsapp</a></p>
        </div>
      </div>
      <div className="footer-content">
        <div className="social-box">
          <p>Other Links:</p>
          <div className="social-links">
            <a href="https://www.instagram.com/irtizaxyz/" target="_blank" rel="noopener noreferrer" className="social-link"><FontAwesomeIcon icon={faInstagram} /></a>
            {/* <a href="https://www.linkedin.com/in/yourlinkedinprofile" target="_blank" rel="noopener noreferrer" className="social-link"><FontAwesomeIcon icon={faLinkedin} /></a>
           */}
            <a href="https://www.facebook.com/yourfacebookpage" target="_blank" rel="noopener noreferrer" className="social-link"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://twitter.com/IrtizaXyz?s=09" target="_blank" rel="noopener noreferrer" className="social-link"><FontAwesomeIcon icon={faXTwitter} /></a>
            <a href="https://t.me/IrtizaHamail" target="_blank" rel="noopener noreferrer" className="social-link"><FontAwesomeIcon icon={faTelegram} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
