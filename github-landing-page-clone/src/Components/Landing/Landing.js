import React from "react";
import GetStarted from "../GetStarted/GetStarted";
import GitHubFreeForTeams from "../GitHubFreeForTeams/GitHubFreeForTeams";
import Header from "../Header/Header";
import OrganizationsUsingGitHub from "../OrganizationsUsingGitHub/OrganizationsUsingGitHub";
import WorkTogether from "../WorkTogether/WorkTogether";
import "./Landing.scss";

function Landing() {
  return (
    <>
      <Header />
      <div className="appContainer">
        <GetStarted />
        <GitHubFreeForTeams />
        <OrganizationsUsingGitHub />
        <WorkTogether />
      </div>
    </>
  );
}

export default Landing;