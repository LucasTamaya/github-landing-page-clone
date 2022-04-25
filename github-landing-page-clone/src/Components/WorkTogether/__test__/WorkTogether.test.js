import { render, screen } from "@testing-library/react";
import WorkTogether from "../WorkTogether";

describe("Unit tests on the WorkTogether component", () => {
  it("should render the component correctly to the user", () => {
    render(<WorkTogether />);
    const component = screen.getByTestId("workTogether");
    expect(component).toBeTruthy();
  });
});
