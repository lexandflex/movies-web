import { fork } from 'redux-saga/effects';
import { authSaga } from './auth';
import { moviesSaga } from './movies';
import { startAppSaga } from './startApp';

export function* sagas(): Generator {
  yield fork(startAppSaga);
  yield fork(authSaga);
  yield fork(moviesSaga);
}
