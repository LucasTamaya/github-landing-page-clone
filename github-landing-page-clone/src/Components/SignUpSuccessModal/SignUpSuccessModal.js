import React from "react";

import "./SignUpSuccessModal.scss";

function SignUpSuccessModal() {
  return (
    <span className="successMessage">
      Welcome {localStorage.getItem("user")}
    </span>
  );
}

export default SignUpSuccessModal;
