import { startAppAction } from '@store/actions/startApp';
import { isAppReadySelector } from '@store/selectors';
import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Styled from './App.styles';
import { AppThemeProvider } from './components/AppThemeProvider';
import { AppRouter } from './router';

const App: FC = () => {
  const dispatch = useDispatch();
  const isAppReady = useSelector(isAppReadySelector);

  useEffect(() => {
    dispatch(startAppAction.request());
  }, [dispatch]);

  return (
    <AppThemeProvider>
      <Styled.GlobalStyles />
      <Styled.App>{isAppReady && <AppRouter />}</Styled.App>
    </AppThemeProvider>
  );
};

export default App;
