import { render, screen } from "@testing-library/react";

import Community from "../Community";

describe("Unit tests on the Community component", () => {
  it("should render the component correctly to the user", () => {
    render(<Community />);
    const component = screen.getByTestId("community");
    expect(component).toBeTruthy();
  });

  it("should render 4 ReadMore cards", () => {
    render(<Community />);
    const cards = screen.getAllByTestId("readMore");
    expect(cards).toHaveLength(4);
  });
});
