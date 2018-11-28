import { SEARCH_ARTIST, LOGIN, ERROR } from "../actions/types";

const initialState = { };

export default function ( state = initialState, action) {
  // console.log("pay", action);
  
  switch(action.type) {

    case LOGIN:
      return {
        ...state,
        userInfo: action.payload
      }
      
    case SEARCH_ARTIST: 
    
      return {
        ...state,
        items: action.payload
      }
    
    case ERROR : 
      return {
        ...state,
        error: action.payload
      }

    default:
    return state;
  }
}