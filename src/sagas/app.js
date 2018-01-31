import { put, call, takeLatest } from 'redux-saga/effects'
import { onAuth } from '../actions'
import { apiAuth } from './api'
import { headerNav, siderNav } from '../navConfig'

function * watchAuth () {
  yield takeLatest(onAuth.watcher, function * (action) {
    const { res, error } = yield call(apiAuth)
    if (res) {
      const result = { authorizedRoutes: res, headerNav, siderNav }
      yield put(onAuth.success({ res: result }))
    } else {
      yield put(onAuth.failure({ error }))
    }
  })
}

export default [
  watchAuth()
]
