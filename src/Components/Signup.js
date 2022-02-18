import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTheData } from "../Actions";

function Signup() {
  const dispatch = useDispatch();
  const [userDetails, setUserDetails] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const [data, setData] = useState([]);
  let name, value;
  const handleChange = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUserDetails({ ...userDetails, [name]: value });
  };
  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(setTheData([...data, userDetails]));
    setData([...data, userDetails]);
    setUserDetails({
      name: "",
      username: "",
      email: "",
      password: "",
    });
    if (
      userDetails.name !== "" &&
      userDetails.username !== "" &&
      userDetails.email !== "" &&
      userDetails.password !== ""
    ) {
      navigate("/Login");
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
                value={userDetails.name}
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
                value={userDetails.username}
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
                value={userDetails.email}
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
                value={userDetails.password}
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
