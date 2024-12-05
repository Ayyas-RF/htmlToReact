import React, { useState } from "react";
import "./css/register.css"; // Assuming you have a CSS file for styles

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    // Clear previous errors
    setUsernameError("");
    setPasswordError("");

    // Validate username
    const usernameRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{5,}$/;
    if (!usernameRegex.test(username)) {
      setUsernameError(
        "Username must be at least 5 characters long and include a mix of letters and numbers."
      );
      valid = false;
    }

    // Validate password
    if (password.length < 5) {
      setPasswordError("Password must be at least 5 characters long.");
      valid = false;
    }

    if (valid) {
      alert("Form submitted successfully!");
      // Redirect to another page after the alert is dismissed
      window.location.href = "/login";
    }
  };

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center">
      <div className="row w-75 shadow-lg">
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center bg-primary text-white">
          <h1 className="mb-4">HELLO!</h1>
          <img
            src="public/mountain.svg"
            alt="Mountain"
            className="img-fluid"
            style={{ maxWidth: "60%" }}
          />
        </div>
        <div className="col-md-6 bg-light p-5">
          <h2 className="text-center mb-4">SIGN UP</h2>
          <form id="signup-form" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                New Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <span className="error">{usernameError}</span>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                New Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span className="error">{passwordError}</span>
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </form>
          <p className="text-center mt-3">
            Already have an account?{" "}
            <a href="/login" className="text-decoration-none">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
