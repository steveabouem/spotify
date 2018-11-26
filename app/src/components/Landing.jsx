import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../actions";

class Landing extends React.Component {
  
  login = e => {
    this.props.login(e)
  }

  render() {
    return (
      <div className="landing-page">
        <div>
          <h1>
            Welcome to MySpotify
          </h1>
          <button type="button" onClick={this.login}>
            <Link to="/main">
              Login
            </Link>
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  results: state.info
})

export default connect (mapStateToProps, { login }) ( Landing )