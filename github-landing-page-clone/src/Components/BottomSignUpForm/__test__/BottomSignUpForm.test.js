import { fireEvent, render, screen } from "@testing-library/react";

import BottomSignUpForm from "../BottomSignUpForm";

describe("Unit tests on the BottomSignUpForm component", () => {
  it("should render the component correctly to the user", () => {
    render(<BottomSignUpForm />);
    const component = screen.getByTestId("bottomForm");
    expect(component).toBeTruthy();
  });

  it("should render 3 input fields", () => {
    render(<BottomSignUpForm />);
    const inputFields = screen.getAllByTestId("inputField");
    expect(inputFields).toHaveLength(3);
  });

  it("should render some text when typing in the username field", () => {
    render(<BottomSignUpForm />);
    const usernameInputField = screen.getByPlaceholderText(/Pick a username/i);
    fireEvent.change(usernameInputField, { target: { value: "John Doe" } });
    expect(usernameInputField.value).toBe("John Doe");
  });

  it("should render some text when typing in the email field", () => {
    render(<BottomSignUpForm />);
    const emailInputField = screen.getByPlaceholderText(/Your email address/i);
    fireEvent.change(emailInputField, {
      target: { value: "johndoe@gmail.com" },
    });
    expect(emailInputField.value).toBe("johndoe@gmail.com");
  });

  it("should render some text when typing in the password field", () => {
    render(<BottomSignUpForm />);
    const passwordInputField =
      screen.getByPlaceholderText(/Create a password/i);
    fireEvent.change(passwordInputField, {
      target: { value: "johndoe12345" },
    });
    expect(passwordInputField.value).toBe("johndoe12345");
  });
});

describe("Integration tests on the BottomSignUpForm", () => {
  it("should render the SignUpSuccessModal with a welcome message after fulfilled and submit the form", async () => {
    render(<BottomSignUpForm />);
    const usernameInputField = screen.getByPlaceholderText(/Pick a username/i);
    const emailInputField = screen.getByPlaceholderText(/Your email address/i);
    const passwordInputField =
      screen.getByPlaceholderText(/Create a password/i);
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
    render(<BottomSignUpForm />);
    const usernameInputField = screen.getByPlaceholderText(/Pick a username/i);
    const emailInputField = screen.getByPlaceholderText(/Your email address/i);
    const passwordInputField =
      screen.getByPlaceholderText(/Create a password/i);
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
    render(<BottomSignUpForm />);
    const usernameInputField = screen.getByPlaceholderText(/Pick a username/i);
    const emailInputField = screen.getByPlaceholderText(/Your email address/i);
    const passwordInputField =
      screen.getByPlaceholderText(/Create a password/i);
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
    render(<BottomSignUpForm />);
    const usernameInputField = screen.getByPlaceholderText(/Pick a username/i);
    const emailInputField = screen.getByPlaceholderText(/Your email address/i);
    const passwordInputField =
      screen.getByPlaceholderText(/Create a password/i);
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
