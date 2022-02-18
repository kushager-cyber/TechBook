import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTheData } from "../Actions";

function Signup() {
  const dispatch = useDispatch();
  const [user, setuser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    name = event.target.name;
    value = event.target.value;
    setuser({ ...user, [name]: value });
  };

  let name, value;

  const [data, setData] = useState([]);

  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(setTheData([...data, user]));
    setData([...data, user]);
    setuser({
      name: "",
      username: "",
      email: "",
      password: "",
    });
    if (
      user.name !== "" &&
      user.username !== "" &&
      user.email !== "" &&
      user.password !== ""
    ) {
      if (user.email.includes("@")) {
        navigate("/Login");
      } else {
        alert("Enter a valid email");
      }
    } else {
      alert("Please fill all details");
    }
  };

  return (
    <div className="Signup-body">
      <div className="signup-form">
        <form onSubmit={handleOnSubmit}>
          <div className="row"></div>
          <div className="col-4 offset-4">
            <h2>Sign Up</h2>
          </div>

          <div className="form-group row">
            <label className="col-form-label col-4">Name</label>
            <div className="col-8">
              <input
                type="text"
                className="form-control"
                name="name"
                required="required"
                value={user.name}
                onChange={handleChange}
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
                value={user.username}
                onChange={handleChange}
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
                value={user.email}
                onChange={handleChange}
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
                value={user.password}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group row">
            <div className="col-8 offset-4">
              <button
                type="button"
                className="btn btn-primary btn-lg"
                onClick={handleOnSubmit}
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>

        <div className="text-center">
          Already have an account? <Link to="/Login">Login here</Link>
        </div>
      </div>
    </div>
  );
}
export default Signup;
