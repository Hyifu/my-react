import { AT, createAsyncTypes } from '../constants/actionTypes'

const Action = (type, payload = {}) => ({ type, ...payload })
const createAsyncRequest = base => {
  // 创建异步请求的三种状态 ActionType
  const TYPES = createAsyncTypes(base)
  //
  return {
    watcher: TYPES.R,
    request: payload => Action(TYPES.R, payload),
    success: payload => Action(TYPES.S, payload),
    failure: payload => Action(TYPES.F, payload)
  }
}

//
// *******************业务代码********************
//

// 全局
export const onAuth = createAsyncRequest(AT.AUTH)

// 电影模块
export const onMovieList = createAsyncRequest(AT.MOVIE_LIST)
export const onLayout = hideParts => Action(AT.LAYOUT, { hideParts })
