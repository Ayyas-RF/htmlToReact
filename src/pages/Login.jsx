import React, { useState } from "react";
import "./css/login.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Regular expression for username validation
    const usernameRegex = /^[A-Za-z0-9]{5,}$/;

    // Validate username
    if (!usernameRegex.test(username)) {
      alert(
        "Username must be at least 5 characters long and can only contain letters and numbers."
      );
      return;
    }

    // Validate password
    if (password.length < 5) {
      alert("Password must be at least 5 characters long.");
      return;
    }

    // Valid means directed to home
    alert("Form submitted successfully!");
    navigate("/")
  };

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center">
      <div className="row w-75 shadow-lg">
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center bg-primary text-white">
          <h1 className="mb-4">WELCOME!</h1>
          <img
            src="/home.svg"
            alt="Home"
            className="img-fluid"
            style={{ maxWidth: "60%" }}
          />
        </div>
        <div className="col-md-6 bg-light p-5">
          <h2 className="text-center mb-4">LOGIN</h2>
          <form id="login-form" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                minLength="5"
                pattern="[A-Za-z0-9]+"
                title="Username must be at least 5 characters long and can only contain letters and numbers."
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength="5"
                title="Password must be at least 5 characters long."
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="remember-me"
              />
              <label className="form-check-label" htmlFor="remember-me">
                Remember Me
              </label>
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </form>
          <div className="text-center mt-3">
            <p>Or</p>
            <button className="btn btn-outline-secondary me-2">
              <img
                src="/google.svg"
                alt="Google"
                style={{ width: "20px", marginRight: "5px" }}
              />{" "}
              Google
            </button>
            <button className="btn btn-outline-secondary">
              <img
                src="/facebook.svg"
                alt="Facebook"
                style={{ width: "20px", marginRight: "5px" }}
              />{" "}
              Facebook
            </button>
          </div>
          <p className="text-center mt-3">
            Don't have an account?{" "}
            <Link to="/register" className="text-decoration-none">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
