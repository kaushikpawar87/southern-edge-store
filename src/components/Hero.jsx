import "../styles/hero.css";
import { Link } from "react-router-dom";
import Button from "./Button";

function Hero() {
  return (
    <section className="hero">
      <h1>Southern Edge Cricket</h1>
      <p>
        Premium cricket equipment for players who demand performance and
        precision.
      </p>
      <div className="hero-Buttons">
        <Link to="/products" className="">
          <Button className="primary-btn">Shop Now</Button>
        </Link>
        <Link to="/about">
          <Button className="secondary-btn">Learn More</Button>
        </Link>
      </div>
    </section>
  );
}

export default Hero;
