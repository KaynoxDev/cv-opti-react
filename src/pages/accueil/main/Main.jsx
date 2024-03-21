import React from "react";
import "./main.css";

function Main() {
  return (
    <main>
      <div className="fond">
        <div className="filter">
          <h1>Bonjour, je suis John Doe</h1>
          <h2>Développeur web full stack</h2>
          <button type="button" className="btn btn-primary">
            En savoir plus
          </button>
        </div>
      </div>

      <section className="apropos">
        <div className="container-fluid">
          <div className="row-col-2">
            <article className="col">
              <h2 className="title">à propos</h2>
              <p>
                Passionné par l'informatique et les nouvelles technologies, j'ai
                suivi une formation d'
                <strong>intégrateur-développeur web au CEF</strong>. Au cours de
                cette formation, j'ai pu acquérir des bases solides pour
                travailler dans le domaine du <strong>développement web</strong>
                .
              </p>
            </article>
            <article className="col"></article>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
