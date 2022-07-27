import { ActionType } from 'typesafe-actions';
import { AuthService } from '@services/authService';
import {
  loginAction,
  logoutAction,
  refreshTokensAction,
  registerAction,
  setTokenAction,
} from '@store/actions/auth';
import { call, Effect, put, SagaReturnType, takeLatest } from 'redux-saga/effects';
import { Navigator } from '@services/navigatorService';
import { RouteNames } from '@router/routeNames';
import { StorageKeys } from '../../constants/storageKeys';

function putTokensInLocalStorage(accessToken: string, refreshToken: string) {
  localStorage.setItem(StorageKeys.Token, accessToken);
  localStorage.setItem(StorageKeys.RefreshToken, refreshToken);
}

export class AuthSagaWorker {
  static *login({ payload }: ActionType<typeof loginAction.request>) {
    try {
      const response: SagaReturnType<typeof AuthService.login> = yield call(
        AuthService.login,
        payload.email,
        payload.password,
      );
      console.log({ response });

      putTokensInLocalStorage(response.data.accessToken, response.data.refreshToken);

      yield put(
        setTokenAction({
          token: response.data.accessToken,
          refreshToken: response.data.refreshToken,
        }),
      );
      Navigator.push(RouteNames.MOVIES);
    } catch (error: any) {
      yield put(loginAction.failure({ error: error.message }));
    }
  }

  static *register({ payload }: ActionType<typeof registerAction.request>) {
    console.log('here');
    try {
      const response: SagaReturnType<typeof AuthService.register> = yield call(
        AuthService.register,
        payload.email,
        payload.password,
      );

      putTokensInLocalStorage(response.data.accessToken, response.data.refreshToken);

      yield put(
        setTokenAction({
          token: response.data.accessToken,
          refreshToken: response.data.refreshToken,
        }),
      );

      Navigator.push(RouteNames.MOVIES);
    } catch (error: any) {
      yield put(registerAction.failure({ error: error.message }));
    }
  }

  static *refreshTokens() {
    try {
      const response: SagaReturnType<typeof AuthService.refreshTokens> = yield call(
        AuthService.refreshTokens,
      );

      putTokensInLocalStorage(response.data.accessToken, response.data.refreshToken);

      yield put(
        setTokenAction({
          token: response.data.accessToken,
          refreshToken: response.data.refreshToken,
        }),
      );
    } catch (error: any) {
      yield put(refreshTokensAction.failure({ error: error.message }));
    }
  }

  static *logout() {
    try {
      yield call(AuthService.logout);

      localStorage.removeItem(StorageKeys.Token);
      localStorage.removeItem(StorageKeys.RefreshToken);

      yield put(
        setTokenAction({
          token: '',
          refreshToken: '',
        }),
      );
    } catch (error: any) {
      yield put(logoutAction.failure({ error: error.message }));
    }
  }
}

export function* authSaga(): Generator<Effect, void> {
  yield takeLatest(registerAction.request, AuthSagaWorker.register);
  yield takeLatest(loginAction.request, AuthSagaWorker.login);
  yield takeLatest(refreshTokensAction.request, AuthSagaWorker.refreshTokens);
  yield takeLatest(logoutAction.request, AuthSagaWorker.logout);
}
