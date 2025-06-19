import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Data:', credentials);

    axios.post(`${process.env.REACT_APP_API_URL}/login`, {
      username: credentials.username,
      password: credentials.password,
    }).then(response => {
      console.log("Login success:", response.data);
      navigate('/'); // Redirect to the home page (/* route)
    }).catch(error => {
      console.error("Login error:", error);
      alert("Login failed. Check your credentials and try again.");
    });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm w-100" style={{ maxWidth: "400px" }}>
        <h2 className="mb-4 text-center">Login</h2>

        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username:</label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100 rounded-2">Login</button>
      </form>
    </div>
  );
};

export default Login;
