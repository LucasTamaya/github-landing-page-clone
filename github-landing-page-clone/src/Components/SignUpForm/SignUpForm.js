import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import "./SignUpForm.scss";
import SignUpSuccessModal from "../SignUpSuccessModal/SignUpSuccessModal";
import signUpValidationSchema from "../../FormValidationSchema/signUpValidationSchema";

function SignUpForm() {
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(signUpValidationSchema),
  });

  const handleSignUp = ({ username }) => {
    localStorage.setItem("user", username);
    setSignUpSuccess(true);
    setTimeout(() => {
      setSignUpSuccess(false);
    }, 4000);
  };

  return (
    <>
      <form
        className="signUpForm"
        data-testid="signUpForm"
        onSubmit={handleSubmit(handleSignUp)}
      >
        <label className="signUpForm__label" htmlFor="username">
          Username
        </label>
        <Controller
          control={control}
          name="username"
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <>
              <input
                id="username"
                type="text"
                value={value || ""}
                className="signUpForm__input"
                onChange={onChange}
                data-testid="inputField"
              />
              {/* show error message if error */}
              {!!error && <p className="signUpForm__error">{error?.message}</p>}
            </>
          )}
        />

        <label className="signUpForm__label" htmlFor="email">
          Email
        </label>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <>
              <input
                id="email"
                type="email"
                value={value || ""}
                className="signUpForm__input"
                onChange={onChange}
                data-testid="inputField"
              />
              {/* show error message if error */}
              {!!error && <p className="signUpForm__error">{error?.message}</p>}
            </>
          )}
        />

        <label className="signUpForm__label" htmlFor="password">
          Password
        </label>
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <>
              <input
                id="password"
                type="password"
                value={value || ""}
                className="signUpForm__input"
                onChange={onChange}
                data-testid="inputField"
              />
              {/* show error message if error */}
              {!!error && <p className="signUpForm__error">{error?.message}</p>}
            </>
          )}
        />

        <p className="signUpForm__pwdInfo">
          Make sure it's at least 15 characters OR at least 8 characters
          including a number and a lowercase letter. <span>Learn more.</span>
        </p>

        <button className="signUpForm__btn" type="submit">
          Sign up for GitHub
        </button>

        <p className="signUpForm__agreements">
          By clicking "Sign up for GitHub", you agree to our{" "}
          <span>Terms of Service</span> and <span>Privacy Statement.</span>{" "}
          We'll occasionally send you account related emails.
        </p>
      </form>

      {!signUpSuccess ? <></> : <SignUpSuccessModal />}
    </>
  );
}

export default SignUpForm;
