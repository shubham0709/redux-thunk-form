import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div style={{display: "flex", justifyContent: "space-around"}}>
        <Link to="/registration"> Registration Page </Link>
        <Link to="/login"> Login Page </Link>
      </div>
    </div>
  );
};

export default Navbar;
