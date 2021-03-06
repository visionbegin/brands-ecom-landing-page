import React from "react";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import "./styles.scss";
import fallDays from "../../assets/images/FallDaysAhead@2X.jpg";

const Promo = () => {
  return (
    <section className="container-fluid promo-wrapper">
      <Fade>
        <div
          className="container-fluid promo-img-container"
          style={{ backgroundImage: `url(${fallDays})` }}
        />
      </Fade>
      <Slide bottom>
        <div className="container-fluid promo-text-container">
          <h1>Fall Days Ahead</h1>
          <div className="description">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium. Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem accusantium.Sed ut perspiciatis unde omnis iste natus
            error.
          </div>
          <button className="promoBtn">Shop Fall</button>
        </div>
      </Slide>
    </section>
  );
};

export default Promo;
