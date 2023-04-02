import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../shoppingCartContext";

function Nav() {
  const { cart } = useContext(ShoppingCartContext);

  return (
    <nav className="navbar">
      <ul className="navlink">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact1">Con</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/cart">
            <div className="cartContainer">
              <img src="/cart.png" alt="" className="nav--img" />
              <p className="cart-length">{cart.length}</p>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

function Header() {
  return (
    <header>
      <div>
        <h2>
          <Link to="/" className="navlogo">Daily Depot</Link>
        </h2>
      </div>
      <Nav />
    </header>
  );
}

export default Header;