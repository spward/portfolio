import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as PersonalLogo } from "../../images/logo.svg";
export const Header = () => {
  return (
    <div className="header">
      <div className="nav-container">
        <a className="logo" href="/">
          <PersonalLogo />
        </a>
        <div className="nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/work" className="nav-link">
            My Work
          </Link>
        </div>
      </div>
    </div>
  );
};
