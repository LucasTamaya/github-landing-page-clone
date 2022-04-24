import { render, screen } from "@testing-library/react";

import Header from "../Header";

describe("Tests on the header component", () => {
  it("should render the component correctly to the user", () => {
    render(<Header />);
    const header = screen.getByTestId("header");
    expect(header).toBeTruthy();
  });

  it("should only render the header text container on small screen", () => {
    render(<Header />);
    const headerTextContainer = screen.getByTestId("headerTextContainer");
    expect(headerTextContainer).toBeTruthy();
  });
});
