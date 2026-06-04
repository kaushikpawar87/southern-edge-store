import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar({ cartCount }) {
  const links = [
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
