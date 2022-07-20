import { FormHTMLAttributes } from 'react';

interface BottomFormLink {
  title: string;
  text: string;
  link: string;
}

export interface AppFormProps extends FormHTMLAttributes<HTMLFormElement> {
  title: string;
  link?: BottomFormLink;
}
