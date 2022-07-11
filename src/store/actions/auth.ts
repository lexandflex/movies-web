import { ActionType, createAsyncAction } from 'typesafe-actions';

export enum AuthTypes {
  Login = '[Auth] Login',
  LoginSuccess = '[Auth] LoginSuccess',
  LoginFailed = '[Auth] LoginFailed',
}

export const loginAction = createAsyncAction(
  AuthTypes.Login,
  AuthTypes.LoginSuccess,
  AuthTypes.LoginFailed,
);

export type AuthActionUnion = ActionType<typeof loginAction>;
