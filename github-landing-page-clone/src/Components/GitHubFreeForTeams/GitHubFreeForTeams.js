import React from "react";

import "./GitHubFreeForTeams.scss";

function GitHubFreeForTeams() {
  return (
    <div className="gitHubFree" data-testid="gitHubFree">
      <div className="gitHubFree__info">
        <span className="gitHubFree__new">NEW</span>
        <div>
          <h3 className="gitHubFree__title">GitHub is now free for teams</h3>
          <p className="gitHubFree__para">
            GitHub Free gives teams private repositories with unlimited
            collaborators at no cost. GitHub Team is now reduced to $4 per
            user/month.
          </p>
        </div>
      </div>
      <button className="gitHubFree__btn">Try GitHub Free</button>
    </div>
  );
}

export default GitHubFreeForTeams;
