import { createReducer } from 'typesafe-actions';
import { startAppAction, StartAppActionUnion } from '@store/actions/startApp';

export interface StartAppState {
  appReady: boolean;
}

export const initialState: StartAppState = {
  appReady: false,
};

export const startAppReducer = createReducer<StartAppState, StartAppActionUnion>(
  initialState,
).handleAction(startAppAction.success, (state) => ({
  ...state,
  appReady: true,
}));
