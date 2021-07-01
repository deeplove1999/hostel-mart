import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="header">
    <Link className="brand" to="/">
      Hostel <span className="brand-span">Mart</span>
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        Shop
      </Link>
      <Link className="option" to="/contact">
        Contact
      </Link>
    </div>
  </div>
);

export default Header;
