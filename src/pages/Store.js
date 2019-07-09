import React from "react";
import "../styles/Store.css";
import img1 from "../img/shoes.jpg";
// import img2 from "../img/buty.jpg";
import img3 from "../img/hamak.jpg";
import img4 from "../img/kask.jpg";
import img5 from "../img/przyrzad-as.jpg";
// import img6 from "../img/karabinek.jpg";
import img7 from "../img/rope.jpg";
import img8 from "../img/uprząż.jpg";
class Store extends React.Component {
  state = {};
  render() {
    return (
      <>
        <div className="wrapper">
          <div className="products">
            <img src={img1} alt="buty wspinaczkowe" />
            <h2>Buty wspinaczkowe</h2>
            <p>
              Niezbętnik dla wszystkich wspinaczy. Zapewniają komfortową
              wspinaczkę.{" "}
            </p>
          </div>
          {/* <div className="products">
            <img src={img2} alt="buty górskie" />
            <h2>Buty górskie</h2>
            <p>Buty idealne na długie, górskie wędrówki.</p>
          </div> */}
          <div className="products">
            <img src={img3} alt="hamak" />
            <h2>Hamak</h2>
            <p>Superwygodny i wytrzymały. Nigdzie kawa nie smakuje lepiej ;)</p>
          </div>
          <div className="products">
            <img src={img4} alt="kask" />
            <h2>Kask</h2>
            <p>Dbajmy o swoje bezpieczeństwo. Wspinajmy się w kasku!</p>
          </div>
          <div className="products">
            <img src={img5} alt="przyrząd asekuracyjny" />
            <h2>Przyrząd asekuracyjny</h2>
            <p>Niezawodny przyrząd asekuracyjny.</p>
          </div>
          {/* <div className="products">
            <img src={img6} alt="karabinek" /> <h2>Karabinek</h2>
            <p>Wytrzymały, łatwy w obsłudze.</p>
          </div> */}
          <div className="products">
            <img src={img7} alt="lina" />
            <h2>Lina</h2>
            <p>
              Lina statyczna, doskonała do wspinaczki oraz pracy na wysokości.
            </p>
          </div>
          <div className="products">
            <img src={img8} alt="uprząż" />
            <h2>Uprząż</h2>
            <p>Wygodna i wytrzymała.</p>
          </div>
        </div>
      </>
    );
  }
}

export default Store;
