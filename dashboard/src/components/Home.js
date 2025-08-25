import React, { useEffect } from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();

useEffect(() => {
  const username = localStorage.getItem("username");
  const email = localStorage.getItem("email");

  if (!username || !email) {
    navigate("/login");
  }
}, [navigate]);

  return (
    <>
      <TopBar />
      <Dashboard />
      
    </>
  );
};

export default Home;
