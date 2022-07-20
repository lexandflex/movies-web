import { Theme } from '@utils/themes';
import { ButtonHTMLAttributes } from 'react';

export interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  themeColor?: keyof Theme['colors'];
}
