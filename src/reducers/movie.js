import { combineReducers } from 'redux'
import { AT, createAsyncTypes } from '../constants/actionTypes'

const MOVIE_LIST = createAsyncTypes(AT.MOVIE_LIST)
const movieList = (state = {
  isFetching: false,
  list: new Array(20).fill({}),
  pagination: {}
}, action) => {
  switch (action.type) {
    case MOVIE_LIST.R:
      return {
        ...state,
        isFetching: true
      }
    case MOVIE_LIST.S:
      const { subjects, start } = action.res
      return {
        isFetching: false,
        list: subjects,
        pagination: start
      }
    case MOVIE_LIST.F:
      return { ...state, isFetching: false }
    default:
      return state
  }
}

export default combineReducers({
  movieList
})
