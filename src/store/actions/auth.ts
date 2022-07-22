import { AuthParams } from '@models/auth';
import { ActionType, createAction, createAsyncAction } from 'typesafe-actions';

export enum AuthTypes {
  Login = '[Auth] Login',
  LoginSuccess = '[Auth] LoginSuccess',
  LoginFailed = '[Auth] LoginFailed',
  Register = '[Auth] Register',
  RegisterSuccess = '[Auth] RegisterSuccess',
  RegisterFailed = '[Auth] RegisterFailed',
  SetToken = '[Auth] SetToken',
}

export const setTokenAction = createAction(AuthTypes.SetToken)<{
  token: string;
  refreshToken: string;
}>();

// TODO: write types for response and error
export const loginAction = createAsyncAction(
  AuthTypes.Login,
  AuthTypes.LoginSuccess,
  AuthTypes.LoginFailed,
)<AuthParams, any, any>();

export const registerAction = createAsyncAction(
  AuthTypes.Register,
  AuthTypes.RegisterSuccess,
  AuthTypes.RegisterFailed,
)<AuthParams, any, any>();

export type AuthActionUnion =
  | ActionType<typeof setTokenAction>
  | ActionType<typeof loginAction>
  | ActionType<typeof registerAction>;
