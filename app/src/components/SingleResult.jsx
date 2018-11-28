import React from "react";

class SingleResult extends React.Component {
  render(){
    
    return (
      <div className="quarter-width">
        {this.props.result? 
        <h1>{this.props.result.name}</h1> 
        :
        null 
      }
      </div>
    )
  }
}

export default SingleResult