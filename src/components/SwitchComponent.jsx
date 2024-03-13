import React from "react";
import { useState } from "react";

const SwitchComponent = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleChange = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="toggle-btn-container">
      <button
        onClick={handleChange}
        className={`${isToggled ? "toggle-button-off" : "toggle-button-on"}`}
      >
        Financial Institutions
      </button>
      <button
        onClick={handleChange}
        className={`${
          isToggled ? "toggle-button-on" : "toggle-button-off padding-right"
        }`}
      >
        <span>Fintechs</span>
      </button>
    </div>
  );
};

export default SwitchComponent;
