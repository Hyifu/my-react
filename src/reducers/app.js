import { combineReducers } from 'redux'

const user = (state = {
  name: '匿名'
}, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default combineReducers({
  user
})
