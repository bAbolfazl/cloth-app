import React from "react";

import "./singIn-signUp.style.css";

import SingIn from "../../components/signIn/signIn.component";
import SignUp from "../../components/signUp/signup.component";

const SignInPage = () => (
  <div className="signin-page">
    <SingIn />
    <SignUp />
  </div>
);

export default SignInPage;
