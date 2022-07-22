import { ActionType } from 'typesafe-actions';
import { AuthService } from '@services/authService';
import { loginAction, registerAction, setTokenAction } from '@store/actions/auth';
import { call, Effect, put, SagaReturnType, takeLatest } from 'redux-saga/effects';
import { Navigator } from '@services/navigatorService';
import { RouteNames } from '@router/routeNames';

export class AuthSagaWorker {
  static *login({ payload }: ActionType<typeof loginAction.request>) {
    try {
      const response: SagaReturnType<typeof AuthService.login> = yield call(
        AuthService.login,
        payload.email,
        payload.password,
      );
      console.log({ response });
      yield put(
        setTokenAction({
          token: response.data.accessToken,
          refreshToken: response.data.refreshToken,
        }),
      );
      Navigator.push(RouteNames.MOVIES);
    } catch (error: any) {
      yield put(loginAction.failure({ error: error.response }));
    }
  }

  static *register({ payload }: ActionType<typeof registerAction.request>) {
    console.log('here');
    try {
      yield call(AuthService.register, payload.email, payload.password);
      Navigator.push(RouteNames.LOGIN);
    } catch (error: any) {
      yield put(registerAction.failure({ error: error.response }));
    }
  }
}

export function* authSaga(): Generator<Effect, void> {
  yield takeLatest(registerAction.request, AuthSagaWorker.register);
  yield takeLatest(loginAction.request, AuthSagaWorker.login);
}
