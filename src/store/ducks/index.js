import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { reducer as toastr } from "react-redux-toastr";
import { reducer as auth } from "./auth";

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    toastr,
  });

export default rootReducer;
