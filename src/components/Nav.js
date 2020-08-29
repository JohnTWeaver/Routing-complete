import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <h3> Home</h3>
      <ul>
        <Link to="/Welcome/:id">
          <li>Welcome</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
