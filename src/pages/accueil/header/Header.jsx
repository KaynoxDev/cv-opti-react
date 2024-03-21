import React from "react";
import Nav from "./components/Nav";
import "./header.css";

function Header() {
  return (
    <>
      <header>
        <Nav />
        <div className="fond">
          <div className="filter">
            <h1>Bonjour, je suis John Doe</h1>
            <h2>Développeur web full stack</h2>
            <button type="button" className="btn btn-primary">
              En savoir plus
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
