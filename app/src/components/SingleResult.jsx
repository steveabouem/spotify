import React from "react";
import Rating from "./Rating.jsx"
import { convertRating } from "../actions";
import { connect } from "react-redux";

class SingleResult extends React.Component {
  render(){
    
    return (
      <div className="quarter-width">
        {this.props.result? 
        <div className="single-result-image">

          {/* ===========PREVENT CRASH IF NO IMAGE=========== */}
          {this.props.result.images && this.props.result.images[0]?
            <img src={this.props.result.images[0].url} alt={`${this.props.result.name} on Spotify`} className="artist-image"/>
            :
            null
          }

          <h1>{this.props.result.name}</h1> 
          <h4>{this.props.result.followers.total} followers</h4>
          <Rating count={this.props.convertRating(this.props.result.popularity)} />
        </div>
        :
        null 
      }
      </div>
    )
  }
}

const mapStateToProps= state => ({
  rating: state.rating
})

export default connect(mapStateToProps, { convertRating }) (SingleResult)