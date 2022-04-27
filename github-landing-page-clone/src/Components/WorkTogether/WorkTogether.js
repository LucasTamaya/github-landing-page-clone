import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import "./WorkTogether.scss";

function WorkTogether() {
  return (
    <div className="workTogether" data-testid="workTogether">
      <span className="workTogether__miniTitle">GitHub for teams</span>

      <h2 className="workTogether__title">A better way to work together</h2>

      <p className="workTogether__para">
        GitHub brings teams together to word through problems, move ideas
        forward, and learn from each other along the way.
      </p>
      <button className="workTogether__btn">
        Sign up your team
        <ArrowRightAltIcon />
      </button>
    </div>
  );
}

export default WorkTogether;
