import React from "react";

const BadgeComponent = ({ title }) => {
  return (
    <div className="badge-container">
      <span className="badge-content">{title}</span>
    </div>
  );
};

export default BadgeComponent;
