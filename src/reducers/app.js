import { combineReducers } from 'redux'
import { AT, createAsyncTypes } from '../constants/actionTypes'

const layout = (state = {
  header: true,
  sider: true,
  footer: true,
  bread: false
}, action) => {
  return state
}

const USER = createAsyncTypes(AT.USER)
const user = (state = '匿名', action) => {
  switch (action.type) {
    case USER.R:
      return '请求中...'
    case USER.S:
      return action.user
    case USER.F:
      return action.error
    default:
      return state
  }
}

export default combineReducers({
  layout,
  user
})
