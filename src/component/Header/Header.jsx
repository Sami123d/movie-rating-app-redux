import React from "react";
import "./header.scss";
import avatarimage from "../../images/no.webp"
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <Link to="/"style={{textDecoration:"none", }}>
        <div className="logo">Movie App</div>
      </Link>

      <div className="img-user">
        <img src={avatarimage} alt="" />
      </div>
    </div>
  );
}

export default Header;
