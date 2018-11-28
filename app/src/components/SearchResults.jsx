import React from "react";
import SingleResult from "./SingleResult.jsx";

class SearchResults extends React.Component {
  render() {
    console.log("results p", this.props);
    
    return(
      <div className="sub-container">
        {this.props.results? this.props.results.map( result => {
          return (
            <SingleResult result={result} />
          )
        })
        :
        null
      }
      </div>
    )
  }
}

export default SearchResults