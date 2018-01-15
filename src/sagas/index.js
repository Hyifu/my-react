import { all } from 'redux-saga/effects'
import appSaga from './app'
import movieSaga from './movie'

export default function * rootSaga () {
  yield all([
    ...appSaga,
    ...movieSaga
  ])
}
