import React from "react";
import { Link } from "react-router-dom";

class Landing extends React.Component {
  render() {
    return (
      <div className="landing-page">
        <div>
          <h1>
            Welcome to MySpotify
          </h1>
          <button type="button">
            <Link to="/main">
              Begin
            </Link>
          </button>
        </div>
      </div>
    )
  }
}

export default Landing