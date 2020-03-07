import React from "react";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSumbit = event => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value }, () => console.log(this.state));
  };

  render() {
    return (
      <div>
        <h2>I already have an account!</h2>
        <div>Sign in with email and password.</div>
        <form onSubmit={this.handleSumbit}>
          <input
            onChange={this.handleChange}
            name="email"
            type="email"
            value={this.state.email}
            placeholder="Email"
            required
          />
          <input
            onChange={this.handleChange}
            name="password"
            type="password"
            value={this.state.password}
            placeholder="Password"
            required
          />

          <input type="submit" value="Sign In" />
        </form>
      </div>
    );
  }
}

export default SignIn;
