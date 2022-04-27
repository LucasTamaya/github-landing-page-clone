import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import StorageIcon from "@mui/icons-material/Storage";

import "./SecurityAndAdministration.scss";
import businessImg from "../../assets/images/business.png";

function SecurityAndAdministration() {
  return (
    <div className="securityAdmin" data-testid="securityAdmin">
      <span className="securityAdmin__miniTitle">Security and administration</span>
      <h2 className="securityAdmin__title">Your business needs, met</h2>
      <p className="securityAdmin__para">
        From flexible hosting ti granular access controls, we've got your
        security requirement covered.
      </p>
      <button className="securityAdmin__btn">
        Learn how GitHub Enterprise works
        <ArrowRightAltIcon />
      </button>
      <div className="securityAdmin__services">
        <div className="securityAdmin__services__one">
          <img
            className="securityAdmin__services__one__img"
            src={businessImg}
            alt="business img"
          />
        </div>

        <div className="securityAdmin__services__two">
          <h3 className="securityAdmin__services__two__title">Code Security</h3>
          <p className="securityAdmin__services__two__para">
            Prevent problems before they happen. Protected branches, signed
            commits, and required status checks protect your work and help you
            maintain a high standard for your code.
          </p>
          <h3 className="securityAdmin__services__two__title">
            Access controlled
          </h3>
          <p className="securityAdmin__services__two__para">
            Encourage teams to work together while limiting access to those who
            need it with granular permissions and authentification through
            SAML/SSO and LDAP.
          </p>
        </div>

        <div className="securityAdmin__services__three">
          <StorageIcon
            className="securityAdmin__services__three__icon"
            sx={{ fontSize: 40 }}
          />
          <div>
            <h3 className="securityAdmin__services__three__title">
              Hosted where you need it
            </h3>
            <p className="securityAdmin__services__three__para">
              Securely and reliably host your work on GitHub using GitHub
              Enterprise Cloud. Or deploy GitHub Enterprise Server in your own
              data centers or in a private cloud using Amazon Web Services,
              Azure, or Google Cloud Platform.
            </p>
            <button className="securityAdmin__services__three__btn">
              Compare plans
              <ArrowRightAltIcon />
            </button>
            <button className="securityAdmin__services__three__btn">
              Contact Sales for more
              <ArrowRightAltIcon />
            </button>
            <button className="securityAdmin__services__three__btn">
              Informations
              <ArrowRightAltIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecurityAndAdministration;
