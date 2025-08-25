import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Login Data:", data);

    axios
      .post(`${process.env.REACT_APP_API_URL}/login`, {
        email: data.email,
        password: data.password,
      })
      .then((response) => {
        if (response.data.success) {
          // Save username and email to localStorage
          localStorage.setItem("username", response.data.user.username);
          localStorage.setItem("email", data.email);
          navigate("/");
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
        onSubmit={handleSubmit(onSubmit)}
        className="p-4 border rounded shadow-sm w-100"
        style={{ maxWidth: "400px" }}
      >
        <h2 className="mb-4 text-center">Login</h2>

        {/* Email Field */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            id="email"
            {...register("email", { required: "Email is required" })}
            autoComplete="username"
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email.message}</div>
          )}
        </div>

        {/* Password Field */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            id="password"
            {...register("password", { required: "Password is required" })}
            autoComplete="current-password"
          />
          {errors.password && (
            <div className="invalid-feedback">{errors.password.message}</div>
          )}
        </div>

        <button type="submit" className="btn btn-primary w-100 rounded-2">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
