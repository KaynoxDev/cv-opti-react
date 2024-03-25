import "./main.css";
function Main() {
  return (
    <main>
      <img
        src="../../../images/banner.jpg"
        alt="img du fond"
        className="img-fluid"
      />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 titleOffer">
            <h2>Mon offre de services</h2>
            <p>Voici les prestations sur lesquelles je peux intervenir.</p>
          </div>
          <div className="row box-offer">
            <div className="col-12 col-md-4 service1">
              <i class="fa-solid fa-display" style={{ color: "#0d6efd " }}></i>
              <h2>ux design</h2>
              <p>
                L'<strong>UX Design</strong> est une méthode de conception
                centrée sur l'utilisateur.Son but est d'offrir une expérience de
                navigation optimal à l'internaute.
              </p>
            </div>
            <div className="col-12 col-md-4 service2">
              <i class="fa-solid fa-display" style={{ color: "#0d6efd " }}></i>
              <h2>ux design</h2>
              <p>
                L'<strong>UX Design</strong> est une méthode de conception
                centrée sur l'utilisateur.Son but est d'offrir une expérience de
                navigation optimal à l'internaute.
              </p>
            </div>
            <div className="col-12 col-md-4 service3">
              <i class="fa-solid fa-display" style={{ color: "#0d6efd " }}></i>
              <h2>ux design</h2>
              <p>
                L'<strong>UX Design</strong> est une méthode de conception
                centrée sur l'utilisateur.Son but est d'offrir une expérience de
                navigation optimal à l'internaute.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
