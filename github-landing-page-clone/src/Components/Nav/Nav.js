import React, { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import "./Nav.scss";
import NavMenu from "./NavMenu";

function Nav({ navState }) {
  const [showNavMenu, setShowNavMenu] = useState("hide");

  return (
    <nav data-testid="nav">
      {navState === "small" && (
        <div className="navSmall" data-testid="navSmall">
          <GitHubIcon sx={{ color: "white" }} />
          <div className="navSmall__right">
            <button className="navSmall__right__btn">Sign up</button>
            <MenuIcon
              sx={{ color: "white", cursor: "pointer" }}
              onClick={() => setShowNavMenu("show")}
            />
          </div>
          <NavMenu showNavMenu={showNavMenu} setShowNavMenu={setShowNavMenu} />
        </div>
      )}

      {navState === "large" && (
        <div className="navLarge" data-testid="navLarge">
          <div className="navLarge">
            <div className="navLarge__left">
              <GitHubIcon sx={{ color: "white" }} />
              <div className="navMenu__link" data-testid="navMenuLink">
                <button className="navMenu__link__btn">Why GitHub ?</button>
                <KeyboardArrowDownIcon className="navMenu__link__icon" sx={{fontSize: 20}}/>
              </div>
              <div className="navMenu__link" data-testid="navMenuLink">
                <button className="navMenu__link__btn">Team</button>
                <KeyboardArrowDownIcon className="navMenu__link__icon" sx={{fontSize: 20}}/>
              </div>
              <div className="navMenu__link" data-testid="navMenuLink">
                <button className="navMenu__link__btn">Enterprise</button>
                <KeyboardArrowDownIcon className="navMenu__link__icon" sx={{fontSize: 20}}/>
              </div>
              <div className="navMenu__link" data-testid="navMenuLink">
                <button className="navMenu__link__btn">Explore</button>
                <KeyboardArrowDownIcon className="navMenu__link__icon" sx={{fontSize: 20}}/>
              </div>
              <div className="navMenu__link" data-testid="navMenuLink">
                <button className="navMenu__link__btn">Market Place</button>
                <KeyboardArrowDownIcon className="navMenu__link__icon" sx={{fontSize: 20}}/>
              </div>
              <div className="navMenu__link" data-testid="navMenuLink">
                <button className="navMenu__link__btn">Pricing</button>
                <KeyboardArrowDownIcon className="navMenu__link__icon" sx={{fontSize: 20}}/>
              </div>
            </div>
            <div className="navLarge__right">
              <input
                className="navLarge__right__input"
                type="text"
                placeholder="Search GitHub"
              />
              <button className="navLarge__right__btn--in">Sign In</button>
              <button className="navLarge__right__btn">Sign Up</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Nav;
