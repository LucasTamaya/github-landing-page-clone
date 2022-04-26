import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import "./BottomSignUpForm.scss";
import SignUpSuccessModal from "../SignUpSuccessModal/SignUpSuccessModal";
import signUpValidationSchema from "../../FormValidationSchema/signUpValidationSchema";

function BottomSignUpForm() {
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
    <div className="bottomForm" data-testid="bottomForm">
      <p className="bottomForm__para">
        Get started for free - join the millions of developers already using
        GitHub to share their code, work together, and build amazing things.
      </p>

      <form className="bottomForm__form" onSubmit={handleSubmit(handleSignUp)}>
        <div className="bottomForm__inputContainer">
          <label className="bottomForm__label" for="username">
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
                  className="bottomForm__input"
                  onChange={onChange}
                  placeholder="Pick a username"
                  data-testid="inputField"
                />
                {/* show error message if error */}
                {!!error && (
                  <p className="bottomForm__error">{error?.message}</p>
                )}
              </>
            )}
          />
        </div>

        <div className="bottomForm__inputContainer">
          <label className="bottomForm__label" for="email">
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
                  className="bottomForm__input"
                  onChange={onChange}
                  placeholder="Your email address"
                  data-testid="inputField"
                />
                {/* show error message if error */}
                {!!error && (
                  <p className="bottomForm__error">{error?.message}</p>
                )}
              </>
            )}
          />
        </div>
        <div className="bottomForm__inputContainer">
          <label className="bottomForm__label" for="password">
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
                  className="bottomForm__input"
                  onChange={onChange}
                  placeholder="Create a password"
                  data-testid="inputField"
                />
                {/* show error message if error */}
                {!!error && (
                  <p className="bottomForm__error">{error?.message}</p>
                )}
              </>
            )}
          />
        </div>

        <button className="bottomForm__btn" type="submit">
          Sign up for GitHub
        </button>
      </form>
      <p className="bottomForm__agreements">
        By clicking "Sign up for GitHub", you agree to our{" "}
        <span>terms of service</span> and <span>privacy statement</span>. We'll
        occasionally send you account related emails.
      </p>

      {!signUpSuccess ? <></> : <SignUpSuccessModal />}
    </div>
  );
}

export default BottomSignUpForm;
