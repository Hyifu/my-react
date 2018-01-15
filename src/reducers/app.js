import { combineReducers } from 'redux'
import { AT, createAsyncTypes } from '../constants/actionTypes'

const initialLayout = {
  header: true,
  sider: true,
  footer: true,
  bread: true
}
const layout = (state = initialLayout, action) => {
  if (action.type === AT.LAYOUT) {
    const newState = {}
    const hideParts = action.hideParts && action.hideParts.split(',')
    hideParts && hideParts.forEach(part => {
      newState[part] = false
    })
    return { ...initialLayout, ...newState }
  }
  return state
}

// 对导航的访问权限做控制，过滤基础路由生成授权路由并返回
const AUTH = createAsyncTypes(AT.AUTH)
const auth = (state = {
  isFetching: false,
  headerNav: null,
  siderNav: null,
  authorizedRoutes: null
}, action) => {
  switch (action.type) {
    case AUTH.R:
      return { ...state, isFetching: true }
    case AUTH.S:
      console.log(action)
      return { ...state, isFetching: false }
    case AUTH.F:
      return { ...state, isFetching: false }
    default:
      return state
  }
}

export default combineReducers({
  layout,
  auth
})
