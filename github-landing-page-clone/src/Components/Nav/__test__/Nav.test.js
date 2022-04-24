import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Nav from "../Nav";
import NavMenu from "../NavMenu";

describe("Tests on the Nav component on small screen", () => {
  it("should render the component correctly to the user", () => {
    render(<Nav />);
    const nav = screen.getByTestId("nav");
    expect(nav).toBeTruthy();
  });

  it("should render the small navigation on small screen", () => {
    render(<Nav navState={"small"} />);
    const navSmall = screen.getByTestId("navSmall");
    expect(navSmall).toBeTruthy();
  });

  it("should render the NavMenu component on small screen", () => {
    render(<Nav navState={"small"} />);
    const navMenu = screen.getByTestId("navMenu");
    expect(navMenu).toBeTruthy();
  });
});

describe("Tests on the Nav component on large screen", () => {
  it("should render the large navigation on large screen", () => {
    render(<Nav navState={"large"} />);
    const navLarge = screen.getByTestId("navLarge");
    expect(navLarge).toBeTruthy();
  });

  it("should not render the NavMenu component on large screen", () => {
    render(<Nav navState={"large"} />);
    const navMenu = screen.queryByTestId("navMenu");
    expect(navMenu).toBeFalsy();
  });

  it("should render 6 links on the left", () => {
    render(<Nav navState={"large"} />);
    const navMenuLinks = screen.getAllByTestId("navMenuLink");
    expect(navMenuLinks).toHaveLength(6);
  });
});

describe("Tests on the NavMenu component", () => {
  it("should render 7 links", () => {
    render(<NavMenu showNavMenu={"show"} setShowNavMenu={jest.fn()} />);
    const navMenuLinks = screen.getAllByTestId("navMenuLink");
    expect(navMenuLinks).toHaveLength(7);
  });

  it("should not be visible initialy", () => {
    render(<NavMenu showNavMenu={"hide"} setShowNavMenu={jest.fn()} />);
    const navMenu = screen.getByTestId("navMenu");
    expect(navMenu).not.toBeVisible();
  });

  it("should be visible when clicking on the menu icon", () => {
    render(<Nav navState={"small"} />);
    const menuIcon = screen.getByTestId("MenuIcon");
    const navMenu = screen.getByTestId("navMenu");
    expect(navMenu).not.toBeVisible();
    fireEvent.click(menuIcon);
    expect(navMenu).toBeVisible();
  });
});
