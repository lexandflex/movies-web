export interface Props {
  showModal: boolean;
  onClose: (flag: boolean) => void;
  title: string;
  text: string;
  children: JSX.Element;
}
