import { Size } from '@models/common';

export interface Props {
  size?: Size;
  checked?: boolean;
  handleToggle: (isChecked: boolean) => void;
}
