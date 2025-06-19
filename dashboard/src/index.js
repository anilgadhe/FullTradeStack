import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import Login from "./components/Login"; // Import the Login component

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} /> {/* Add Login route */}
        <Route path="/*" element={<Home />} /> {/* Home route for /* */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
