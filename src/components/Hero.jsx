import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero">
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
