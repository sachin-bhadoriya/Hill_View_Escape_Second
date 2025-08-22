import React, { useState } from 'react';
import "./Testimonials.css";
import { testimonials } from "../../data";
import Loader from "../Loader"
const Testimonials = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [showAll, setShowAll] = useState(false);

  const handleAllTestimonialsView = () => {
    setIsLoading(true)
    // setTimeout(() => {
      setShowAll(true);
      setIsLoading(false)
    // }, 2000);
  }
  const handleLimitedTestimonialsView = () => {
    setIsLoading(true)
    // setTimeout(() => {
      setShowAll(false);
      setIsLoading(false)
    // }, 2000);
  }

  const displayedTestimonials = showAll ? testimonials : testimonials.slice(0, 3);

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <div className="testimonial-header">
          <h2 className='playFair'>Our happy clients say about us</h2>
        </div>

        <div className="testimonial-grid">
          {displayedTestimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <div className="stars">
                {"⭐".repeat(t.rating)}
              </div>
              <blockquote>{t.quote}</blockquote>
              <div className="author">
                <img src={t.image} alt={t.name} />
                <div>
                  <p className="name">{t.name}</p>
                  <p className="title">{t.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>


        <div className="allRoomCont text-center outFit">
          {!showAll ? <>
            <button onClick={handleAllTestimonialsView}>
              {isLoading ? <Loader /> : "View All Testimonials"}
            </button>
          </> :
            <button onClick={handleLimitedTestimonialsView}>
              {isLoading ? <Loader /> : "View Limited Testimonials"}
            </button>}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;
