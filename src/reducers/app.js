import { combineReducers } from 'redux'
import { AT, createAsyncTypes } from '../constants/actionTypes'
import { headerNav, siderNav, authorizedRoutes } from '../navConfig'

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
const routes = (state = {
  headerNav,
  siderNav,
  authorizedRoutes
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
  routes,
  user
})
