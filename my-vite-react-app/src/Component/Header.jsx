import React from "react";
import { FaSearch } from "react-icons/fa";

import "./Header.css";

const Header = () => {
  return (
    <header className="header-container">
      <div className="logo-section">
        <img src="https://pbs.twimg.com/profile_images/1772331192085274624/PlbkwMwX_400x400.png" alt="Naukri Logo" className="logo" />
        <span className="logo-text">naukri</span>
      </div>
      <nav className="nav-links">
        <a href="#" className="nav-item">Jobs</a>
        <a href="#" className="nav-item">Companies</a>
        <a href="#" className="nav-item">Services</a>
      </nav>
      <div className="search-section">
        <input type="text" placeholder="Search jobs here" className="search-input" />
        <button className="search-button">
          <FaSearch />
        </button>
      </div>
      <div className="auth-buttons">
        <button className="login-button">Login</button>
        <button className="register-button">Register</button>
      </div>
      <div className="employer-section">
        <span className="employer-text">For employers ▼</span>
      </div>
     
    </header>
  );
};

export default Header;