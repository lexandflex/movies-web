import { FilmFromSearchResponse } from '@models/movies';

export interface Props {
  onClose: () => void;
  handleSearch: (value: string) => void;
  data: Array<FilmFromSearchResponse> | [];
}
