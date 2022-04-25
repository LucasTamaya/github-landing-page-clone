import { render, screen } from "@testing-library/react";
import ReadMore from "../ReadMore";

describe("Unit tests on the ReadMore component", () => {
  it("should render the component correctly to the user", () => {
    render(<ReadMore />);
    const component = screen.getByTestId("readMore");
    expect(component).toBeTruthy();
  });
});
