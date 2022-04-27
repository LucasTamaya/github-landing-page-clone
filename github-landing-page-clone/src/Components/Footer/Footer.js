import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer" data-testid="footer">
      <div className="footer__top">
        <span className="footer__github">GitHub</span>

        <nav className="footer__nav__container">
          <div>
            <h6 className="footer__nav__title">Product</h6>
            <ul className="footer__nav__list">
              <li>
                <button>Features</button>
              </li>
              <li>
                <button>Security</button>
              </li>
              <li>
                <button>Team</button>
              </li>
              <li>
                <button>Enterprise</button>
              </li>
              <li>
                <button>Customer stories</button>
              </li>
              <li>
                <button>The ReadME Project</button>
              </li>
              <li>
                <button>Pricing</button>
              </li>
              <li>
                <button>Ressources</button>
              </li>
              <li>
                <button>Roadmap</button>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="footer__nav__title">Platform</h6>
            <ul className="footer__nav__list">
              <li>
                <button>Developer API</button>
              </li>
              <li>
                <button>Partners</button>
              </li>
              <li>
                <button>Atom</button>
              </li>
              <li>
                <button>Electron</button>
              </li>
              <li>
                <button>GitHub Desktop</button>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="footer__nav__title">Support</h6>
            <ul className="footer__nav__list">
              <li>
                <button>Help</button>
              </li>
              <li>
                <button>Community Forum</button>
              </li>
              <li>
                <button>Professional Services</button>
              </li>
              <li>
                <button>Learning Lab</button>
              </li>
              <li>
                <button>Status</button>
              </li>
              <li>
                <button>Contact GitHub</button>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="footer__nav__title">Company</h6>
            <ul className="footer__nav__list">
              <li>
                <button>About</button>
              </li>
              <li>
                <button>Blog</button>
              </li>
              <li>
                <button>Careers</button>
              </li>
              <li>
                <button>Press</button>
              </li>
              <li>
                <button>Social Impact</button>
              </li>
              <li>
                <button>Shop</button>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom__social">
          <TwitterIcon className="footer__bottom__social__icon" />
          <FacebookIcon className="footer__bottom__social__icon" />
          <YouTubeIcon className="footer__bottom__social__icon" />
          <LinkedInIcon className="footer__bottom__social__icon" />
          <GitHubIcon className="footer__bottom__social__icon" />
        </div>
        <div className="footer__bottom__copyrights">
          <span>&copy; 2020 GitHub, Inc</span>
          <button>Terms</button>
          <button>Privacy</button>
          <button>Site Map</button>
          <button>What is Git?</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
