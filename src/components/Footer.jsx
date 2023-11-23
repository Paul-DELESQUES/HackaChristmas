// import React from "react";
import "./Footer.scss";
import Instagram from "../assets/instagram.png";
import Facebook from "../assets/facebook.png";
import X from "../assets/x.png";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <a href="#" className="footer_logo">
          Christmas
        </a>
        <ul className="social-media">
          <li>
            <a href="www.facebook.com"  className="footer_social_link">
            <img src={Facebook} alt="facebook" /></a>
          </li>
          <li>
            <a href="www.twitter.com"  className="footer_social_link">
              <img src={X} alt="x" />
              </a>
          </li>
          <li>
            <a href="www.instagram.com" className="footer_social_link">
              <img src={Instagram} />
            </a>
          </li>
        </ul>
      </div>
      <span> © LesCarnivs : 2023 | Legal Mention | Contact </span>
    </footer>
  );
}

export default Footer;
