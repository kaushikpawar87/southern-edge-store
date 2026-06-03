import "../styles/navbar.css";
function Navbar() {
  const links = ["Products", "Brands", "About", "Contact"];

  return (
    <nav className="navbar">
      <div className="logo">Southern Edge</div>

      <ul className="nav-links">
        {links.map((link) => (
          <li key={link}>{link}</li>
        ))}
      </ul>

      <button className="cart-btn">Cart (0)</button>
    </nav>
  );
}

export default Navbar;
