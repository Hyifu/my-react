import { combineReducers } from 'redux'
import AT from '../constants/actionTypes'
const createTypes = TYPE => ({
  R: `${AT[TYPE]}_REQUEST`,
  S: `${AT[TYPE]}_SUCCESS`,
  F: `${AT[TYPE]}_FAILURE`
})

//
// ********************************************************************
//

const layout = (state = {
  header: true,
  sider: true,
  footer: true,
  bread: true
}, action) => {
  return state
}

const USER = createTypes(AT.USER)
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
