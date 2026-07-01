import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { useCart } from "../context/hooks/useCart.js";
import { useWishlist } from "../context/hooks/useWishlist.js";

function Navbar() {
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();

  const links = [
    { label: "Home", path: "/" },
    { label: "Products", path: "/products" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Southern Edge
      </Link>
      <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.path}>
              <Link to={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>{" "}
        <Link to="/wishlist" className="" style={{ textDecoration: "none" }}>
          Wishlist ({wishlistCount})
        </Link>
      </div>

      <Link to="/cart" className="cart-btn">
        Cart ({cartCount})
      </Link>
    </nav>
  );
}

export default Navbar;
