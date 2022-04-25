import {render, screen} from "@testing-library/react";
import GetStarted from "../GetStarted";

describe("Unit tests on the GetStarted component", () => {
    it("should render the component correctly to the user", () => {
        render(<GetStarted />)
        const getStarted = screen.getByTestId("getStarted");
        expect(getStarted).toBeTruthy();
    });

    
})