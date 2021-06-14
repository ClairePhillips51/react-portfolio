import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/js/dist/collapse";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Header() {
  const linkStyle = {
    color: "#c1c8e4"
  };

  return (
    <nav id="header" className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={linkStyle}>
          Claire Phillips
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="/about"
                className={
                  window.location.pathname === "/" || window.location.pathname === "/about"
                    ? "nav-link active"
                    : "nav-link"
                }
                style={linkStyle}
              >
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/projects"
                className={window.location.pathname === "/projects" ? "nav-link active" : "nav-link"}
                style={linkStyle}
              >
                My Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
                style={linkStyle}
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;