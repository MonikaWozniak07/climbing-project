import React from "react";
import "../styles/App.css";
import Header from "./Header";
import Footer from "./Footer";
import Navigation from "./Navigation";
import Page from "./Page";
import { BrowserRouter as Router } from "react-router-dom";
import * as Scroll from "react-scroll";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

class App extends React.Component {
  state = {};

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="wrapperek">
          <header>
            <a id="arrow" href="#">
              <Link to="nav" smooth={true} duration={500}>
                <i class="fas fa-chevron-down"></i>
              </Link>
            </a>
            <Header />
          </header>
          <main>
            <nav id="nav" className="nav">
              {<Navigation />}
            </nav>
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
