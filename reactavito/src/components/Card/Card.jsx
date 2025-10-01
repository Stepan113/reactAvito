import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ card }) => {
  return (
    <Link to={`/product/${card.id}`} className="card">
      <div className="card__img">
        <img src={card.img} alt="card" />
      </div>
      <h5 className="card__title">{card.title}</h5>
      <strong className="card__price">{card.price}</strong>
      <div className="card-box-desc">
        <span className="card__desc">{card.place}</span>
        <span className="card__desc">{card.date}</span>
      </div>
    </Link>
  );
};

export default Card;
