import { combineReducers } from "redux";
import { rebusReducer } from "./rebusReducer";

export const rootReducer = combineReducers({
    rebus: rebusReducer
})