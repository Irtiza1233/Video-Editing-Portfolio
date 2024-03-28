  import React from 'react';
  import './testimonials.css';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faStar } from '@fortawesome/free-solid-svg-icons';

  function Testimonials() {
    const renderStars = (rating) => {
      const stars = [];
      for (let i = 0; i < 5; i++) {
        if (i < rating) {
          stars.push(<FontAwesomeIcon key={i} icon={faStar} style={{ color: '#FFD700' }} />);
        } else {
          stars.push(<FontAwesomeIcon key={i} icon={faStar} style={{ color: '#ccc' }} />);
        }
      }
      return stars;
    };

    const calculateProjectPrice = (rate, hours) => {
      return rate * hours;
    };

    const renderProjectDetails = (fixedPrice, hourlyRate, hours) => {
      if (fixedPrice) {
        return (
          <div className="project-details">
            <p>${fixedPrice.toFixed(2)} Fixed price</p>
          </div>
        );
      } else if (hourlyRate && hours) {
        const totalPrice = calculateProjectPrice(hourlyRate, hours);
        return (
          <div className="project-details">
            <p>${totalPrice.toFixed(2)}</p>
            <p>${hourlyRate.toFixed(2)} /hr</p>
            <p>{hours} hours</p>
          </div>
        );
      } else {
        return null;
      }
    };

    return (
      <section className="testimonials">
        <div className="testimonial-section">
          <div className="testimonial">
            <img src="man.jpg" alt="Client 1" />
            <p>"Wow! Their eye for detail is unmatched. Highly recommend!"</p>
            <div className="testimonial-details">
              <div className="rating">
                {renderStars(5)}
              </div>
              {renderProjectDetails(500, null, null)}
            </div>
            <h4>- Emily Brown</h4>
          </div>
          
          <div className="testimonial">
            <img src="man1.jpg" alt="Client 2" />
            <p>"They turned our footage into pure magic. Thrilled with the result!"</p>
            <div className="testimonial-details">
              <div className="rating">
                {renderStars(4)}
              </div>
              {renderProjectDetails(null, 15, 8)}
            </div>
            <h4>- David Wilson</h4>
          </div>

          {/* Add more testimonials */}
          <div className="testimonial">
            <img src="man2.jpg" alt="Client 3" />
            <p>"A true professional! Exceeded our expectations with top-notch editing skills. Pleasure to work with. Looking forward to future collaborations!"</p>
            <div className="testimonial-details">
              <div className="rating">
                {renderStars(5)}
              </div>
              {renderProjectDetails(800, null, null)}
            </div>
            <h4>- Matthew Ryan
</h4>
          </div>

          <div className="testimonial">
            <img src="man3.jpg" alt="Client 4" />
            <p>"Turned our ideas into reality seamlessly. Their passion for editing shines through. Can't wait to work together again!"</p>
            <div className="testimonial-details">
              <div className="rating">
                {renderStars(4)}
              </div>
              {renderProjectDetails(null, 20, 7)}
            </div>
            <h4>- Alex Miller</h4>
          </div>

          <div className="testimonial">
            <img src="man4.jpg" alt="Client 5" />
            <p>"Brilliant work! Brought our project to life with creativity and professionalism. Timely delivery and exceeded expectations. Highly recommend!"</p>
            <div className="testimonial-details">
              <div className="rating">
                {renderStars(5)}
              </div>
              {renderProjectDetails(1200, null, null)}
            </div>
            <h4>- Rachel Carter</h4>
          </div>

          <div className="testimonial">
            <img src="man5.jpg" alt="Client 6" />
            <p>"Captured the essence of our event perfectly. Impressed by their attention to detail!"</p>
            <div className="testimonial-details">
              <div className="rating">
                {renderStars(4)}
              </div>
              {renderProjectDetails(null, 12, 10)}
            </div>
            <h4>- Michael Johnson</h4>
          </div>

          <div className="testimonial">
            <img src="man6.jpg" alt="Client 7" />
            <p>"Outstanding work! Their editing skills are unmatched. Will definitely collaborate again!"</p>
            <div className="testimonial-details">
              <div className="rating">
                {renderStars(5)}
              </div>
              {renderProjectDetails(null, 18, 6)}
            </div>
            <h4>- Christopher Brown</h4>
          </div>

          <div className="testimonial">
            <img src="man7.jpg" alt="Client 8" />
            <p>"Truly impressed! Understood our vision and executed it flawlessly!"</p>
            <div className="testimonial-details">
              <div className="rating">
                {renderStars(4)}
              </div>
              {renderProjectDetails(null, 25, 4)}
            </div>
            <h4>- Matthew Thompson</h4>
          </div>

          <div className="testimonial">
            <img src="man8.jpg" alt="Client 9" />
            <p>"Exceptional talent! Collaborative, efficient, and a pleasure to work with!"</p>
            <div className="testimonial-details">
              <div className="rating">
                {renderStars(5)}
              </div>
              {renderProjectDetails(null, 30, 5)}
            </div>
            <h4>- Andrew Wilson</h4>
          </div>
          
        </div>
      </section>
    );
  }

  export default Testimonials;
