import HeaderLogo from "../assets/logo.jpg";

const Card = ({ description, image, name, price }) => {
  return (
    <div className="meal-item">
      <article>
        <img src={`http://localhost:3000/${image}`} />
        <div>
          <h3>{name}</h3>
          <p className="meal-item-price">{price} $</p>
          <p className="meal-item-description">{description}</p>
        </div>
        <p className=".meal-item-actions">
          <button className="button undefined">Add to Cart</button>
        </p>
      </article>
    </div>
  );
};

export default Card;
