import React from "react";
import SingleResult from "./SingleResult.jsx";

class SearchResults extends React.Component {
  render() {
    return(
      <div className="sub-container">
        {this.props.results.items? this.props.results.items.map( result => {
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