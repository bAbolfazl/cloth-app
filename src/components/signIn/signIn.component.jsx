import React from "react";

import "./signin.styles.css";

import FormInput from "../formInput/formInput.component";
import CustomBtn from "../customBtn/customBtn.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log('handle submit')

    this.setState({ email: "", password: "" });
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="signin">
        {/* <p onClick={signInWithGoogle}>hiii</p> */}
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            onChange={this.handleChange}
            value={this.state.email}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            label="password"
            required
          />
          <div className="buttons">
            <CustomBtn type="submit"> Sign in </CustomBtn>
            <CustomBtn type='button' onClick={signInWithGoogle}>
              Sign in with Google
            </CustomBtn>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
