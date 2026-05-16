import React from "react";
import { Link } from "react-router-dom";
import "./../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        Campus Notification Center
      </div>

      <div className="navbar-links">
        <Link to="/">All Notifications</Link>
        <Link to="/priority">Priority Inbox</Link>
      </div>
    </nav>
  );
}

export default Navbar;