import { render, screen } from "@testing-library/react";
import LearnAbout from "../LearnAbout";

describe("Unit tests on the LearnAbout component", () => {
  it("should render the component correctly to the user", () => {
    render(<LearnAbout />);
    const component = screen.getByTestId("learnAbout");
    expect(component).toBeTruthy();
  });
});
