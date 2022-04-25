import React from "react";
import ReadMore from "../ReadMore/ReadMore";

import "./LeadingCompanies.scss";
import nationWideImg from "../../assets/images/nw_hero.jpg";
import sapImg from "../../assets/images/sap6.jpg";
import spotifyImg from "../../assets/images/spotifyhero.jpg";

function LeadingCompanies() {
  return (
    <div className="leadingCompanies" data-testid="leadingCompanies">
      <p className="leadingCompanies__para">
        See how the world's leading companies use GitHub Enterprise.
      </p>

      <div className="leadingCompanies__cards">
        <ReadMore
          img="https://customer-stories-feed.github.com/customer_stories/mgm-resorts/hero.jpg"
          title="MGM Resorts International"
          subtitle="Hospitality"
        />
        <ReadMore img={nationWideImg} title="NationWide" subtitle="Insurance" />
        <ReadMore img={sapImg} title="SAP" subtitle="Business Software" />
        <ReadMore
          img={spotifyImg}
          title="Spotify"
          subtitle="Technology / Streaming"
        />
      </div>
    </div>
  );
}

export default LeadingCompanies;
