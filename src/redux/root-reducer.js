import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";

export default combineReducers({
  user: userReducer, // here we get the giant object with current user propery
});
