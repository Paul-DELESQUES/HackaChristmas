import "../styles/Footer.scss";
import Instagram from "../assets/instagram.png";
import Facebook from "../assets/facebook.png";
import X from "../assets/x.png";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <a href="#">Christmas</a>
        <ul className="social-media">
          <li>
            <a href="www.facebook.com" className="footer_social_link">
              <img href="www.facebook.com" src={Facebook} alt="facebook" />
            </a>
          </li>
          <li>
            <a href="www.twitter.com" className="footer_social_link">
              <img src={X} href="www.twitter.com" alt="x" />
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
