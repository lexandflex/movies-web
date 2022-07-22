import { fork } from 'redux-saga/effects';
import { authSaga } from './auth';

export function* sagas(): Generator {
  yield fork(authSaga);
}
