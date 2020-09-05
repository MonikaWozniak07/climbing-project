import React from "react";
import "../styles/footer.css";
class Footer extends React.Component {
  state = {};
  render() {
    return (
      <>
        <div className="footer">
          <p>Copyright 2020 Sklep wspinaczkowy </p>
          <span>Developed with ❤ by Monika Woźniak</span>
        </div>
      </>
    );
  }
}

export default Footer;
