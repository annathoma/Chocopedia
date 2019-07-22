import { combineReducers } from "redux";
import brandReducer from "./brandReducer";
import chocolateReducer from "./chocolateReducer";
import userReducer from "./userReducer";
import chocolatebybrandReducer from "./chocolatebybrandReducer";
import loginReducer from "./loginReducer";
import searchReducer from "./searchReducer";


const rootReducer = combineReducers({
  brandState: brandReducer,
  chocolateState: chocolateReducer,
  userState: userReducer,
  chocolatebybrandState: chocolatebybrandReducer,
  loginState: loginReducer,
  searchState: searchReducer
});

export default rootReducer;