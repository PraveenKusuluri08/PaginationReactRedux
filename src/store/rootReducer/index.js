
import { combineReducers } from "redux";

import {rootReducer} from "../../Services/reducers/index"

export const indexReducer = combineReducers({
  peopleData :rootReducer
})