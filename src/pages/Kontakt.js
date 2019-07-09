import React from "react";
import "../styles/Kontakt.css";

class Kontakt extends React.Component {
  state = {
    value: "",
    emptyValue: true
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      value: "",
      emptyValue: true
    });
  };

  handleClick = () => {
    if (this.state.value.length > 0) {
      this.emptyValue = false;
    } else {
      this.emptyValue = true;
    }
    if (this.emptyValue === false) {
      return alert("Dziękujemy, wiadomość wysłana");
    } else return alert("Zawartość formularza jest pusta, napisz coś");
  };

  handleChange = e => {
    if (e.target.value.length > 0) {
      this.setState({
        value: e.target.value,
        emptyValue: false
      });
    } else {
      this.setState({
        emptyValue: true
      });
    }
  };
  render() {
    return (
      <div>
        <h2>Masz pytanie? Napisz do nas!</h2>
        <form onSubmit={this.handleSubmit}>
          <textarea value={this.state.value} onChange={this.handleChange} />
          <button onClick={this.handleClick}>
            <span>Wyślij</span>
          </button>
        </form>
      </div>
    );
  }
}

export default Kontakt;
