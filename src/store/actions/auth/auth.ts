import { AuthParams } from '@models/auth';
import { ActionType, createAction, createAsyncAction } from 'typesafe-actions';
import { ResponseType, ErrorType } from './types';

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
  RefreshTokensFailid = '[Auth] RefreshTokensFailid',
  Logout = '[Auth] Logout',
  LogoutSuccess = '[Auth] LogoutSuccess',
  LogoutFailid = '[Auth] LogoutFailid',
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
)<AuthParams, ResponseType, ErrorType>();

export const registerAction = createAsyncAction(
  AuthTypes.Register,
  AuthTypes.RegisterSuccess,
  AuthTypes.RegisterFailed,
)<AuthParams, ResponseType, ErrorType>();

export const refreshTokensAction = createAsyncAction(
  AuthTypes.RefreshTokens,
  AuthTypes.RefreshTokensSuccess,
  AuthTypes.RefreshTokensFailid,
)<undefined, ResponseType, ErrorType>();

export const logoutAction = createAsyncAction(
  AuthTypes.Logout,
  AuthTypes.LogoutSuccess,
  AuthTypes.LogoutFailid,
)<undefined, null, ErrorType>();

export type AuthActionUnion =
  | ActionType<typeof setTokenAction>
  | ActionType<typeof loginAction>
  | ActionType<typeof registerAction>
  | ActionType<typeof refreshTokensAction>
  | ActionType<typeof logoutAction>;
