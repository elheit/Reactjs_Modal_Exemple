const Cart = ({ closeDialog }) => {
  return (
    <>
      <h2>Your Cart</h2>
      <ul>
        <li class="cart-item">
          <p>Margherita Pizza - 1 x $12.99</p>
          <p class="cart-item-actions">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </p>
        </li>
      </ul>
      <p className="cart-total">$12.99</p>
      <p class="modal-actions">
        <button class="text-button undefined" onClick={closeDialog}>
          Close
        </button>
        <button class="button undefined">Go to Checkout</button>
      </p>
    </>
  );
};

export default Cart;
