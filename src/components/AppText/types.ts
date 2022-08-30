import { Size } from '@models/common';
import { Theme } from '@utils/themes';

export interface Props {
  size?: number | Size;
  tag?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  color?: keyof Theme['colors'];
  className?: string;
  text: string;
}
