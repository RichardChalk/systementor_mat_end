import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";
import "../Styling/Testomonial.css";

export const Testominial = () => {
  return (
    <div className="work-section-wrapper" id="testomonials">
      <div className="work-section-top">
        <p className="primary-subheading">Referenser</p>
        <h1 className="primary-heading">Vad säger våra kunder?</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" className="not-richard" />
        <p>
          <i>
            "Jag har aldrig varit så nöjd med en leverantör. Otroligt kvalité
            och service. Jag ger de mina varmaste rekommendationer.... och jag
            arbetar absolut inte hos dem! Absolut INTE!"
          </i>
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Absolut inte Richard</h2>
      </div>
    </div>
  );
};
