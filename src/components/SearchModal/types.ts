import { ReactElement } from 'react';

export interface Props {
  onClose: () => void;
  handleSearch: (value: string) => void;
  children?: ReactElement;
}
