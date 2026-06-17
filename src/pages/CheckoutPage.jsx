import { useState } from "react";

const CheckoutPage = () => {
  const [customerName, setCustomerName] = useState("");
  console.log(customerName);

  return (
    <section>
      <h2>Checkout Page</h2>
      <input
        type="text"
        placeholder="Full Name"
        value={customerName}
        onChange={(event) => setCustomerName(event.target.value)}
      />
    </section>
  );
};

export default CheckoutPage;
