import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
function Footer() {
  // var backToTopButton = document.getElementById("back-to-top");

  // window.onscroll = function () {
  //   if (
  //     document.body.scrollTop > 20 ||
  //     document.documentElement.scrollTop > 20
  //   ) {
  //     backToTopButton.style.display = "block";
  //   } else {
  //     backToTopButton.style.display = "none";
  //   }
  // };

  // backToTopButton.onClick = function () {
  //   document.body.scrollTop = 0;
  //   document.documentElement.scrollTop = 0;
  // };

  return (
    <footer>
      <div className="container">
        <div className="row box-footer">
          <div className="col-12 col-md-6 col-lg-3 address">
            <h3>John Doe</h3>
            <address>
              <p>40 Rue Laure Diebold</p>
              <p>69009 Lyon, France</p>
              <p>Téléphone: 06 20 30 40 50</p>
            </address>
            <div className="socialIcon">
              <Link to={"https://github.com/github-john-doe"}>
                <i
                  className="fa-brands fa-github"
                  style={{ color: "#000000" }}
                ></i>
              </Link>
              <Link to={"https://twitter.com/twitter-john-doe"}>
                <i
                  className="fa-brands fa-x-twitter"
                  style={{ color: "#000000" }}
                ></i>
              </Link>
              <Link to={"https://www.linkedin.com/in/linkedin-john-doe"}>
                <i
                  className="fa-brands fa-linkedin"
                  style={{ color: "#000000" }}
                ></i>
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 linkGood">
            <h3>Liens utiles</h3>
            <Link>
              <i
                className="fa-solid fa-chevron-right"
                style={{ color: "#0d6efd " }}
              ></i>
              Accueil
            </Link>
            <Link>
              <i
                className="fa-solid fa-chevron-right"
                style={{ color: "#0d6efd " }}
              ></i>
              À propos
            </Link>
            <Link>
              <i
                className="fa-solid fa-chevron-right"
                style={{ color: "#0d6efd " }}
              ></i>
              Services
            </Link>
            <Link>
              <i
                className="fa-solid fa-chevron-right"
                style={{ color: "#0d6efd " }}
              ></i>
              Me contacter
            </Link>
            <Link>
              <i
                className="fa-solid fa-chevron-right"
                style={{ color: "#0d6efd " }}
              ></i>
              Mentions légales
            </Link>
          </div>
          <div className="col-12 col-md-6 col-lg-3 linkreal">
            <h3>Mes réalisations</h3>
            <Link>
              <i
                className="fa-solid fa-chevron-right"
                style={{ color: "#0d6efd " }}
              ></i>
              Fresh Food
            </Link>
            <Link>
              <i
                className="fa-solid fa-chevron-right"
                style={{ color: "#0d6efd " }}
              ></i>
              Restaurant akira
            </Link>
            <Link>
              <i
                className="fa-solid fa-chevron-right"
                style={{ color: "#0d6efd " }}
              ></i>
              Espace bien-être
            </Link>
          </div>
          <div className="col-12 col-md-6 col-lg-3 linkArtcl">
            <h3>Mes derniers articles</h3>
            <Link>
              <i
                className="fa-solid fa-chevron-right"
                style={{ color: "#0d6efd " }}
              ></i>
              Coder son site en HTML/CSS
            </Link>
            <Link>
              <i
                className="fa-solid fa-chevron-right"
                style={{ color: "#0d6efd " }}
              ></i>
              Vendre ses produits sur le web
            </Link>
            <Link>
              <i
                className="fa-solid fa-chevron-right"
                style={{ color: "#0d6efd " }}
              ></i>
              Se positionner sur google
            </Link>
          </div>
        </div>
      </div>
      <div className="copyright">&copy; Designed by John Doe</div>
    </footer>
  );
}

export default Footer;
