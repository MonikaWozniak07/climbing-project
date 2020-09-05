import React from "react";
import "../styles/App.css";
import Header from "./Header";
import Footer from "./Footer";
import Navigation from "./Navigation";
import Page from "./Page";
import { BrowserRouter as Router } from "react-router-dom";
class App extends React.Component {
  state = {};
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="wrapperek">
          <header>
            <Header />
          </header>
          <main>
            <nav>{<Navigation />}</nav>
            <section>
              <Page />
            </section>
          </main>
          <footer>{<Footer />}</footer>
        </div>
      </Router>
    );
  }
}

export default App;
