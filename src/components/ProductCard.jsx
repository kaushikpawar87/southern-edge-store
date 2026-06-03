import "../styles/product-card.css";

function ProductCard({ name, brand, price, onAddToCart }) {
  return (
    <div className="product-card">
      <h3>{name}</h3>
      <p>{brand}</p>
      <h4>${price}</h4>

      <button onClick={onAddToCart}>Add To Cart</button>
    </div>
  );
}

export default ProductCard;
