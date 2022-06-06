import React from "react";
import {Link} from "react-router-dom"
// use react-router Link or NavLink
const Navbar = () => {
  return (
    <div data-cy="navbar">
      <Link data-cy="navbar-home-link" to="/products">Products</Link>
      <span data-cy="navbar-cart-items-count">{0}</span>
      <button data-cy="navbar-login-logout-button">Logout</button>
    </div>
  );
};

export default Navbar;
