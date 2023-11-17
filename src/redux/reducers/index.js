import { combineReducers } from "redux";
import weathers from "./weathersReducer.js";

const rootReducer = combineReducers({
  weathers,
});

export default rootReducer;
