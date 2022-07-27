import { combineReducers } from '@reduxjs/toolkit';
import { authReducer, AuthState } from './auth';
import { moviesReducer, MoviesState } from './movies';
import { startAppReducer, StartAppState } from './startApp';

export interface AppState {
  auth: AuthState;
  movies: MoviesState;
  startApp: StartAppState;
}

export const rootReducer = combineReducers({
  startApp: startAppReducer,
  auth: authReducer,
  movies: moviesReducer,
});

export type State = ReturnType<typeof rootReducer>;
