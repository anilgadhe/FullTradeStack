import React, { useState } from 'react';
import axios from "axios";

const Signup = () => {
  const [form, setForm] = useState({
    email: '',
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data:', form);

    const apiUrl = `${process.env.REACT_APP_API_URL}/signup`;
    console.log('Sending signup to:', apiUrl);

    try {
      const response = await axios.post(apiUrl, {
        email: form.email,
        username: form.username,
        password: form.password,
      });

      if (response.data.success) {
        alert("Signup successful! Redirecting to login...");
        window.location.href = "https://fulltradestack-dashboard.onrender.com/login";
      } else {
        alert(response.data.message || "Signup failed. Try again.");
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("Signup failed. Please check your input and try again.");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm w-100" style={{ maxWidth: "400px" }}>
        <h2 className="mb-4 text-center">Signup</h2>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            autoComplete="email"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username:</label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={form.username}
            onChange={handleChange}
            required
            autoComplete="username"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
            autoComplete="new-password"
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
