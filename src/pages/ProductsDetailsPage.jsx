import { useParams } from "react-router-dom";
import { products } from "../data/products";
import "../styles/product-details.css";
import Button from "../components/Button";
import { useCart } from "../context/CartContext";

function ProductsDetailsPage() {
  const { handleAddToCart } = useCart();

  const { id } = useParams();

  const product = products.find((product) => product.id === Number(id));

  if (!product) {
    return (
      <section>
        <h1>Product not found</h1>
      </section>
    );
  }

  return (
    <section className="product-details">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h1>{product.name}</h1>
        <p>{product.brand}</p>
        <p>${product.price}</p>

        <Button onClick={() => handleAddToCart(product)}>Add to Cart</Button>
      </div>
    </section>
  );
}

export default ProductsDetailsPage;
