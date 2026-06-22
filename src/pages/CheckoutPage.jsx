import { useState } from "react";
import FormInput from "../components/FormInput";
import Button from "../components/Button";
import { useCart } from "../context/hooks/useCart.js";

function CheckoutPage() {
  const { cartItems, setCartItems, orderTotal } = useCart();

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postcode: "",
  });

  const [error, setError] = useState("");

  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const [confirmedOrder, setConfirmedOrder] = useState(null);
  console.log("Order Details:", { confirmedOrder });

  function handleInputChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setError("");

    if (!formData.fullName.trim()) {
      setError("Please enter your Full Name");
      return;
    }
    if (!formData.email.trim()) {
      setError("Please enter your Email");
      return;
    }
    if (!formData.phone.trim()) {
      setError("Please enter your Phone Number");
      return;
    }
    if (!formData.address.trim()) {
      setError("Please enter your Address");
      return;
    }
    if (!formData.city.trim()) {
      setError("Please enter your City");
      return;
    }
    if (!formData.postcode.trim()) {
      setError("Please enter your Postcode");
      return;
    }

    setConfirmedOrder({
      items: cartItems,
      total: orderTotal,
      quantity: totalQuantity,
      customer: formData,
    });

    setOrderSubmitted(true);
    console.log("Order submitted:", formData);
    setCartItems([]);
  }

  return (
    <section>
      <h2>Checkout Page</h2>
      {error && <p>{error}</p>}

      {orderSubmitted && (
        <div>
          <h2>Order Placed Successfully!</h2>

          <p>Thank you for your order. We will contact you shortly.</p>

          <h3>Customer Details</h3>

          <p>Name: {confirmedOrder.customer.fullName}</p>

          <p>Email: {confirmedOrder.customer.email}</p>

          <p>Phone: {confirmedOrder.customer.phone}</p>

          <h3>Order Items</h3>

          <ul>
            {confirmedOrder.items.map((item) => (
              <li key={item.id}>
                {item.name} x {item.quantity} - ${item.price}
              </li>
            ))}
          </ul>

          <p>Total Quantity: {confirmedOrder.quantity}</p>

          <p>Order Total: ${confirmedOrder.total}</p>
        </div>
      )}

      {!orderSubmitted && (
        <div>
          <h3>Order Summary</h3>
          <p>Total Items: {totalQuantity}</p>
          <p>Total Products: {cartItems.length}</p>
          <p>Order Total: ${orderTotal}</p>
          <form onSubmit={handleSubmit}>
            <FormInput
              name="fullName"
              type="text"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleInputChange}
            />
            <FormInput
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <FormInput
              name="phone"
              type="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
            <FormInput
              name="address"
              type="text"
              placeholder="Street Address"
              value={formData.address}
              onChange={handleInputChange}
            />
            <FormInput
              name="city"
              type="text"
              placeholder="City"
              value={formData.city}
              onChange={handleInputChange}
            />
            <FormInput
              name="postcode"
              type="text"
              placeholder="Post Code"
              value={formData.postcode}
              onChange={handleInputChange}
            />

            <Button type="submit">Place Order</Button>
          </form>
        </div>
      )}
    </section>
  );
}

export default CheckoutPage;
