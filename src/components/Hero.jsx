import "../styles/hero.css";

function Hero({ cartCount }) {
  return (
    <section className="hero">
      {cartCount === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <p>{cartCount} items in cart</p>
      )}

      <h1>Southern Edge Cricket</h1>
      <p>
        Premium cricket equipment for players who demand performance and
        precision.
      </p>
      <div className="hero-buttons">
        <button className="primary-btn">Shop Now</button>
        <button className="secondary-btn">Learn More</button>
      </div>
    </section>
  );
}

export default Hero;
