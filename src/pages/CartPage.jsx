function CartPage({ cartCount }) {
  return (
    <section>
      <h1>Your Cart</h1>

      {cartCount === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <p>You have {cartCount} items in your cart</p>
      )}
    </section>
  );
}

export default CartPage;
