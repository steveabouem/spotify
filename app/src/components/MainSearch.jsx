import React from "react";
import Navbar from "./Navbar";
import SearchResults from "./SearchResults.jsx";
import Error from "./Error.jsx";
import { results } from "../assets/local_api";
import { connect } from "react-redux";
import { searchArtist } from "../actions";

class MainSearch extends React.Component {
  startSearch = async e => {

    e.preventDefault();
    let input = e.target.value;
    
    await this.props.searchArtist(input);
  }

  render(){
    console.log(this.props);
    
    return (
      <div className="component-container">
        <Navbar />
        {
          this.props.results && this.props.results.error?
        <Error error={this.props.results.error.message}/>
        :
        null
        }
        <form className="search-form">
          <label >
            Search
          </label>

          <div className="search-bar">
            <input type="text" placeholder="Search for an artist" 
              onChange={e =>{this.startSearch(e)}} onPaste={e =>{this.startSearch(e)}}
            />
            <button type="submit">
              GO
            </button>
          </div>
        </form>
        {this.props.results.items?

        <SearchResults results={this.props.results.items}/>
        :
        null
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  results: state.info
})


export default connect(mapStateToProps, { searchArtist }) ( MainSearch )