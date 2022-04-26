import React from "react";
import MediaQuery from "react-responsive";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import "./GitHubStats.scss";

function GitHubStats() {
  return (
    <div className="gitHubStats" data-testid="gitHubStats">
      <MediaQuery maxWidth={1023}>
        <>
          <div className="gitHubStats__orange" data-testid="smallScreen">
            <span className="gitHubStats__dataNb">100M</span>
            <span className="gitHubStats__dataText">
              repositories worldwide
            </span>
          </div>
          <div className="gitHubStats__info">
            <p className="gitHubStats__para">
              GitHub's users create and maintain influential technologies
              alongside the world's largest{" "}
              <span className="gitHubStats__orange__span">
                open source community.
              </span>
            </p>
            <ArrowRightIcon sx={{ fontSize: 18 }} />
          </div>

          <div className="gitHubStats__blue">
            <span className="gitHubStats__dataNb">50M</span>
            <span className="gitHubStats__dataText">developers</span>
            <span className="gitHubStats__dataText">worldwide</span>
          </div>
          <div className="gitHubStats__info">
            <p className="gitHubStats__para">
              <span className="gitHubStats__blue__span">Developers</span> use
              GitHub for personal projects, from experimenting with new
              programming languages to hosting their life's work.
            </p>
            <ArrowRightIcon sx={{ fontSize: 18 }} />
          </div>

          <div className="gitHubStats__purple">
            <span className="gitHubStats__dataNb">2.9M</span>
            <span className="gitHubStats__dataText">businesses &amp;</span>
            <span className="gitHubStats__dataText">organizations</span>
            <span className="gitHubStats__dataText">worldwide</span>
          </div>
          <div className="gitHubStats__info">
            <p className="gitHubStats__para">
              <span className="gitHubStats__purple__span">Businesses</span> of
              all sizes use GitHub to support their development process and to
              securely build software.
            </p>
            <ArrowRightIcon sx={{ fontSize: 18 }} />
          </div>
          <span className="gitHubStats__date">As of August 2019</span>
        </>
      </MediaQuery>

      <MediaQuery minWidth={1024}>
        <>
          <div className="gitHubStats__circles" data-testid="largeScreen">
            <div className="gitHubStats__orange">
              <span className="gitHubStats__dataNb">100M</span>
              <span className="gitHubStats__dataText">
                repositories worldwide
              </span>
            </div>

            <div className="gitHubStats__blue">
              <span className="gitHubStats__dataNb">50M</span>
              <span className="gitHubStats__dataText">developers</span>
              <span className="gitHubStats__dataText">worldwide</span>
            </div>

            <div className="gitHubStats__purple">
              <span className="gitHubStats__dataNb">2.9M</span>
              <span className="gitHubStats__dataText">businesses &amp;</span>
              <span className="gitHubStats__dataText">organizations</span>
              <span className="gitHubStats__dataText">worldwide</span>
            </div>
          </div>

          <div className="gitHubStats__infoContainer">
            <div className="gitHubStats__info">
              <p className="gitHubStats__para">
                GitHub's users create and maintain influential technologies
                alongside the world's largest{" "}
                <span className="gitHubStats__orange__span">
                  open source community.
                </span>
              </p>
              <ArrowRightIcon sx={{ fontSize: 18 }} />
            </div>

            <div className="gitHubStats__info">
              <p className="gitHubStats__para">
                <span className="gitHubStats__blue__span">Developers</span> use
                GitHub for personal projects, from experimenting with new
                programming languages to hosting their life's work.
              </p>
              <ArrowRightIcon sx={{ fontSize: 18 }} />
            </div>

            <div className="gitHubStats__info">
              <p className="gitHubStats__para">
                <span className="gitHubStats__purple__span">Businesses</span> of
                all sizes use GitHub to support their development process and to
                securely build software.
              </p>
              <ArrowRightIcon sx={{ fontSize: 18 }} />
            </div>
            <span className="gitHubStats__date">As of August 2019</span>
          </div>
        </>
      </MediaQuery>
    </div>
  );
}

export default GitHubStats;
