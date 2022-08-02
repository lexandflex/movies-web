export interface Props {
  slides: { id: string; image: string }[];
  onClick?: (id: string) => void;
  handleShowModal: () => void;
}
