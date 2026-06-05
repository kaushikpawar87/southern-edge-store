import ProductCard from "../components/ProductCard";

function CartPage({ cartItems }) {
  return (
    <section>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id}>
              <h3>{item.name}</h3>
              <h3>{item.brand}</h3>
              <h3>{item.price}</h3>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default CartPage;
