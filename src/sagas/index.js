import { put, takeLatest, all, call } from 'redux-saga/effects'
import { onLogin } from '../actions'
import { apiLogin } from '../api'

function * watchLogin () {
  yield takeLatest(onLogin.watcher, function * (action) {
    try {
      const user = yield call(apiLogin)
      yield put(onLogin.success({ user }))
    } catch (error) {
      yield put(onLogin.failure({ error }))
    }
  })
}

export default function * rootSaga () {
  yield all([
    watchLogin()
  ])
}
