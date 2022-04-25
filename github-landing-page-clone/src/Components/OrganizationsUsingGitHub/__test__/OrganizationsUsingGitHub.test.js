import { render, screen } from "@testing-library/react";
import OrganizationsUsingGitHub from "../OrganizationsUsingGitHub";

describe("Unit tests on the OrganizationsUsingGitHub component", () => {
  it("should render the component correctly to the user", () => {
    render(<OrganizationsUsingGitHub />);
    const component = screen.getByTestId("organizations");
    expect(component).toBeTruthy();
  });
});
