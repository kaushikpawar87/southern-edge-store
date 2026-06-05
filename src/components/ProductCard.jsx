import "../styles/product-card.css";

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>{product.brand}</p>
      <h4>${product.price}</h4>

      <button onClick={() => onAddToCart(product)}>Add To Cart</button>
    </div>
  );
}

export default ProductCard;
