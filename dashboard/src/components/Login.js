import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", credentials);

    axios
      .post(`${process.env.REACT_APP_API_URL}/login`, {
        email: credentials.email,
        password: credentials.password,
      })
      .then((response) => {
        if (response.data.success) {
          // Save username or email to localStorage
          localStorage.setItem("username", response.data.user.username)
          localStorage.setItem("email", credentials.email);
          navigate("/home");
        } else {
          alert(response.data.message || "Login failed");
        }
      })
      .catch((error) => {
        console.error("Login error:", error);
        alert("Login failed. Check your credentials and try again.");
      });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <form
        onSubmit={handleSubmit}
        className="p-4 border rounded shadow-sm w-100"
        style={{ maxWidth: "400px" }}
      >
        <h2 className="mb-4 text-center">Login</h2>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
            autoComplete="username"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
            autoComplete="current-password"
          />
        </div>

        <button type="submit" className="btn btn-primary w-100 rounded-2">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
