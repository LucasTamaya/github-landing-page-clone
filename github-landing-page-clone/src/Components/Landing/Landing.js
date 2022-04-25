import React from "react";

import GetStarted from "../GetStarted/GetStarted";
import GitHubFreeForTeams from "../GitHubFreeForTeams/GitHubFreeForTeams";
import Header from "../Header/Header";
import LeadingCompanies from "../LeadingCompanies/LeadingCompanies";
import LearnAbout from "../LearnAbout/LearnAbout";
import OrganizationsUsingGitHub from "../OrganizationsUsingGitHub/OrganizationsUsingGitHub";
import SecurityAndAdministration from "../SecurityAndAdministration/SecurityAndAdministration";
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
        <LearnAbout />
        <LeadingCompanies />
        <SecurityAndAdministration />
      </div>
    </>
  );
}

export default Landing;
