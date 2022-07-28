import { Size } from '@models/common';

export interface Props {
  size?: number | Size;
  tag?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  style?: Record<string, any>;
  text: string;
}
