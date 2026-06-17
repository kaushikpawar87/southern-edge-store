import { Link } from "react-router-dom";

function OrderSummary({ subTotal }) {
  const shipping = 15;
  const total = subTotal + shipping;

  return (
    <div className="order-summary">
      <h2>Order Summary</h2>
      <div>
        {" "}
        <p>Subtotal: ${subTotal}</p>
      </div>
      <div>
        {" "}
        <p>Shipping: ${shipping}</p>
      </div>

      <hr />

      <h3>Total: ${total}</h3>
      <Link to={"/checkout"}>
        <button>Checkout</button>
      </Link>
    </div>
  );
}

export default OrderSummary;
