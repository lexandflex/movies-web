export interface Props {
  movies: {
    id: string;
    image: string;
    name: string | '';
    year: string | '';
    genres: string | '';
    countries: string | '';
  }[];
  onClick?: (id: string) => void;
  handleShowModal: () => void;
}