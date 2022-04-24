import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";

function NavMenu({ showNavMenu, setShowNavMenu }) {
  return (
    <div
      className={`navMenu ${showNavMenu}`}
      data-testid="navMenu"
      style={showNavMenu === "hide" ? { opacity: 0 } : { opacity: 1 }}
    >
      <div className="navMenu__items">
        <div className="closeMenu__icon">
          <CloseIcon
            sx={{ cursor: "pointer" }}
            onClick={() => setShowNavMenu("hide")}
          />
        </div>
        <div className="navMenu__links">
          <div className="navMenu__link" data-testid="navMenuLink">
            <button className="navMenu__link__btn">Sign In</button>
            <KeyboardArrowDownIcon
              className="navMenu__link__icon"
              sx={{ fontSize: 20 }}
            />
          </div>
          <div className="navMenu__link" data-testid="navMenuLink">
            <button className="navMenu__link__btn">Why GitHub ?</button>
            <KeyboardArrowDownIcon
              className="navMenu__link__icon"
              sx={{ fontSize: 20 }}
            />
          </div>
          <div className="navMenu__link" data-testid="navMenuLink">
            <button className="navMenu__link__btn">Team</button>
            <KeyboardArrowDownIcon
              className="navMenu__link__icon"
              sx={{ fontSize: 20 }}
            />
          </div>
          <div className="navMenu__link" data-testid="navMenuLink">
            <button className="navMenu__link__btn">Enterprise</button>
            <KeyboardArrowDownIcon
              className="navMenu__link__icon"
              sx={{ fontSize: 20 }}
            />
          </div>
          <div className="navMenu__link" data-testid="navMenuLink">
            <button className="navMenu__link__btn">Explore</button>
            <KeyboardArrowDownIcon
              className="navMenu__link__icon"
              sx={{ fontSize: 20 }}
            />
          </div>
          <div className="navMenu__link" data-testid="navMenuLink">
            <button className="navMenu__link__btn">Market Place</button>
            <KeyboardArrowDownIcon
              className="navMenu__link__icon"
              sx={{ fontSize: 20 }}
            />
          </div>
          <div className="navMenu__link" data-testid="navMenuLink">
            <button className="navMenu__link__btn">Pricing</button>
            <KeyboardArrowDownIcon
              className="navMenu__link__icon"
              sx={{ fontSize: 20 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavMenu;
