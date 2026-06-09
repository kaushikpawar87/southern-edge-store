function OrderSummary({ subTotal }) {
  const shipping = 15;
  const total = subTotal + shipping;

  return (
    <div className="order-summary">
      <h2>Order Summary</h2>

      <p>Subtotal: ${subTotal}</p>
      <p>Shipping: ${shipping}</p>

      <hr />

      <h3>Total: ${total}</h3>

      <button>Checkout</button>
    </div>
  );
}

export default OrderSummary;
