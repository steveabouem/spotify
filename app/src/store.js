import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import TunesReducer from "./reducers";

const initialState = {};
const middleware = [thunk];
const store = createStore(TunesReducer, initialState, compose(applyMiddleware(...middleware)));

export default store;