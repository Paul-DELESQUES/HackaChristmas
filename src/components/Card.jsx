import { Link } from "react-router-dom";
import "./Card.scss";

function Card() {
  return (
    <div className="card_container">
      <div className="scroll_container">
        <div className="card_box">
          <article className="card_article">
            <img
              src="https://img.freepik.com/vecteurs-premium/fond-arbre-noel-hiver-dans-illustration-couleur-vectorielle-plate_194708-788.jpg"
              className="card_img"
            />
            <div className="card_data">
              <span className="card_description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Officia .
              </span>
              <h2 className="card_title">Père noel</h2>
              <Link to="/room">
                <a href="#" className="card_button">
                  Go to room !!
                </a>
              </Link>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Card;
