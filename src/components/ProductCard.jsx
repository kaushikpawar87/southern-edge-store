import "../styles/product-card.css";

function ProductCard({ name, brand, price }) {
  return (
    <div className="product-card">
      <h3>{name}</h3>
      <p>{brand}</p>
      <h4>${price}</h4>

      <button>Add To Cart</button>
    </div>
  );
}

export default ProductCard;
