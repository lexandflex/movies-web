import { combineReducers } from '@reduxjs/toolkit';
import { authReducer, AuthState } from './auth';
import { moviesReducer } from './movies';

export interface AppState {
  auth: AuthState;
  movies: any;
}

export const rootReducer = combineReducers({
  auth: authReducer,
  movies: moviesReducer,
});

export type State = ReturnType<typeof rootReducer>;
