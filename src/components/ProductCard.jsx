import "../styles/product-card.css";
import { Link } from "react-router-dom";

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <div>
        <img src={product.image} alt={product.name} />
      </div>
      <Link to={`/products/${product.id}`}>
        <h3>{product.name}</h3>
      </Link>
      <p>{product.brand}</p>
      <h4>${product.price}</h4>

      <button onClick={() => onAddToCart(product)}>Add To Cart</button>
    </div>
  );
}

export default ProductCard;
