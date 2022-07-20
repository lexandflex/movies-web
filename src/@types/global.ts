import { compose } from '@reduxjs/toolkit';
import { Theme } from '@utils/themes';
import 'styled-components';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    ENABLE_DEVTOOLS: boolean;
    __REDUX_DEVTOOLS_EXTENSION__: any;
  }
}

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
