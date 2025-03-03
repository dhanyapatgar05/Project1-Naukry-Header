import React from "react";

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
     
    </header>
  );
};

export default Header;