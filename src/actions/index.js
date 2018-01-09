import { AT, createAsyncTypes } from '../constants/actionTypes'

const createAsyncRequest = base => {
  // 创建异步请求的三种状态 ActionType
  const TYPES = createAsyncTypes(base)
  // 创建 Action 的 Creator
  const Action = (type, payload = {}) => ({ type, ...payload })
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

export const onMovieList = createAsyncRequest(AT.MOVIE_LIST)
