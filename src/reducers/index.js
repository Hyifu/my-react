import { combineReducers } from 'redux'
//
import app from './app'
import movie from './movie'

// 顶层 Reducers
export default combineReducers({
  app,
  movie
})
