import React from "react";
import "../styles/product-card.css";
import { Link } from "react-router-dom";
import Button from "./Button";
import { useCart } from "../context/hooks/useCart";
import { useWishlist } from "../context/hooks/useWishlist";

function ProductCard({ product }) {
  const { handleAddToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

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
      <Button onClick={() => toggleWishlist(product)}>
        {isInWishlist(product.id) ? "❤️" : "🤍"}
      </Button>
    </div>
  );
}

export default React.memo(ProductCard);
