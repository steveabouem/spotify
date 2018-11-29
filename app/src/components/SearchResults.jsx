import React from "react";
import SingleResult from "./SingleResult.jsx";

class SearchResults extends React.Component {
  
  render() {
    let key = 0;
    return(
      <div className="sub-container">
        {this.props.results? this.props.results.map( result => {
          return (
            <SingleResult key={key += 0.4} result={result} />
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