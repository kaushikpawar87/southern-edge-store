import "../styles/product-card.css";
import { Link } from "react-router-dom";
import Button from "./Button";
import { useCart } from "../context/hooks/useCart";

function ProductCard({ product }) {
  const { handleAddToCart } = useCart();
  console.log("Card re-rendered: ", product.name);

  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`}>
        <div>
          <img src={product.image} alt={product.name} />
        </div>
        <h3>{product.name}</h3>
      </Link>
      <p>{product.brand}</p>
      <h4>${product.price}</h4>

      <Button onClick={() => handleAddToCart(product)}>Add To Cart</Button>
    </div>
  );
}

export default ProductCard;
