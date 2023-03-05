import React from "react";
import "../Styling/Contact.css";

export const Contact = () => {
  return (
    <div className="contact-page-wrapper" id="contact">
      <h1 className="primary-heading">Har du en fråga?</h1>
      <h1 className="primary-heading">Låt oss hjälpa dig</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="yourmail@gmail.com" />
        <button className="secondary-button">Skicka</button>
      </div>
    </div>
  );
};
