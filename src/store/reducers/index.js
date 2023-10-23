import { combineReducers } from "redux";
import user from "./user_reducer";

const appReducer = combineReducers({
	user,
});
export default appReducer;
