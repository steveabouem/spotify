import { SEARCH_ARTIST, LOGIN } from "../actions/types";

const initialState = { };

export default function ( state = initialState, action) {
  
  switch(action.type) {

    case LOGIN:
      return {
        ...state,
        userInfo: action.payload
      }
      
    case SEARCH_ARTIST: 
    
      return{
        ...state,
        items: action.payload
      }
    

    default:
    return state;
  }
}