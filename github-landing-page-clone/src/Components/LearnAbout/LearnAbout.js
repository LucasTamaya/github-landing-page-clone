import React from "react";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";

import "./LearnAbout.scss";
import teamIcon from "../../assets/images/team.svg";

function LearnAbout() {
  return (
    <div className="learnAbout" data-testid="learnAbout">
      <img className="learnAbout__icon" src={teamIcon} alt="team icon" />

      <div className="learnAbout__text">
        <div className="learnAbout__info">
          <div>
            <h3 className="learnAbout__title">Write better code</h3>
            <p className="learnAbout__para">
              Collaboration makes perfect. The conversations and code reviews
              that happen in pull requests help your team share the weight of
              your work and improve the software you build.{" "}
              <span>Learn about code review.</span>
            </p>
          </div>
          <ArrowRightOutlinedIcon sx={{ fontSize: 18 }} />
        </div>

        <div className="learnAbout__info">
          <div>
            <h3 className="learnAbout__title">Manage your chaos</h3>
            <p className="learnAbout__para">
              Take a deep breath. On GitHub, project management happens in
              issues and project boards, right alongside your code. All you have
              to do is mention a teammate to get them involved.{" "}
              <span>Learn more about project management.</span>
            </p>
          </div>
          <ArrowRightOutlinedIcon sx={{ fontSize: 18 }} />
        </div>

        <div className="learnAbout__info">
          <div>
            <h3 className="learnAbout__title">Find the right tools</h3>
            <p className="learnAbout__para">
              Browse and buy apps from GitHub Marketplace with your GitHub
              account. Find the tools you like or discover new favorites - then
              start using them in minutes.{" "}
              <span>Learn about integrations.</span>
            </p>
          </div>
          <ArrowRightOutlinedIcon sx={{ fontSize: 18 }} />
        </div>
      </div>
    </div>
  );
}

export default LearnAbout;
