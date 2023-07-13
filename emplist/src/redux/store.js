import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";


import { LoginReducer } from "./LoginReducer/LoginReducer";


const mainReducer = combineReducers({

  LoginReducer,

});


export const store = legacy_createStore(mainReducer, applyMiddleware(thunk));