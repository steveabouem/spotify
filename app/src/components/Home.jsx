import React from "react";
import Navbar from "./Navbar.jsx";

class Home extends React.Component {
  render() {
    return (
      <div className="component-container">
      <Navbar/>
      <h1>Search page</h1>
    </div>
    )
  }
}

export default Home