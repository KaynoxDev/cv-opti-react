import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
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
              <Link className="nav-link" href="/">
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/">
                Réalisations
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " href="/">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " href="/">
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
