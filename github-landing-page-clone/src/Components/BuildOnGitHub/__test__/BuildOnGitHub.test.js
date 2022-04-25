import { render, screen } from "@testing-library/react";
import BuildOnGitHub from "../BuildOnGitHub";

describe("Unit tests on the BuildOnGitHub component", () => {
  it("should render the component correctly to the user", () => {
    render(<BuildOnGitHub />);
    const component = screen.getByTestId("buildOnGitHub");
    expect(component).toBeTruthy();
  });
});
