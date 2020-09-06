import React from "react";
import "../styles/HomePage.css";
const HomePage = () => {
  return (
    <>
      <div className="home">
        <h2>O sklepie</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ab
          aut officiis cupiditate. Est ipsum at veritatis iure temporibus,
          inventore, corporis voluptatibus qui laboriosam vero architecto,
          repellat nihil dolor. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Exercitationem, architecto? Voluptatum earum
          mollitia, dolorem inventore tenetur aperiam vel atque id consequuntur
          aliquid praesentium recusandae eaque nobis hic esse maiores quibusdam!
          <br></br>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
          eveniet deleniti, blanditiis quis, soluta neque eum dolorum nam
          sapiente minus vel est porro amet nihil cum veniam dolorem, enim iure.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure culpa
          illo libero, asperiores laboriosam qui eveniet dolores eius
          accusantium id tempora maiores totam hic in dignissimos a saepe, nemo
          ea.
        </p>
        <h2>Skontaktuj sie z nami</h2>
        <div className="contact">
          <div className="contact-phone">
            <a href="tel:+48 666 666 666">
              <i class="fas fa-phone"></i>
              <span>+48 666 666 666</span>
            </a>
          </div>
          <div className="contact-email">
            <a target="_blank" href="mailto:sklepwspinaczkowy@gmail.com">
              <i class="far fa-envelope-open"></i>
              <span>sklepwspinaczkowy@gmail.com</span>
            </a>
          </div>
          <div className="contact-adress">
            <a
              target="_blank"
              href="https://www.google.pl/maps/place/Weso%C5%82a+3,+30-444+Libert%C3%B3w/@49.9662271,19.890194,17z/data=!3m1!4b1!4m5!3m4!1s0x47165d5b7d2c59fb:0x5cba89145467dfec!8m2!3d49.9662237!4d19.8923827?hl=pl&authuser=0"
            >
              <i class="fas fa-map-marker-alt"></i>
              <span>ul. Wesoła 3, Kraków</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
