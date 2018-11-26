import { SEARCH_ARTIST, LOGIN } from "./types";
import axios from "axios";
import { results } from "../assets/local_api";


export const login = event => dispatch => {
  
  axios.get("spotifyendpoint",
  
  {headers: 
    { Authorization: "Bearer apikey"}
  })
  .then( r => {
    console.log("response", r);
    
  })
  .catch( e => {
    console.log("error", e);
    
  })
  
}
export const searchArtist = () => dispatch => {

  dispatch({
    type: SEARCH_ARTIST,
    payload: results
  })
}