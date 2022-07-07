export interface Theme {
  colors: {
    accentColor: string;
    error: string;
    success: string;
    textColor: string;
    secondTextColor: string;
    backgroundColor: string;
  };
}

export const darkTheme: Theme = {
  colors: {
    accentColor: '#e32652',
    error: '#DF3636',
    success: '#189D5D',
    textColor: '#FFFFFF',
    secondTextColor: '#d4d5d9',
    backgroundColor: '#000000',
  },
};

export const lightTheme: Theme = {
  colors: {
    accentColor: '#e32652',
    error: '#DF3636',
    success: '#189D5D',
    textColor: '#FFFFFF',
    secondTextColor: '#d4d5d9',
    backgroundColor: '#000000',
  },
};

export type ThemeKey = 'dark' | 'light';

const themesMap = new Map<ThemeKey, Theme>();

themesMap.set('light', lightTheme);
themesMap.set('dark', darkTheme);

export const getTheme = (themeKey?: ThemeKey) => {
  if (themeKey && themesMap.has(themeKey)) return themesMap.get(themeKey);
  return themesMap.get('dark');
};
