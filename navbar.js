import React from "react";
import "../style/navbar.css";

const Navbar = ({ setShow, size }) => {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>
          Mobiles,Labtops,Earphones
        </span>
        <div className="cart" onClick={() => setShow(false)}>
          <span className="span1">MyCart</span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;