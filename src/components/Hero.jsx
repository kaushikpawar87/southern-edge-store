import "../styles/hero.css";
import { Link } from "react-router-dom";

function Hero({ cartCount }) {
  return (
    <section className="hero">
      <h1>Southern Edge Cricket</h1>
      <p>
        Premium cricket equipment for players who demand performance and
        precision.
      </p>
      <div className="hero-buttons">
        <Link to="/products" className="">
          <button className="primary-btn">Shop Now</button>
        </Link>
        <button className="secondary-btn">Learn More</button>
      </div>
    </section>
  );
}

export default Hero;
