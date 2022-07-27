import { ApiService } from '@services/apiService';
import { StorageKeys } from '@constants/storageKeys';
import { setTokenAction } from '@store/actions/auth';
import { put, takeLatest } from 'redux-saga/effects';
import { startAppAction } from '@store/actions/startApp';
import { APP_CONFIG } from '../../configs/appConfig';

export class StartAppSagaWorker {
  static *start() {
    try {
      ApiService.init(APP_CONFIG.apiBaseUrl);
      const token = localStorage.getItem(StorageKeys.Token);
      const refreshToken = localStorage.getItem(StorageKeys.RefreshToken);
      if (token && refreshToken) {
        yield put(setTokenAction({ token, refreshToken }));
      }

      yield put(startAppAction.success());
    } catch (error: any) {
      yield put(startAppAction.failure({ error: error.message }));
    }
  }
}

export function* startAppSaga() {
  yield takeLatest(startAppAction.request, StartAppSagaWorker.start);
}
