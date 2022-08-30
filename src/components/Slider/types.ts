export interface Slide {
  id: string;
  image: string;
  name: string | '';
  year: string | '';
  genres: string | '';
  countries: string | '';
}

export interface Props {
  slides: Slide[];
  onClick?: (id: string) => void;
}
