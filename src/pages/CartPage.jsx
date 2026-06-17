import OrderSummary from "../components/OrderSummary";
import "../styles/cart-page.css";

function CartPage({
  cartItems,
  onRemoveFromCart,
  increaseQuantity,
  decreaseQuantity,
}) {
  const subTotal = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <section className="cart-page">
      {" "}
      <h1>Your Cart</h1>
      <div className="cart-layout">
        <div className="cart-table-container">
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
                    <td>${item.price.toFixed(2)}</td>
                    <td className="quantity-display">
                      <button onClick={() => decreaseQuantity(item.id)}>
                        -
                      </button>
                      {item.quantity}
                      <button onClick={() => increaseQuantity(item.id)}>
                        +
                      </button>
                    </td>
                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                    <td>
                      <button onClick={() => onRemoveFromCart(item.id)}>
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        <OrderSummary subTotal={subTotal} />
      </div>
    </section>
  );
}

export default CartPage;
