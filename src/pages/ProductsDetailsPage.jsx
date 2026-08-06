import { useParams } from "react-router-dom";
import "../styles/product-details.css";
import Button from "../components/Button";
import { useCart } from "../context/hooks/useCart.js";
import { useProducts } from "../context/hooks/useProducts.js";
import { useToast } from "../context/hooks/useToast.js";

function ProductsDetailsPage() {
  const { addToCart } = useCart();
  const { id } = useParams();
  const { products } = useProducts();
  const { showToast } = useToast();

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
        <img src={product.image_url} alt={product.name} />
      </div>
      <div className="product-info">
        <h1>{product.name}</h1>
        <p>{product.brand}</p>
        <p>${product.price}</p>

        <Button
          onClick={() => {
            addToCart(product);
            showToast({
              title: "Added to Cart",
              message: `${product.name} was added to cart`,
              type: "success",
              duration: 3000,
            });
          }}
        >
          Add to Cart
        </Button>
      </div>
    </section>
  );
}

export default ProductsDetailsPage;
