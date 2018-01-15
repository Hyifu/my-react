// 创建异步请求的三种状态 ActionType
export const createAsyncTypes = TYPE => ({
  R: `${AT[TYPE]}_REQUEST`,
  S: `${AT[TYPE]}_SUCCESS`,
  F: `${AT[TYPE]}_FAILURE`
})

//
// *******************业务代码********************
//

export const AT = {
  AUTH: 'AUTH',
  LAYOUT: 'LAYOUT',
  MOVIE_LIST: 'MOVIE_LIST'
}
