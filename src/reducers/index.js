import { combineReducers } from "redux";

import keyword from "./keyword";
import searchResults from "./searchResults";

export default combineReducers({ keyword, searchResults });
