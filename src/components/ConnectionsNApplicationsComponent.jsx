import React from "react";
import BadgeComponent from "./BadgeComponent";
import TextContentComponent from "./TextContentComponent";
import ButtonComponent from "./ButtonComponent";
import ImageComponent from "./ImageComponent";

const ConnectionsNApplicationsComponent = () => {
  return (
    <div className="ConnectionsNApplications-main-container">
      <div className="ConnectionsNApplications-container">
        <div className="textual-content-container">
          <BadgeComponent title="FIND CONNECTIONS" />
          <TextContentComponent title="Unlock Powerful Connections" />
          <ButtonComponent title="Start Connecting" />
        </div>
        <div className="image-main-container">
          <ImageComponent />
        </div>
      </div>
      <div className="ConnectionsNApplications-container">
        <div className="image-main-container">
          <ImageComponent />
        </div>
        <div
          className="textual-content-container"
          style={{ marginLeft: "100px" }}
        >
          <BadgeComponent title="ESTABLISH SPONSORSHIPS" />
          <TextContentComponent title="Accelerate Growth With Strategic Sponsorship" />
        </div>
      </div>
      <div className="ConnectionsNApplications-container">
        <div className="textual-content-container">
          <BadgeComponent title="CREATE APPLICATIONS" />
          <TextContentComponent title="Purchase Plans & Create Apps" />
          <ButtonComponent title="Visit AppMarket" />
        </div>
        <div className="image-main-container">
          <ImageComponent />
        </div>
      </div>
    </div>
  );
};

export default ConnectionsNApplicationsComponent;
