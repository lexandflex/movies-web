import { darkTheme, getTheme } from '@utils/themes';
import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { Props } from './types';

export const CURRENT_SCHEME_KEY = '_CURRENT_SCHEME_KEY';

export const AppThemeProvider: FC<Props> = ({ children }) => {
  const currentTheme = localStorage.getItem(CURRENT_SCHEME_KEY) || 'dark';
  const theme = getTheme(currentTheme);
  return <ThemeProvider theme={theme || darkTheme}>{children}</ThemeProvider>;
};
