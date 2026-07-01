import { useWishlist } from "../context/hooks/useWishlist";
import ProductCard from "../components/ProductCard";
import "../styles/products-page.css";

function WishlistPage() {
  const { wishlistItems } = useWishlist();

  console.log(wishlistItems);

  return (
    <section>
      {wishlistItems.length === 0 ? (
        <div>
          <h1>Your wishlist is empty.</h1>
        </div>
      ) : (
        <div>
          <h1>Your Wishlist</h1>

          <div className="products-grid">
            {" "}
            {wishlistItems.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
export default WishlistPage;
