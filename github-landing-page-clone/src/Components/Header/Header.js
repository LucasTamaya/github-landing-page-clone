import React from "react";
import { useMediaQuery } from "react-responsive";
import Nav from "../Nav/Nav";
import SignUpForm from "../SignUpForm/SignUpForm";

import "./Header.scss";
import logo from "../../assets/images/contribution-graph.svg"

function Header() {
  // Detect on small screen
  const isSmallScreen = useMediaQuery({
    query: "(max-width: 1223px)",
  });

  // Detect on large screen
  const isLargeScreen = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  return (
    <header data-testid="header" className="header">
      {/* Nav on small screen */}
      {isSmallScreen && <Nav navState={"small"} />}

      {/* Nav on large screen */}
      {isLargeScreen && <Nav navState={"large"} />}

      <div className="header__contents" data-testid="headerTextContainer">
        <div>
          <h1 className="header__title">Built for developers</h1>
          <p className="header__para">
            GitHub is a development platform inspired by the way you work. From{" "}
            <span>open source</span> to <span>business</span>, you can host and
            review code, manage projects, and build software alongside 50
            millions developers.
          </p>
        </div>

        <SignUpForm />
      </div>
    </header>
  );
}

export default Header;
