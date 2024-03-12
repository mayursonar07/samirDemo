import React from "react";
import SwitchComponent from "./SwitchComponent";

const NavigatePathComponent = () => {
  return (
    <div className="navigate-path-main-container">
      <div className="map-journey">
        <span>MAP YOUR JOURNEY</span>
      </div>
      <div className="navigate-path-text">
        <h1>Navigate Your Path On the Exchange Point</h1>
      </div>
      <div className="switch-container">
        <SwitchComponent />
      </div>
      <div className="content-container">
        <div className="left-container">
          <div className="img-container">
            <img src="bank.png" alt="" />
          </div>
          <div className="text-content-container">
            <h2>Empowering Financial Institutions</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut
              dictum odio. Mauris dolor nisl, euismod eu convallis ac, facilisis
              sed massa. Sed vitae augue tortor. Nulla nunc justo, tincidunt a
              condimentum vel, egestas vitae diam.
            </p>
          </div>
          <div className="checkbox-selection-container">
            <div className="checkbox-component">
              <input type="checkbox" id="cb1" name="cb1" />
              <label htmlFor="cb1">
                [Value Proposition] Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </label>
            </div>
            <div className="checkbox-component">
              <input type="checkbox" id="cb1" name="cb1" />
              <label htmlFor="cb1">
                [Value Proposition] Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </label>
            </div>
            <div className="checkbox-component">
              <input type="checkbox" id="cb1" name="cb1" />
              <label htmlFor="cb1">
                [Value Proposition] Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </label>
            </div>
            <div className="checkbox-component">
              <input type="checkbox" id="cb1" name="cb1" />
              <label htmlFor="cb1">
                [Value Proposition] Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </label>
            </div>
          </div>
        </div>
        <div className="right-container">
          <img src="economist_3.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default NavigatePathComponent;
