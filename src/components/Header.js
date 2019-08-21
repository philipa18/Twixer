import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar justify-content-center">
      <li className="nav-item nav-link">
        <Link to="/twitch">Top Twitch Streams</Link>
      </li>
      <li className="nav-item nav-link">
        <Link to="/">Top Streams</Link>
      </li>
      <li className="nav-item nav-link">
        <Link to="/mixer">Top Mixer Streams</Link>
      </li>
    </nav>
  );
}

export default Header;
