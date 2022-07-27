import { AuthParams } from '@models/auth';
import { ActionType, createAction, createAsyncAction } from 'typesafe-actions';

import { Error } from '@models/common';

export enum AuthTypes {
  Login = '[Auth] Login',
  LoginSuccess = '[Auth] LoginSuccess',
  LoginFailed = '[Auth] LoginFailed',
  Register = '[Auth] Register',
  RegisterSuccess = '[Auth] RegisterSuccess',
  RegisterFailed = '[Auth] RegisterFailed',
  SetToken = '[Auth] SetToken',
  RefreshTokens = '[Auth] RefreshTokens',
  RefreshTokensSuccess = '[Auth] RefreshTokensSuccess',
  RefreshTokensFailed = '[Auth] RefreshTokensFailed',
  Logout = '[Auth] Logout',
  LogoutSuccess = '[Auth] LogoutSuccess',
  LogoutFailed = '[Auth] LogoutFailed',
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
)<AuthParams, ResponseType, Error>();

export const registerAction = createAsyncAction(
  AuthTypes.Register,
  AuthTypes.RegisterSuccess,
  AuthTypes.RegisterFailed,
)<AuthParams, ResponseType, Error>();

export const refreshTokensAction = createAsyncAction(
  AuthTypes.RefreshTokens,
  AuthTypes.RefreshTokensSuccess,
  AuthTypes.RefreshTokensFailed,
)<undefined, ResponseType, Error>();

export const logoutAction = createAsyncAction(
  AuthTypes.Logout,
  AuthTypes.LogoutSuccess,
  AuthTypes.LogoutFailed,
)<undefined, null, Error>();

export type AuthActionUnion =
  | ActionType<typeof setTokenAction>
  | ActionType<typeof loginAction>
  | ActionType<typeof registerAction>
  | ActionType<typeof refreshTokensAction>
  | ActionType<typeof logoutAction>;
