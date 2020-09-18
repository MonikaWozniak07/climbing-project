import React, { Component } from "react";
import "../styles/Login.css";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValidation = ({ formValues, ...rest }) => {
  let valid = true;
  Object.values(formValues).forEach((val) => {
    val.length > 0 && (valid = false);
  });
  Object.values(rest).forEach((val) => {
    val === null && (valid = false);
  });
  return valid;
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      formValues: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      },
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (formValidation(this.state)) {
      console.log(`
      Imię: ${this.state.firstName}
      `);
      prompt(
        `Dziękujemy ${this.state.firstName}, założenia konta`,
        "Twój kod zniżkowy to #34523"
      );
    } else {
      alert("wypełnij formularz");
    }
  };
  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formValues = { ...this.state.formValues };
    switch (name) {
      case "firstName":
        formValues.firstName =
          value.length < 3 ? "minimum 3 znaki wymagane" : "";
        break;
      case "lastName":
        formValues.lastName =
          value.length < 3 ? "minimum 3 znaki wymagane" : "";
        break;
      case "email":
        formValues.email = emailRegex.test(value) ? "" : "błedny email";
        break;
      case "password":
        formValues.password =
          value.length < 6 ? "minimum 6 znaków wymagane" : "";
        break;
      default:
        break;
    }
    this.setState({ formValues, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formValues } = this.state;
    return (
      <>
        <div className="form-wrapper">
          <h1>Załóż konto</h1>
          <form action="" noValidate onSubmit={this.handleSubmit}>
            <div className="firstName">
              <label htmlFor="firstName">Imię</label>
              <input
                className={formValues.firstName.length > 0 ? "error" : null}
                placeholder=""
                name="firstName"
                type="text"
                noValidate
                onChange={this.handleChange}
              />
              {formValues.firstName.length > 0 && (
                <p className="red">{formValues.firstName}</p>
              )}
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Nazwisko</label>
              <input
                className={formValues.lastName.length > 0 ? "error" : null}
                placeholder=""
                name="lastName"
                type="text"
                noValidate
                onChange={this.handleChange}
              />
              {formValues.lastName.length > 0 && (
                <p className="red">{formValues.lastName}</p>
              )}
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                className={formValues.email.length > 0 ? "error" : null}
                placeholder=""
                name="email"
                type="email"
                noValidate
                onChange={this.handleChange}
              />
              {formValues.email.length > 0 && (
                <p className="red">{formValues.email}</p>
              )}
            </div>
            <div className="password">
              <label htmlFor="password">Hasło</label>
              <input
                className={formValues.password.length > 0 ? "error" : null}
                placeholder=""
                name="password"
                type="password"
                noValidate
                onChange={this.handleChange}
              />
              {formValues.password.length > 0 && (
                <p className="red">{formValues.password}</p>
              )}
            </div>
            <div className="submitBtn">
              <button className="login_btn" type="submit">
                Zaloguj
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default Login;
