import {
  AuthActionUnion,
  loginAction,
  logoutAction,
  registerAction,
  setTokenAction,
} from '@store/actions/auth';
import { createReducer } from 'typesafe-actions';

export interface AuthState {
  token: string | null;
  refreshToken: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  token: null,
  refreshToken: null,
  loading: false,
  error: null,
};
export const authReducer = createReducer<AuthState, AuthActionUnion>(initialState)
  .handleAction(loginAction.request, (state) => ({
    ...state,
    loading: true,
  }))
  .handleAction(loginAction.success, (state) => ({
    ...state,
    loading: false,
  }))
  .handleAction(loginAction.failure, (state, action) => ({
    ...state,
    loading: false,
    error: action.payload.error,
  }))
  .handleAction(setTokenAction, (state, action) => ({
    ...state,
    token: action.payload.token,
    refreshToken: action.payload.refreshToken,
  }))
  .handleAction(registerAction.request, (state) => ({
    ...state,
    loading: true,
  }))
  .handleAction(registerAction.success, (state) => ({
    ...state,
    loading: false,
  }))
  .handleAction(registerAction.failure, (state, action) => ({
    ...state,
    loading: false,
    error: action.payload.error,
  }))
  .handleAction(logoutAction.request, (state) => ({ ...state, loading: true }))
  .handleAction(logoutAction.success, (state) => ({ ...state, loading: false }))
  .handleAction(logoutAction.failure, (state, action) => ({
    ...state,
    loading: false,
    error: action.payload.error,
  }));
