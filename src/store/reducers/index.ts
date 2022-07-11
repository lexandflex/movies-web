import { combineReducers } from '@reduxjs/toolkit';
import { authReducer, AuthState } from './auth';

export interface AppState {
  auth: AuthState;
  movies: any;
}

export const rootReducer = combineReducers({
  auth: authReducer,
});
