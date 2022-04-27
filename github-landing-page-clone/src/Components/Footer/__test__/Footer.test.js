import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Footer from "../Footer";

describe("Unit tests on the Footer component", () => {
  it("should render the component correctly to the user", () => {
    render(<Footer />);
    const component = screen.getByTestId("footer");
    expect(component).toBeTruthy();
  });
});
