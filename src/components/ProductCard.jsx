import React from "react";
import "../styles/product-card.css";
import { Link } from "react-router-dom";
import Button from "./Button";
import { useCart } from "../context/hooks/useCart";
import { useWishlist } from "../context/hooks/useWishlist";
import { useToast } from "../context/hooks/useToast";

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { showToast } = useToast();

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

      <Button
        onClick={() => {
          addToCart(product);
          showToast(`${product.name} added to cart`, "success");
        }}
      >
        Add To Cart
      </Button>
      <Button
        onClick={() => {
          toggleWishlist(product);
          showToast(`${product.name} added to wishlist`, "success");
        }}
      >
        {isInWishlist(product.id) ? "❤️" : "🤍"}
      </Button>
    </div>
  );
}

export default React.memo(ProductCard);
