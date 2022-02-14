import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useHistory } from "react-router-dom";
// eslint-disable-next-line import/no-anonymous-default-export
export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Username: "",
      Email: "",
      Password: "",
      action: "",
    };

    this.handleFormData = this.handleFormData.bind(this);
  }

  handleFormData() {
    localStorage.setItem("Name", this.state.Name);
    localStorage.setItem("Username", this.state.Username);
    localStorage.setItem("Email", this.state.Email);
    localStorage.setItem("Password", this.state.Password);

    this.setState({
      action: "/Login",
    });
  }
  render() {
    return (
      <div className="Signup-body">
        <div className="signup-form">
          <form className="form-horizontal">
            <div className="row">
              <div className="col-8 offset-4">
                <h2>Sign Up</h2>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-form-label col-4">Name</label>
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  required="required"
                  onChange={(e) => this.setState({ Name: e.target.value })}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-form-label col-4">Username</label>
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  required="required"
                  onChange={(e) => this.setState({ Username: e.target.value })}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-form-label col-4">Email Address</label>
              <div className="col-8">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  required="required"
                  onChange={(e) => this.setState({ Email: e.target.value })}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-form-label col-4">Password</label>
              <div className="col-8">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  required="required"
                  onChange={(e) => this.setState({ Password: e.target.value })}
                />
              </div>
            </div>

            <div className="form-group row">
              <div className="col-8 offset-4">
                <p>
                  <label className="form-check-label">
                    <input type="checkbox" required="required" /> I accept the{" "}
                    <a href="#">Terms of Use</a> &amp;{" "}
                    <a href="#">Privacy Policy</a>.
                  </label>
                </p>
                <Link
                  type="submit"
                  className="btn btn-primary btn-lg"
                  // onClick={this.handleFormData}
                  to="/Login"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </form>
          <div className="text-center">
            Already have an account? <a href="#">Login here</a>
          </div>
        </div>
      </div>
    );
  }
}
