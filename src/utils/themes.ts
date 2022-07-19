export interface Theme {
  colors: {
    accentColor: string;
    error: string;
    success: string;
    textColor: string;
    secondTextColor: string;
    thirdTextColor: string;
    backgroundColor: string;
    secondBackgroundColor: string;
  };
}

export const darkTheme: Theme = {
  colors: {
    accentColor: '#e32652',
    error: '#DF3636',
    success: '#189D5D',
    textColor: '#FFFFFF',
    secondTextColor: '#d4d5d9',
    thirdTextColor: '#f2f2f2',
    backgroundColor: '#101011',
    secondBackgroundColor: '#030303',
  },
};

export const lightTheme: Theme = {
  colors: {
    accentColor: '#e32652',
    error: '#DF3636',
    success: '#189D5D',
    textColor: '#FFFFFF',
    secondTextColor: '#d4d5d9',
    thirdTextColor: '#f2f2f2',
    backgroundColor: '#101011',
    secondBackgroundColor: '#030303',
  },
};

export type ThemeKey = 'dark' | 'light';

const themesMap = new Map<string, Theme>();

themesMap.set('light', lightTheme);
themesMap.set('dark', darkTheme);

export const getTheme = (themeKey?: string) => {
  if (themeKey && themesMap.has(themeKey)) return themesMap.get(themeKey);
  return themesMap.get('dark');
};
