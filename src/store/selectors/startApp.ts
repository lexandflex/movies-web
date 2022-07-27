import { createSelector } from 'reselect';
import { AppState } from '../reducers';

export const startAppStateSelector = (state: AppState) => state.startApp;

export const isAppReadySelector = createSelector(startAppStateSelector, (state) => state.appReady);
