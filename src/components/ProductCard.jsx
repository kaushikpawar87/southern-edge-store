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
          showToast({
            title: "Added to Cart",
            message: `${product.name} was added to cart`,
            type: "success",
            // duration: 10000,
          });
        }}
      >
        Add To Cart
      </Button>
      <Button
        onClick={() => {
          const alreadyInWishlist = isInWishlist(product.id);
          toggleWishlist(product);
          const title = alreadyInWishlist
            ? "Removed from Wishlist"
            : "Added to Wishlist";
          const message = alreadyInWishlist
            ? `${product.name} was removed from wishlist`
            : `${product.name} is added to wishlist`;
          showToast({ title: title, message: message, type: "success" });
        }}
      >
        {isInWishlist(product.id) ? "❤️" : "🤍"}
      </Button>
    </div>
  );
}

export default React.memo(ProductCard);
