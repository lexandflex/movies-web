import { Error } from '@models/common';
import { createAsyncAction, ActionType } from 'typesafe-actions';

export enum StartAppTypes {
  StartApp = '[StartApp] StartApp',
  StartAppSuccess = '[StartApp] StartAppSuccess',
  StartAppFailed = '[StartApp] StartAppFailed',
}

export const startAppAction = createAsyncAction(
  StartAppTypes.StartApp,
  StartAppTypes.StartAppSuccess,
  StartAppTypes.StartAppFailed,
)<void, void, Error>();

export type StartAppActionUnion = ActionType<typeof startAppAction>;
