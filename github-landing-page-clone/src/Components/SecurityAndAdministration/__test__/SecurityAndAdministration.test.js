import { render, screen } from "@testing-library/react";
import SecurityAndAdministration from "../SecurityAndAdministration";

describe("Unit tests on the SecurityAndAdministration component", () => {
  it("should render the component correctly to the user", () => {
    render(<SecurityAndAdministration />);
    const component = screen.getByTestId("securityAdmin");
    expect(component).toBeTruthy();
  });
});
