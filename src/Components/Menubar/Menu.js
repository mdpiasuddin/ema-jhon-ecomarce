import React from "react";

import { Link } from "react-router-dom";

import "./Menubar.css";
const Menu = () => {
  return (
    <div>
      <div className="bg-dark p-3 d-flex justify-content-between text-center ">
        <div className="left">
          <img src="Images/Logo.svg" className="iconimg" alt="" />
        </div>
        <div className="right ">
          <Link className="navvv p-3 text-white fs-4 text">Shop</Link>
          <Link className="navvv p-3 text-white fs-4 text">Order Reveiw</Link>
          <Link className="navvv p-3 text-white fs-4 text">Inventory</Link>
          <Link className="navvv p-3 text-white fs-4 text">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
