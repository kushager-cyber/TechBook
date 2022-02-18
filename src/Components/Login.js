import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Login(props) {
  let userDetails = useSelector((state) => state.SetTheData.userData);

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();

  const handleOnSubmit = () => {
    if (
      userDetails.some((Element) => Element.username === username) &&
      userDetails.some((Element) => Element.password === password)
    ) {
      navigate("/BooksList");
    } else {
      alert("Please enter a valid username and password!!");
    }
  };
  return (
    <div className="login-body">
      <div className="login-form">
        <form>
          <h2 className="text-center1">Log in</h2>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              required="required"
              value={username}
              onChange={(e) => setusername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              required="required"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          <label className="form-check-label">
            <input type="checkbox" required="required" /> I accept the{" "}
            <a href="/">Terms of Use</a> &amp; <a href="/">Privacy Policy</a>.
          </label>
          <div className="form-group">
            <button
              type="button"
              className="btn btn-primary btn-block"
              onClick={handleOnSubmit}
            >
              Log in
            </button>
          </div>
        </form>
        <p className="text-center">
          <Link to="/SignUp">Create an Account</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
