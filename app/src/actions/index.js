import { SEARCH_ARTIST, LOGIN } from "./types";
import axios from "axios";
import { results } from "../assets/local_api";
import { client_id, client_secret } from "../secrets";

var uri = "http://localhost:3000/login",
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

  console.log("location", window.location);
  
  dispatch({
    type: LOGIN,
    payload: window.location
  })
};


export const searchArtist = () => dispatch => {
  
  dispatch({
    type: SEARCH_ARTIST,
    payload: results
  })
}