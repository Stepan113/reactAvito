import "./Card.css"

const Card = ({ card }) => {
  return (
    <a href="/product.html" class="card">
      <div class="card__img">
        <img src={card.img} alt="card" />
      </div>
      <h5 class="card__title">{card.title}</h5>
      <strong class="card__price">{card.price}</strong>
      <div class="card-box-desc">
        <span class="card__desc">{card.place}</span>
        <span class="card__desc">{card.date}</span>
      </div>
    </a>
  );
};

export default Card;
