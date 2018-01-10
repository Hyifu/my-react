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

export const onMovieList = createAsyncRequest(AT.MOVIE_LIST)
export const onLayout = (name, status) => Action(AT.LAYOUT, { name, status })
