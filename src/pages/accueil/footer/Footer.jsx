import React from "react";
import "./footer.css";
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 box-address">
            <address id="mg_bottom_0">
              <p className="name">John Doe</p>
              <p>40 Rue Laure Diebold</p>
              <p>69009 Lyon, France</p>
              <p>Téléphone: 06 20 30 40 50</p>
            </address>
            <div className="socialIcon">
              <a
                href="https://github.com/johndoe"
                target="_blank"
                rel="noreferrer noopener"
              >
                <i
                  className="fa-brands fa-github"
                  style={{ color: "#000000" }}
                ></i>
              </a>
              <a
                href="https://twitter.com/johndoe"
                target="_blank"
                rel="noreferrer noopener"
              >
                <i
                  className="fa-brands fa-x-twitter"
                  style={{ color: "#000000" }}
                ></i>
              </a>
              <a
                href="https://linkedin.com/in/johndoe"
                target="_blank"
                rel="noreferrer noopener"
              >
                <i
                  className="fa-brands fa-linkedin"
                  style={{ color: "#000000" }}
                ></i>
              </a>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 link-g">
            <h3>Lien utiles</h3>
            <div className="link-social">
              <i
                class="fa-solid fa-chevron-right"
                style={{ color: "#0d6efd " }}
              ></i>
              <a href="/">Accueil</a>
            </div>
            <div className="link-social">
              <i
                class="fa-solid fa-chevron-right"
                style={{ color: "#0d6efd " }}
              ></i>
              <a href="/">A propos</a>
            </div>
            <div className="link-social">
              <i
                class="fa-solid fa-chevron-right"
                style={{ color: "#0d6efd " }}
              ></i>
              <a href="/">Services</a>
            </div>
            <div className="link-social">
              <i
                class="fa-solid fa-chevron-right"
                style={{ color: "#0d6efd " }}
              ></i>
              <a href="/">Me contacter</a>
            </div>
            <div className="link-social">
              <i
                class="fa-solid fa-chevron-right"
                style={{ color: "#0d6efd " }}
              ></i>
              <a href="/">Mentions légales</a>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 lastReal">
            <h3>Mes dernières réalisations</h3>
            <div className="link-lastReal">
              <i
                class="fa-solid fa-chevron-right"
                style={{ color: "#0d6efd " }}
              ></i>
              <a href="/">Fresh Food</a>
            </div>
            <div className="link-lastReal">
              <i
                class="fa-solid fa-chevron-right"
                style={{ color: "#0d6efd " }}
              ></i>
              <a href="/">Restaurant Akira</a>
            </div>
            <div className="link-lastReal">
              <i
                class="fa-solid fa-chevron-right"
                style={{ color: "#0d6efd " }}
              ></i>
              <a href="/">Espace bien-être</a>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-2 lastArticle">
            <h3>Mes derniers articles</h3>
            <div className="link-article">
              <i
                class="fa-solid fa-chevron-right"
                style={{ color: "#0d6efd " }}
              ></i>
              <a href="/">Coder son site en HTML/CSS</a>
            </div>
            <div className="link-article">
              <i
                class="fa-solid fa-chevron-right"
                style={{ color: "#0d6efd " }}
              ></i>
              <a href="/">Vendre ses produits sur le web</a>
            </div>
            <div className="link-article">
              <i
                class="fa-solid fa-chevron-right"
                style={{ color: "#0d6efd " }}
              ></i>
              <a href="/">Se positionner sur google</a>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">&copy; Designed by John Doe</div>
    </footer>
  );
}

export default Footer;
