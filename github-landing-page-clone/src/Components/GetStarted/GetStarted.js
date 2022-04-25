import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import "./GetStarted.scss";
import enterpriseIcon from "../../assets/images/enterprise.svg";
import supportIcon from "../../assets/images/support.svg";

function GetStarted() {
  return (
    <div className="getStarted" data-testid="getStarted">
      <div className="getStarted__info">
        <h3 className="getStarted__info__title">
          Get started with GitHub Enterprise
        </h3>

        <p className="getStarted__info__para">
          Take collaboration to the next level with security and administrative
          features built for teams.
        </p>
      </div>

      <div className="getStarted__service">
        <img
          className="getStarted__service__icon"
          src={enterpriseIcon}
          alt="enterprise icon"
        />
        <h4 className="getStarted__service__title">Enterprise</h4>
        <p className="getStarted__service__para">
          Deploy to your environment or the cloud.
        </p>
        <button className="getStarted__service__btn">
          Start a free trial
        </button>
      </div>

      <div className="getStarted__service">
        <img
          className="getStarted__service__icon"
          src={supportIcon}
          alt="support icon"
        />
        <h4 className="getStarted__service__title">Talk to us</h4>
        <p className="getStarted__service__para">Need help?</p>
        <button className="getStarted__service__btn--outlined">
          Contact Sales
          <ArrowRightAltIcon />{" "}
        </button>
      </div>
    </div>
  );
}

export default GetStarted;
