import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import "./BuildOnGitHub.scss";
import slaqLogo from "../../assets/images/slackhq.png";
import zenLogo from "../../assets/images/zenhubio.png";
import travisLogo from "../../assets/images/travis-ci.png";
import atomLogo from "../../assets/images/atom.png";
import circleLogo from "../../assets/images/circleci.png";
import googleLogo from "../../assets/images/google.png";
import codeClimateLogo from "../../assets/images/codeclimate.png";

function BuildOnGitHub() {
  return (
    <div className="buildOnGitHub" data-testid="buildOnGitHub">
      <span className="buildOnGitHub__span">Integrations</span>

      <h2 className="buildOnGitHub__title">Build on GitHub</h2>

      <p className="buildOnGitHub__para">
        Customize your process with GitHub apps and an intuitive API. Integrate
        the tools you already use or discover new favorites to create a happier,
        more efficient way of working.
      </p>
      <button className="buildOnGitHub__btn">
        Learn about integrations
        <ArrowRightAltIcon />
      </button>
      <div className="buildOnGitHub__logos">
        <img className="buildOnGitHub__logo" src={slaqLogo} alt="slaq logo" />
        <img className="buildOnGitHub__logo" src={zenLogo} alt="zen logo" />
        <img
          className="buildOnGitHub__logo"
          src={travisLogo}
          alt="travis logo"
        />
        <img className="buildOnGitHub__logo" src={atomLogo} alt="atom logo" />
        <img
          className="buildOnGitHub__logo"
          src={circleLogo}
          alt="circle logo"
        />
        <img
          className="buildOnGitHub__logo"
          src={googleLogo}
          alt="google logo"
        />
        <img
          className="buildOnGitHub__logo"
          src={codeClimateLogo}
          alt="code climate logo"
        />
      </div>
      <p className="buildOnGitHub__newTools">
        Sometimes, there's more than one tool for the job. Why not try something
        new?
      </p>
      <button className="buildOnGitHub__marketplace">
        Browse GitHub Marketplace
        <ArrowRightAltIcon />
      </button>
    </div>
  );
}

export default BuildOnGitHub;
