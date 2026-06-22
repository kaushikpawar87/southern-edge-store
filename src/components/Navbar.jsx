import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { useCart } from "../context/hooks/useCart.js";

function Navbar() {
  const { cartItems } = useCart();

  console.log(useCart());

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
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

      <ul className="nav-links">
        {links.map((link) => (
          <li key={link.path}>
            <Link to={link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>

      <Link to="/cart" className="cart-btn">
        Cart ({cartCount})
      </Link>
    </nav>
  );
}

export default Navbar;
