import "../styles/cart-page.css";

function CartPage({ cartItems, onRemoveFromCart }) {
  const subTotal = cartItems.reduce((total, item) => {
    return total + item.price;
  }, 0);

  return (
    <section className="cart-page">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-item-list">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <h3>{item.name}</h3>
              <h3>{item.brand}</h3>
              <h3>${item.price}</h3>
              <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <div>
            <h1>Total: {subTotal}</h1>
          </div>
        </div>
      )}
    </section>
  );
}

export default CartPage;
