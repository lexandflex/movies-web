import { fork } from 'redux-saga/effects';
import { authSaga } from './auth';
import { moviesSaga } from './movies';

export function* sagas(): Generator {
  yield fork(authSaga);
  yield fork(moviesSaga);
}
