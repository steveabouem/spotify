import React from "react";

class Navbar extends React.Component {
  redner() {
    return (
      <nav>
        <ul className="navigation-links">
          <li>
            Login
          </li>
          <li>
            Search
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navbar