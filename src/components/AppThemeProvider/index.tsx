import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { getTheme, ThemeKey } from '../../utils/themes';

export const CURRENT_SCHEME_KEY = '_CURRENT_SCHEME_KEY';

export const AppThemeProvider: FC = ({ children }) => {
  const currentTheme: ThemeKey = localStorage.getItem(CURRENT_SCHEME_KEY) || 'dark';
  return <ThemeProvider theme={getTheme(currentTheme || 'dark')}>{children}</ThemeProvider>;
};
