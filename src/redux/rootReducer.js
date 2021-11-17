import { combineReducers } from "redux";
import apiReducer from "./listReducer";

export const rootReducer = combineReducers({
    apiReducer: apiReducer,
});