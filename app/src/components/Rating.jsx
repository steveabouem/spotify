import React from "react";
import star from "../assets/images/star.png";


class Rating extends React.Component {

  render() {
    console.log("rating propr", this.props);
    
    let key = 0;
    return(
      <div className="star-rating">
        { this.props.count?
          this.props.count.map(number => {
            return <img key={key+=1} src={ star } alt="star rating"/>
          })
          :
          null
        }
      </div>
    )
  }
}


export default Rating