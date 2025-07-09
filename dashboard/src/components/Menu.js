import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdown, setIsProfileDropdown] = useState(false);
  const navigate = useNavigate();

  const username = localStorage.getItem("username").split("@")[0] || "USERID";

  function handleClick(index) {
    setSelectedMenu(index);
  }

  function handleProfileClick() {
    setIsProfileDropdown(!isProfileDropdown);
  }

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/login");
  }

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.svg" style={{ width: "200px" }} alt="logo_img" />
      <div className="menus">
        <ul>
          <li>
            <Link style={{ textDecoration: "none" }} to="/" onClick={() => handleClick(1)}>
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/orders" onClick={() => handleClick(2)}>
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/holdings" onClick={() => handleClick(3)}>
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/positions" onClick={() => handleClick(4)}>
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/funds" onClick={() => handleClick(5)}>
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>Funds</p>
            </Link>
          </li>
        </ul>

        <hr />

        <div className="profile" onClick={handleProfileClick} style={{ position: "relative", cursor: "pointer" }}>
          <div className="avatar"></div>
          <p className="username">{username}</p>

          {isProfileDropdown && (
            <div
              className="profile-dropdown"
              style={{
                position: "absolute",
                top: "60px",
                right: "0",
                backgroundColor: "#fff",
                boxShadow: "0 0 5px rgba(0,0,0,0.2)",
                borderRadius: "5px",
                padding: "20px",
                zIndex: 1,
              }}
            >
              <button onClick={handleLogout} className="btn btn-sm btn-danger w-100">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
