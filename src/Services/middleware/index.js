import { dataRequest, dataSuccess, dataFailure } from "../actions/actionCreators"
import axios from "axios"

export const dataAPI = (page = 1) => {
  return (dispatch, getState) => {
    dispatch(dataRequest())
    axios
      .get(`https://swapi.dev/api/people/?page=${page}`)
      .then((res) => {
        return dispatch(
          dataSuccess({
            data: res.data.results,
            count: res.data.count,
            page: page - 1,
          })
        )
      })
      .catch((error) => {
        console.log(error)
        dispatch(dataFailure(error))
      })
  }
}
