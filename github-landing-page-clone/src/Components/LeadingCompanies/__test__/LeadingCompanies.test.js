import { render, screen } from "@testing-library/react";
import LeadingCompanies from "../LeadingCompanies";

describe("Unit tests on the LeadingCompanies component", () => {
  it("should render the component correctly to the user", () => {
    render(<LeadingCompanies />);
    const component = screen.getByTestId("leadingCompanies");
    expect(component).toBeTruthy();
  });

  it("should render 4 ReadMore cards", () => {
    render(<LeadingCompanies />);
    const cards = screen.getAllByTestId("readMore");
    expect(cards).toHaveLength(4);
  });
});
