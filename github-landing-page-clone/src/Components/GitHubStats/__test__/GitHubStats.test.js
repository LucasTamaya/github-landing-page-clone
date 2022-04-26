import { render, screen } from "@testing-library/react";
import { Context as ResponsiveContext } from "react-responsive";

import GitHubStats from "../GitHubStats";

const MockSmallScreen = () => {
  return (
    <ResponsiveContext.Provider value={{ width: 1023 }}>
      <GitHubStats />
    </ResponsiveContext.Provider>
  );
};

const MockLargeScreen = () => {
  return (
    <ResponsiveContext.Provider value={{ width: 1024 }}>
      <GitHubStats />
    </ResponsiveContext.Provider>
  );
};

describe("Unit tests on the GitHubStats component", () => {
  it("should render the component correctly to the user", () => {
    render(<GitHubStats />);
    const component = screen.getByTestId("gitHubStats");
    expect(component).toBeTruthy();
  });

  it("should render the small version on small screen", () => {
    render(<MockSmallScreen />);
    const smallVersion = screen.getByTestId("smallScreen");
    expect(smallVersion).toBeTruthy();
  });

  it("should render the large version on large screen", () => {
    render(<MockLargeScreen />);
    const smallVersion = screen.getByTestId("largeScreen");
    expect(smallVersion).toBeTruthy();
  });
});
