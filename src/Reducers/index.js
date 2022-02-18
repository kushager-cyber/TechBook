//import setUserData from "./setUserData";
import setUserData from "./auth";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
  SetTheData: setUserData,
});
export default rootReducer;
