import React from "react";

const ThumbnailComponent = ({ item }) => {
  const { icon, heading, info } = item;
  return (
    <div className="thumbnail-container">
      <div className="thumbnail-icon-container">
        <img src={`${icon}.jpg`} alt="" />
      </div>
      <div className="thumbnail-header-container">{heading}</div>
      <div className="thumbnail-info-container">{info}</div>
    </div>
  );
};

export default ThumbnailComponent;
