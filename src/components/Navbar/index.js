import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="logo"><img src="images/Tanner Companies Inc Logo.png" width="30" height="30" className="d-inline-block align-top" alt=""></img>   Owner Bio <b>  Tim Tanner</b></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/" className={ window.location.pathname === "/" || window.location.pathname === "/about" ? "nav-link active" : "nav-link" }>About</Link>
          </li>
          <li className="nav-item">
            <Link to="/portfolio" className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>Portfolio</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
