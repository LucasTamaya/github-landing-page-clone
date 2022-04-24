import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import SignUpForm from "../SignUpForm";

describe("Unit tests on the SignUpForm component", () => {
  it("should render the component correctly to the user", () => {
    render(<SignUpForm />);
    const form = screen.getByTestId("signUpForm");
    expect(form).toBeTruthy();
  });

  it("should render 3 input fields", () => {
    render(<SignUpForm />);
    const inputFields = screen.getAllByTestId("inputField");
    expect(inputFields).toHaveLength(3);
  });

  it("should render some text when typing in the username input field", () => {
    render(<SignUpForm />);
    const usernameInputField = screen.getAllByTestId("inputField")[0];
    fireEvent.change(usernameInputField, { target: { value: "Hello world" } });
    expect(usernameInputField.value).toBe("Hello world");
  });

  it("should render some text when typing in the email input field", () => {
    render(<SignUpForm />);
    const emailInputField = screen.getAllByTestId("inputField")[1];
    fireEvent.change(emailInputField, { target: { value: "Hello world" } });
    expect(emailInputField.value).toBe("Hello world");
  });

  it("should render some text when typing in the password input field", () => {
    render(<SignUpForm />);
    const passwordInputField = screen.getAllByTestId("inputField")[2];
    fireEvent.change(passwordInputField, { target: { value: "Hello world" } });
    expect(passwordInputField.value).toBe("Hello world");
  });
});

describe("Integration tests on the SignUpForm component", () => {
  it("should render the SignUpSuccessModal with a welcome message after fulfilled and submit the form", async () => {
    render(<SignUpForm />);
    const usernameInputField = screen.getAllByTestId("inputField")[0];
    const emailInputField = screen.getAllByTestId("inputField")[1];
    const passwordInputField = screen.getAllByTestId("inputField")[2];
    const submitBtn = screen.getByRole("button");
    fireEvent.change(usernameInputField, { target: { value: "John Doe" } });
    fireEvent.change(emailInputField, {
      target: { value: "johndoe@gmail.com" },
    });
    fireEvent.change(passwordInputField, { target: { value: "JohnDoe12345" } });
    fireEvent.click(submitBtn);
    const signUpUser = await screen.findByText(/Welcome John Doe/i);
    expect(signUpUser).toBeTruthy();
  });

  it("should render an error message if the username is too short (<2)", async () => {
    render(<SignUpForm />);
    const usernameInputField = screen.getAllByTestId("inputField")[0];
    const emailInputField = screen.getAllByTestId("inputField")[1];
    const passwordInputField = screen.getAllByTestId("inputField")[2];
    const submitBtn = screen.getByRole("button");
    fireEvent.change(usernameInputField, { target: { value: "J" } });
    fireEvent.change(emailInputField, {
      target: { value: "johndoe@gmail.com" },
    });
    fireEvent.change(passwordInputField, { target: { value: "JohnDoe12345" } });
    fireEvent.click(submitBtn);
    const usernameErrMessage = await screen.findByText(
      /This username is too short/i
    );
    expect(usernameErrMessage).toBeTruthy();
  });

  it("should render an error message if the email is not valid", async () => {
    render(<SignUpForm />);
    const usernameInputField = screen.getAllByTestId("inputField")[0];
    const emailInputField = screen.getAllByTestId("inputField")[1];
    const passwordInputField = screen.getAllByTestId("inputField")[2];
    const submitBtn = screen.getByRole("button");
    fireEvent.change(usernameInputField, { target: { value: "John Doe" } });
    fireEvent.change(emailInputField, {
      target: { value: "johndoe@gmail" },
    });
    fireEvent.change(passwordInputField, { target: { value: "JohnDoe12345" } });
    fireEvent.click(submitBtn);
    const emailErrMessage = await screen.findByText(
      /Please enter a valid email address/i
    );
    expect(emailErrMessage).toBeTruthy();
  });

  it("should render an error message if the password is too short (<6)", async () => {
    render(<SignUpForm />);
    const usernameInputField = screen.getAllByTestId("inputField")[0];
    const emailInputField = screen.getAllByTestId("inputField")[1];
    const passwordInputField = screen.getAllByTestId("inputField")[2];
    const submitBtn = screen.getByRole("button");
    fireEvent.change(usernameInputField, { target: { value: "John Doe" } });
    fireEvent.change(emailInputField, {
      target: { value: "johndoe@gmail.com" },
    });
    fireEvent.change(passwordInputField, { target: { value: "12345" } });
    fireEvent.click(submitBtn);
    const passwordErrMessage = await screen.findByText(
      /This password is too short/i
    );
    expect(passwordErrMessage).toBeTruthy();
  });
});
