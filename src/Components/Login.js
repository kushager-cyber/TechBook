import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Login extends Component {
  constructor() {
    super();

    this.state = {
      Username: "",
      Password: "",
      action: "",
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleUsernameChange(e) {
    this.setState({
      Username: e.target.value,
    });
  }
  handlePassword(e) {
    this.setState({ Password: e.target.value });
  }
  handleLogin() {
    if (
      this.state.Username == localStorage.getItem("Username") &&
      this.state.Password === localStorage.getItem("Password")
    ) {
      this.setState({ action: "/BooksList" });
      alert(
        "You have entered right credentials successfully  Login and Now Buy The Book"
      );
    } else {
      alert(
        "Your Login credentials are wrong either you put right credentials or SignUp"
      );
    }
  }

  render() {
    return (
      <div className="login-body">
        <div className="login-form">
          <form method="post">
            <h2 className="text-center1">Log in</h2>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                required="required"
                onChange={this.handleUsernameChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                required="required"
                onChange={this.handlePassword}
              />
            </div>
            <label className="form-check-label">
              <input
                type="checkbox"
                required="required"
                onChange={this.handleLogin}
              />{" "}
              I accept the <a href="#">Terms of Use</a> &amp;{" "}
              <a href="#">Privacy Policy</a>.
            </label>
            <div className="form-group">
              <Link
                type="submit"
                className="btn btn-primary btn-block"
                to={this.state.action}
              >
                Log in
              </Link>
            </div>
          </form>
          <p className="text-center">
            <Link to="/SignUp">Create an Account</Link>
          </p>
        </div>
      </div>
    );
  }
}
