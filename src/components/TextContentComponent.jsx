import React from "react";

const TextContentComponent = ({ title }) => {
  return (
    <div className="text-content-container">
      <h3>{title}</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </p>
    </div>
  );
};

export default TextContentComponent;
