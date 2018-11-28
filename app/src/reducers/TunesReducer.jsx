import { SEARCH_RESULTS, LOGIN, ERROR } from "../actions/types";

const initialState = { };

export default function ( state = initialState, action) {
  
  switch(action.type) {

    case LOGIN:
      return {
        ...state,
        userInfo: action.payload
      }
      
    case SEARCH_RESULTS: 
    
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