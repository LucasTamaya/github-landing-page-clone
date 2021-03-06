import React from "react";
import BottomSignUpForm from "../BottomSignUpForm/BottomSignUpForm";
import BuildOnGitHub from "../BuildOnGitHub/BuildOnGitHub";
import Community from "../Community/Community";
import Footer from "../Footer/Footer";

import GetStarted from "../GetStarted/GetStarted";
import GitHubFreeForTeams from "../GitHubFreeForTeams/GitHubFreeForTeams";
import GitHubStats from "../GitHubStats/GitHubStats";
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
      <div className="mainContainer">
        <GetStarted />
        <GitHubFreeForTeams />
        <OrganizationsUsingGitHub />
        <WorkTogether />
        <LearnAbout />
        <LeadingCompanies />
        <SecurityAndAdministration />
        <BuildOnGitHub />
        <Community />
        <GitHubStats />
      </div>
      <BottomSignUpForm />
      <div className="mainContainer">
        <Footer />
      </div>
    </>
  );
}

export default Landing;
