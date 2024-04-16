import { useContext } from "react";
import { MealsContext } from "../store/meals_cart_context";

const Cart = ({ closeDialog }) => {
  const mealsCtx = useContext(MealsContext);
  return (
    <>
      <h2>Your Cart</h2>
      <ul>
        {console.log("ctx===", mealsCtx)}
        {mealsCtx.meals.length === 0 && <p>No items in cart!</p>}
        {mealsCtx.meals &&
          mealsCtx.meals.map((item) => {
            return (
              <li className="cart-item" key={item.id}>
                <p>{`${item.name} - ${item.count} - $${item.price}`}</p>
                <p className="cart-item-actions">
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </p>
              </li>
            );
          })}
      </ul>
      <p className="cart-total">$12.99</p>
      <p className="modal-actions">
        <button className="text-button undefined" onClick={closeDialog}>
          Close
        </button>
        <button className="button undefined">Go to Checkout</button>
      </p>
    </>
  );
};

export default Cart;
