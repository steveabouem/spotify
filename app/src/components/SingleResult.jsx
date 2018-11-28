import React from "react";
import Rating from "./Rating.jsx"
import { convertRating, getAlbums } from "../actions";
import { connect } from "react-redux";

class SingleResult extends React.Component {

  getAlbums = ( e, id ) => {
    this.props.getAlbums(id);
  }

  render(){

    let key = 0;
    
    return (
      <div className="quarter-width">
        {this.props.result && this.props.result.followers? 
        <div className="single-result-image">

          {/* ===========PREVENT CRASH IF NO IMAGE=========== */}
          {this.props.result.images && this.props.result.images[0]?
            <img src={this.props.result.images[0].url} alt={`${this.props.result.name} on Spotify`} className="artist-image"/>
            :
            <img src="http://www.wellesleysocietyofartists.org/wp-content/uploads/2015/11/image-not-found.jpg" alt={`${this.props.result.name} on Spotify`} className="artist-image"/>

          }

          <button 
          type="button"
          onClick={e => {this.getAlbums(e, this.props.result.id)}} 
          className="artist-name">

            {this.props.result.name}

          </button> 

          <h4>{this.props.result.followers.total} followers</h4>
          <Rating count={this.props.convertRating(this.props.result.popularity)} />
        </div>
        :
        null 
      }

      {this.props.result && this.props.result.album_group? 
        <div className="single-result-image">

          {/* ===========PREVENT CRASH IF NO IMAGE=========== */}
          {this.props.result.images && this.props.result.images[0]?
            <img src={this.props.result.images[0].url} alt={`${this.props.result.name} on Spotify`} className="artist-image"/>
            :
            <img src="http://www.wellesleysocietyofartists.org/wp-content/uploads/2015/11/image-not-found.jpg" alt={`${this.props.result.name} on Spotify`} className="artist-image"/>

          }

          <h1 className="artist-name">
            {this.props.result.name}
          </h1> 
          {
            this.props.result.artists.map( artist =>{
              return <h4 key={key += .22}>{artist.name}</h4>
            })
          }
          <h4>{this.props.result.release_date}</h4>

          <p>{this.props.result.total_tracks} tracks</p>
          <button className="album-external">
            <a href={this.props.result.external_urls.spotify}
            target="_blank" 
            key={key += .83}
            >
            PREVIEW ON SPOTIFY
            </a>
          </button>
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

export default connect(mapStateToProps, { convertRating, getAlbums }) (SingleResult)