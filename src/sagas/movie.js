import { put, call, takeLatest } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { onMovieList } from '../actions'
import { apiMovieList } from './api'

function * watchMovieList () {
  yield takeLatest(onMovieList.watcher, function * (action) {
    const { res, error } = yield call(apiMovieList, action.url)
    yield delay(200) // 请求加上 200ms 的延迟，防止界面闪烁
    if (res) {
      yield put(onMovieList.success({ res }))
    } else {
      yield put(onMovieList.failure({ error }))
    }
  })
}

export default [
  watchMovieList()
]
