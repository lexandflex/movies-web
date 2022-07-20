export type Size = 'xs' | 'sm' | 'md' | 'lg';
export interface Props {
  size?: Size;
  checked?: boolean;
  handleToggle: (isChecked: boolean) => void;
}
