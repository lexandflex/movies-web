import { APP_CONFIG } from '@configs/appConfig';
import { ApiService } from '@services/apiService';
import React, { FC, useEffect } from 'react';
import * as Styled from './App.styles';
import { AppThemeProvider } from './components/AppThemeProvider';
import { AppRouter } from './router';

const App: FC = () => {
  useEffect(() => {
    ApiService.init(APP_CONFIG.apiBaseUrl);
  }, []);

  return (
    <AppThemeProvider>
      <Styled.GlobalStyles />
      <Styled.App>
        <AppRouter />
      </Styled.App>
    </AppThemeProvider>
  );
};

export default App;
