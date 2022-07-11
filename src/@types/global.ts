import { compose } from '@reduxjs/toolkit';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    ENABLE_DEVTOOLS: boolean;
    __REDUX_DEVTOOLS_EXTENSION__: any;
  }
}
