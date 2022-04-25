import { render, screen } from "@testing-library/react";
import GitHubFreeForTeams from "../GitHubFreeForTeams";

describe("Unit tests on the GitHubFreeForTeams component", () => {
  it("should render the component correctly to the user", () => {
    render(<GitHubFreeForTeams />);
    const component = screen.getByTestId("gitHubFree");
    expect(component).toBeTruthy();
  });
});
