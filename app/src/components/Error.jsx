import React from "react";

class Error extends React.Component {
  render() {
    if(this.props.error.error)
    console.log("error props",  this.props.error);
    
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