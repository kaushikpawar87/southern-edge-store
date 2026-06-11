import { useParams } from "react-router-dom";
import { products } from "../data/products";

function ProductsDetailsPage({ onAddToCart }) {
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
    <section>
      <h1>{product.name}</h1>
      <p>{product.brand}</p>
      <p>{product.price}</p>

      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </section>
  );
}

export default ProductsDetailsPage;
