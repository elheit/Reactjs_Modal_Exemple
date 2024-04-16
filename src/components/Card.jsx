import { useContext } from "react";
import HeaderLogo from "../assets/logo.jpg";
import { MealsContext } from "../store/meals_cart_context";

const Card = ({ meal }) => {
  const { addMealToCart } = useContext(MealsContext);
  return (
    <div className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">{meal.price} $</p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className=".meal-item-actions">
          <button
            className="button undefined"
            onClick={() => addMealToCart(meal)}
          >
            Add to Cart
          </button>
        </p>
      </article>
    </div>
  );
};

export default Card;
