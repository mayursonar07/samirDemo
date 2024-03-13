import React from "react";
import ThumbnailComponent from "./ThumbnailComponent";
import thumbnailInfo from "../assets/thumbnailInfo.json";
const ExchangePointComponent = () => {
  return (
    <div className="exchange-point-main-container">
      <div className="exchange-point-label-container">
        <span className="exchange-point-label">EXCHANGE POINT</span>
      </div>
      <div className="vital-role-container">
        <div className="vital-role-info-container">
          <h2>The Vital Role of Connections & Sponsorships</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="vital-role-btn-container">
          <button>Create an account</button>
        </div>
      </div>
      <div className="thumbnails-container">
        {thumbnailInfo.thumbnails.map((item) => (
          <ThumbnailComponent item={item} />
        ))}
      </div>
    </div>
  );
};

export default ExchangePointComponent;
