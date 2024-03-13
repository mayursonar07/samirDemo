import React from "react";
import TestimonialCardComponent from "./TestimonialCardComponent";
import BadgeComponent from "./BadgeComponent";

const TestimonialComponent = () => {
  const getCardComponent = () => {
    let content = [];
    for (let i = 0; i <= 2; i++) {
      content.push(<TestimonialCardComponent />);
    }
    return content;
  };
  return (
    <div className="testimonial-main-container">
      <BadgeComponent title="TESTIMONIALS" />
      <div className="testimonials-text-container">
        <h3>
          We've established over XXX connections between Financial Institutions
          and Fintechs
        </h3>
      </div>
      <div className="testmonial-card-main-container">{getCardComponent()}</div>
    </div>
  );
};

export default TestimonialComponent;
