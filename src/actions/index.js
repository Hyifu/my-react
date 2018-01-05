import AT from '../constants/actionTypes'

const createRequest = base => {
  // 创建三种状态的 ActionType
  const TYPES = {
    R: `${base}_REQUEST`,
    S: `${base}_SUCCESS`,
    F: `${base}_FAILURE`
  }
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
// ********************************************************************
//

export const onLogin = createRequest(AT.USER)
