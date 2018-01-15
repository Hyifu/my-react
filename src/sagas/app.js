import { put, takeLatest } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { onAuth } from '../actions'
import { headerNav, siderNav, authorizedRoutes } from '../navConfig'

function * watchAuth () {
  yield takeLatest(onAuth.watcher, function * (action) {
    const res = {
      headerNav,
      siderNav,
      authorizedRoutes
    }
    // 对比本地导航&路由表，对权限进行分配
    const error = null
    yield delay(2000) // 请求加上 2000ms 的延迟
    if (res) {
      yield put(onAuth.success({ res }))
    } else {
      yield put(onAuth.failure({ error }))
    }
  })
}

export default [
  watchAuth()
]
