import { combineReducers } from "redux";
import TunesReducer from "./TunesReducer.jsx";
export default combineReducers ({
  info: TunesReducer
});