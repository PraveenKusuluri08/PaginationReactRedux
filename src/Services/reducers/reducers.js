import ACTIONS from "../actions/actionTypes"
import initialState from "./initialState"

 const reducers = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case ACTIONS.DATA_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      }
    case ACTIONS.DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return true
  }
}
export default reducers