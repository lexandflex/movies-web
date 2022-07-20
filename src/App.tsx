import { AppWrapper } from '@components/AppWrapper';
import React, { FC } from 'react';
import * as Styled from './App.styles';
import { AppThemeProvider } from './components/AppThemeProvider';
import { AppRouter } from './router';

const App: FC = () => (
  <AppThemeProvider>
    <Styled.GlobalStyles />
    <Styled.App>
      <AppRouter />
    </Styled.App>
  </AppThemeProvider>
);

export default App;
