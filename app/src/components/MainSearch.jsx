import React from "react";
import Navbar from "./Navbar";
import SearchResults from "./SearchResults.jsx";
import { results } from "../assets/local_api";
import { connect } from "react-redux";
import { searchArtist } from "../actions";

class MainSearch extends React.Component {
  startSearch = async e => {
    e.preventDefault();
    await this.props.searchArtist();
    console.log(this.props);
    
  }

  render(){
    
    return (
      <div className="component-container">
        <Navbar />
        <form className="search-form" onSubmit={e =>{this.startSearch(e)}}>
          <label >
            Search
          </label>

          <div className="search-bar">
            <input type="text" placeholder="Search for an artist">
            </input>
            <button type="submit">
              GO
            </button>
          </div>
        </form>
        <SearchResults results={this.props.results}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  results: state.info
})


export default connect(mapStateToProps, { searchArtist }) ( MainSearch )