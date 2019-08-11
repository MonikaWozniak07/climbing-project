import React from "react";
import "../styles/Store.css";
import img1 from "../img/shoes.jpg";
import img3 from "../img/hamak.jpg";
import img4 from "../img/kask.jpg";
import img5 from "../img/przyrzad-as.jpg";
import img7 from "../img/rope.jpg";
import img8 from "../img/uprząż.jpg";
class Store extends React.Component {
  state = {
    buty: "199 zł",
    hamak: "79 zł",
    kask: "109 zł",
    prz: "49 zł",
    lina: "389 zł",
    uprząż: "189 zł",
    price: "0"
  };

  render() {
    const { buty, hamak, kask, prz, lina, uprząż, price } = this.state;

    this.handleRemove = () => {
      this.setState({
        price: "0"
      });
    };

    return (
      <>
        <div className="koszyk">
          Do zapłaty:
          <input value={price} />
          <button onClick={this.handleRemove}>Płacę</button>
        </div>
        <span>
          Zachęcamy do zakupów w naszym sklepie. Do wyboru mają państwo produkty
          najwyższej klasy. Najważniejszy dla nas jest komfort klienta.
        </span>
        <div className="wrapper">
          <div className="products">
            <img src={img1} alt="buty wspinaczkowe" />
            <h2>Buty wspinaczkowe {buty}</h2>
            <p>
              Niezbętnik dla wszystkich wspinaczy. Zapewniają komfortową
              wspinaczkę.{" "}
            </p>
            <button
              onClick={() =>
                this.setState({
                  price: buty
                })
              }
            >
              Dodaj do koszyka
            </button>
          </div>
          <div className="products">
            <img src={img3} alt="hamak" />
            <h2>Hamak {hamak}</h2>
            <p>Superwygodny i wytrzymały. Nigdzie kawa nie smakuje lepiej ;)</p>
            <button
              onClick={() =>
                this.setState({
                  price: hamak
                })
              }
            >
              Dodaj do koszyka
            </button>
          </div>
          <div className="products">
            <img src={img4} alt="kask" />
            <h2>Kask {kask}</h2>
            <p>Dbajmy o swoje bezpieczeństwo. Wspinajmy się w kasku!</p>
            <button
              onClick={() =>
                this.setState({
                  price: kask
                })
              }
            >
              Dodaj do koszyka
            </button>
          </div>
          <div className="products">
            <img src={img5} alt="przyrząd asekuracyjny" />
            <h2>Przyrząd asekuracyjny {prz}</h2>
            <p>Niezawodny przyrząd asekuracyjny.</p>
            <button
              onClick={() =>
                this.setState({
                  price: prz
                })
              }
            >
              Dodaj do koszyka
            </button>
          </div>
          <div className="products">
            <img src={img7} alt="lina" />
            <h2>Lina {lina}</h2>
            <p>
              Lina statyczna, doskonała do wspinaczki oraz pracy na wysokości.
            </p>
            <button
              onClick={() =>
                this.setState({
                  price: lina
                })
              }
            >
              Dodaj do koszyka
            </button>
          </div>
          <div className="products">
            <img src={img8} alt="uprząż" />
            <h2>Uprząż {uprząż}</h2>
            <p>Wygodna i wytrzymała.</p>
            <button
              onClick={() =>
                this.setState({
                  price: uprząż
                })
              }
            >
              Dodaj do koszyka
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Store;
