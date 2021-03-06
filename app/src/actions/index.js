import { SEARCH_RESULTS, LOGIN, ERROR } from "./types";
import axios from "axios";
import { results } from "../assets/local_api";
import { client_id, client_secret } from "../secrets";

var uri = "http://localhost:3000/main",
scope = "user-read-private user-read-email";

export const generateRandomString = length => {
  let result = "";
  const choices =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
  while (result.length <= length) {
    result += choices.charAt(Math.floor(Math.random() * choices.length));
  }
  
  return result;
};

export const login = event => dispatch => {
  
  
  const state = generateRandomString(16);
  
  let url = "https://accounts.spotify.com/authorize";
  url += "?response_type=token";
  url += `&client_id=${encodeURIComponent(client_id)}`;
  url += `&scope=${encodeURIComponent(scope)}`;
  url += `&redirect_uri=${encodeURIComponent(uri)}`;
  url += `&state=${encodeURIComponent(state)}`;;
  
  window.location = url;
  
  
  dispatch({
    type: LOGIN,
    payload: window.location.hash.split("=")[1].split("&")[0]
  })
};


export const searchArtist = input => dispatch => {
  axios.get(`https://api.spotify.com/v1/search?q=${encodeURIComponent(input)}&type=artist&limit=12`, 
  {
    headers: {
      Authorization: `Bearer ${window.location.hash.split("=")[1].split("&")[0]}`,
      Accept: "application/json",
      "Content-Type": "application/json",
      
    }
  })
  .then(r => {
    
    dispatch({
      type: SEARCH_RESULTS,
      payload: r.data.artists.items
    })
    
  })
  .catch( e => {
    dispatch({
      type: ERROR,
      payload: e
    })
    
  })
  
}

export const convertRating = number => dispatch => {
  let rawRating = Math.round(number / 20),
  array = [];
  
  for( let i = 1; i < rawRating; i ++ ) {
    array.push(i);
  }
  
  return (array)
}


export const getAlbums = id => dispatch => {
  axios.get(`https://api.spotify.com/v1/artists/${encodeURIComponent(id)}/albums`, 
  {headers: {
    Authorization: `Bearer ${window.location.hash.split("=")[1].split("&")[0]}`,
    Accept: "application/json",
    "Content-Type": "application/json",
  }}
  )
  .then( r => {
    
    dispatch({
      type: SEARCH_RESULTS,
      payload: r.data.items
    })
  })
  .catch( e => {
    
    dispatch({
      type: ERROR,
      payload: {message: "Unable to retrieve albums"}
    })
  })
  
}