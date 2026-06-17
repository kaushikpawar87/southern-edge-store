import { useState } from "react";

function CheckoutPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postcode: "",
  });

  function handleInputChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Order submitted:", formData);
  }

  return (
    <section>
      <h2>Checkout Page</h2>
      <form action="" onSubmit={handleSubmit}>
        <input
          name="fullName"
          type="text"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleInputChange}
        />
        <input
          name="email"
          type="text"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          name="phone"
          type="text"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleInputChange}
        />
        <input
          name="address"
          type="text"
          placeholder="Street Address"
          value={formData.address}
          onChange={handleInputChange}
        />
        <input
          name="city"
          type="text"
          placeholder="City"
          value={formData.city}
          onChange={handleInputChange}
        />
        <input
          name="postcode"
          type="text"
          placeholder="Post Code"
          value={formData.postcode}
          onChange={handleInputChange}
        />

        <button type="submit">Place Order</button>
      </form>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </section>
  );
}

export default CheckoutPage;
