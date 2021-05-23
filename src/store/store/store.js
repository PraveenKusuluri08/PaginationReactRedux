import { createStore, applyMiddleware } from "redux"
import { indexReducer } from "../rootReducer/index"

import thunk from "redux-thunk"

import { composeWithDevTools } from "redux-devtools-extension"

export const store = createStore(indexReducer, composeWithDevTools(applyMiddleware(thunk)))
