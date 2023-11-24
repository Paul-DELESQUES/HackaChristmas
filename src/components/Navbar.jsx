import { Link } from "react-router-dom";
// import "../styles/NavBar.scss";
import React, { useState } from "react";

function NavBar() {
  return (
    <nav>
      {/* <Link className="home-link" to="/home">
        <img className="logo" src={Logo} alt="logo" />
      </Link> */}
      <div>
        <ul>
          <li>
            <Link to="/">Welcome</Link>
          </li>
          <li>
            <Link to="/parallax">Parallax</Link>
          </li>
          <li>
            <Link to="/room">Room</Link>
          </li>
          <li>
            <Link to="/avent">Avent</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
