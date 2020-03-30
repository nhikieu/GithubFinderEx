import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <span className="navbar-brand">
        <i className={icon} />
        {title}
      </span>
      <ul className="navbar-nav">
        <li className="mr-3 d-inline-block nav-item">
          <Link className="text-dark" to="/">
            Home
          </Link>
        </li>
        <li className="d-inline-block nav-item">
          <Link className="text-dark" to="/about">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Github Finder",
  icon: "mx-2 fab fa-github"
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
