import { combineReducers } from 'redux'
import { AT, createAsyncTypes } from '../constants/actionTypes'
import secureStorage from '../utils/secureStorage'

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
// 从 存储系统获取
const __AUTH_CACHE__ = secureStorage.getItem('huangyifu', '__AUTH_CACHE__') || {}
const auth = (state = {
  ...__AUTH_CACHE__,
  isFetching: false
}, action) => {
  switch (action.type) {
    case AUTH.R:
      return { ...state, isFetching: true }
    case AUTH.S:
      secureStorage.setItem('huangyifu', '__AUTH_CACHE__', action.res)
      return { isFetching: false, ...action.res }
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
