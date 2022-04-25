import React from "react";

import "./OrganizationsUsingGitHub.scss";
import airBnbLogo from "../../assets/images/airbnb-logo.png";
import sapLogo from "../../assets/images/sap-logo.png";
import ibmLogo from "../../assets/images/ibm-logo.png";
import googleLogo from "../../assets/images/google-logo.png";
import paypalLogo from "../../assets/images/paypal-logo.png";
import bloombergLogo from "../../assets/images/bloomberg-logo.png";
import spotifyLogo from "../../assets/images/spotify-logo.png";
import swiftLogo from "../../assets/images/swift-logo.png";
import facebookLogo from "../../assets/images/facebook-logo.png";
import nodeLogo from "../../assets/images/node-logo.png";
import nasaLogo from "../../assets/images/nasa-logo.png";
import walmartLogo from "../../assets/images/walmart-logo.png";

function OrganizationsUsingGitHub() {
  return (
    <div className="organizations" data-testid="organizations">
      <p className="organizations__para">
        More than 2.9 million businesses and organizations use GitHub
      </p>
      <div className="organizations__logos">
        <img src={airBnbLogo} alt="airbnb logo" />
        <img src={sapLogo} alt="sap logo" />
        <img src={ibmLogo} alt="ibm logo" />
        <img src={googleLogo} alt="google logo" id="googleLogo" />
        <img src={paypalLogo} alt="paypal logo" />
        <img src={bloombergLogo} alt="bloomberg logo" />
        <img src={spotifyLogo} alt="spotify logo" />
        <img src={swiftLogo} alt="swift logo" id="swiftLogo" />
        <img src={facebookLogo} alt="facebook logo" id="facebookLogo" />
        <img src={nodeLogo} alt="node logo" />
        <img src={nasaLogo} alt="nasa logo" id="nasaLogo" />
        <img src={walmartLogo} alt="walmart logo" />
      </div>
    </div>
  );
}

export default OrganizationsUsingGitHub;
