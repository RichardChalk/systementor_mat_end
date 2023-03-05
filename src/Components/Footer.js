import React from "react";
import Logo from "../Assets/logo.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import "../Styling/Footer.css";

export const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" className="footer-logo" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Kvalite</span>
          <span>Hjälp</span>
          <span>Dela</span>
          <span>Jobba hos oss</span>
          <span>Referenser</span>
          <span>Arbetssätt</span>
        </div>
        <div className="footer-section-columns">
          <span>08-234-567</span>
          <span>hjalp@systementor.se</span>
          <span>tidning@systementor.se</span>
          <span>karriar@systementor.se</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};
