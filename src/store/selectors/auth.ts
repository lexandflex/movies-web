import { createSelector } from 'reselect';
import { AppState } from '../reducers';

export const authStateSelector = (state: AppState) => state.auth;

export const isAuthenticatedSelector = createSelector(authStateSelector, (state) =>
  Boolean(state.token),
);
