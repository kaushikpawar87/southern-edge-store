import "../styles/cart-page.css";

function CartPage({ cartItems, onRemoveFromCart }) {
  const subTotal = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <section className="cart-page">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <table>
          <thead>
            <tr className="cart-item">
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr className="cart-item" key={item.id}>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.price * item.quantity}</td>
                <button onClick={() => onRemoveFromCart(item.id)}>
                  Remove
                </button>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <h2>Total: {subTotal}</h2>
    </section>
  );
}

export default CartPage;
