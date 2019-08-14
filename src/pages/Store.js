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
    buty: 199,
    hamak: 79,
    kask: 109,
    prz: 49,
    lina: 389,
    uprząż: 189,
    price: "0"
  };

  render() {
    const { buty, hamak, kask, prz, lina, uprząż, price } = this.state;

    this.handleRemove = () => {
      this.setState({
        price: "0"
      });
      if (price > 0) {
        alert("Dziękujemy za dokonanie opłaty");
      }
    };

    return (
      <>
        <div className="koszyk">
          <form>
            <input value={`Do zapłaty: ${price} zł`} />
          </form>
          <button onClick={this.handleRemove}>Płacę</button>
        </div>
        <span>
          Zachęcamy do zakupów w naszym sklepie. Do wyboru mają państwo produkty
          najwyższej klasy. Najważniejszy dla nas jest komfort klienta.
        </span>
        <div className="wrapper">
          <div className="products">
            <img src={img1} alt="buty wspinaczkowe" />
            <h2>Buty wspinaczkowe 199 zł</h2>
            <p>
              Niezbętnik dla wszystkich wspinaczy. Zapewniają komfortową
              wspinaczkę.{" "}
            </p>
            <button
              onClick={() =>
                this.setState({
                  price: parseInt(price) + parseInt(buty)
                })
              }
            >
              Dodaj do koszyka
            </button>{" "}
          </div>
          <div className="products">
            <img src={img3} alt="hamak" />
            <h2>Hamak 79 zł</h2>
            <p>Superwygodny i wytrzymały. Nigdzie kawa nie smakuje lepiej ;)</p>
            <button
              onClick={() =>
                this.setState({
                  price: parseInt(price) + parseInt(hamak)
                })
              }
            >
              Dodaj do koszyka
            </button>{" "}
          </div>
          <div className="products">
            <img src={img4} alt="kask" />
            <h2>Kask 109 zł</h2>
            <p>Dbajmy o swoje bezpieczeństwo. Wspinajmy się w kasku!</p>
            <button
              onClick={() =>
                this.setState({
                  price: parseInt(price) + parseInt(kask)
                })
              }
            >
              Dodaj do koszyka
            </button>{" "}
          </div>
          <div className="products">
            <img src={img5} alt="przyrząd asekuracyjny" />
            <h2>Przyrząd asekuracyjny 49 zł</h2>
            <p>Niezawodny przyrząd asekuracyjny.</p>
            <button
              onClick={() =>
                this.setState({
                  price: parseInt(price) + parseInt(prz)
                })
              }
            >
              Dodaj do koszyka
            </button>{" "}
          </div>
          <div className="products">
            <img src={img7} alt="lina" />
            <h2>Lina 389 zł</h2>
            <p>
              Lina statyczna, doskonała do wspinaczki oraz pracy na wysokości.
            </p>
            <button
              onClick={() =>
                this.setState({
                  price: parseInt(price) + parseInt(lina)
                })
              }
            >
              Dodaj do koszyka
            </button>{" "}
          </div>
          <div className="products">
            <img src={img8} alt="uprząż" />
            <h2>Uprząż 189 zł</h2>
            <p>Wygodna i wytrzymała.</p>
            <button
              onClick={() =>
                this.setState({
                  price: parseInt(price) + parseInt(uprząż)
                })
              }
            >
              Dodaj do koszyka
            </button>{" "}
          </div>
        </div>
      </>
    );
  }
}

export default Store;
