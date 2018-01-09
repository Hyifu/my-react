import { put, takeLatest, all, call } from 'redux-saga/effects'
import { onMovieList } from '../actions'
import { apiMovieList } from '../api'

function * watchMovieList () {
  yield takeLatest(onMovieList.watcher, function * (action) {
    const { res, error } = yield call(apiMovieList, action.url)
    if (res) {
      yield put(onMovieList.success({ res }))
    } else {
      yield put(onMovieList.failure({ error }))
    }
  })
}

export default function * rootSaga () {
  yield all([
    watchMovieList()
  ])
}
