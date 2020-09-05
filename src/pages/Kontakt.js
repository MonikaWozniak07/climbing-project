import React from "react";
import "../styles/Kontakt.css";
var nodemailer = require("nodemailer");
// import nodemailer from "nodemailer";
// const transport = nodemailer.createTransport({
//   host: "smtp.mailtrap.io",
//   port: 2525,
//   auth: {
//     user: "49a8bc6cc9bbe5",
//     pass: "00fc531f750a1c",
//   },
//   jsonTransport: true,
// });
// let mailOptions = {
//   from: "test@example",
//   to: "foo@example.com",
//   subject: `${this.state.value}`,
//   text: `${this.state.value}`,
//   html: `<b>${this.state.value}</b>`,
// };
class Kontakt extends React.Component {
  state = {
    value: "",
    emptyValue: true,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      value: "",
      emptyValue: true,
    });
  };

  handleClick = () => {
    if (this.state.value.length > 0) {
      this.emptyValue = false;
    } else {
      this.emptyValue = true;
    }
    if (this.emptyValue === false) {
      // transport.sendMail(mailOptions);
      return alert("Dziękujemy, wiadomość wysłana");
    } else return alert("Zawartość formularza jest pusta, napisz coś");
  };

  handleChange = (e) => {
    if (e.target.value.length > 0) {
      this.setState({
        value: e.target.value,
        emptyValue: false,
      });
    } else {
      this.setState({
        emptyValue: true,
      });
    }
  };
  render() {
    return (
      <div>
        <h2>Masz pytanie? Napisz do nas!</h2>
        <form onSubmit={this.handleSubmit} method="POST">
          <div className="form-group">
            <label for="name">Name</label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group">
            <label for="message">Message</label>
            <textarea
              value={this.state.value}
              className="form-control"
              onChange={this.handleChange}
              id="message"
            ></textarea>
          </div>
          {/* <textarea value={this.state.value} onChange={this.handleChange} /> */}
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.handleClick}
          >
            Wyślij
          </button>
          {/* <button onClick={this.handleClick}>
            <span>Wyślij</span>
          </button> */}
        </form>
      </div>
    );
  }
}

export default Kontakt;
