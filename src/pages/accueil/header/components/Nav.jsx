import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid  mx-4">
        <Link className="navbar-brand" to="/">
          John Doe
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-bars" style={{ color: "#ffffff" }}></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav  ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Réalisations
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/">
                Me contacter
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
