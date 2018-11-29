import React from "react";

class Error extends React.Component {
  render() {
    if(this.props.error.error)
    
    return(
      <div>
        {
          this.props.error? 
          
          <p  className="error-popup" style={{animationPlayState: "running"}}>
            {this.props.error}
          </p>

          :

          null
        }
      </div>
    )
  }
}

export default Error