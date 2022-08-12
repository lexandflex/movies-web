export interface Movies {
  [key: string]: {
    id: string;
    image: string;
    name: string;
    year: string;
    genres: string;
    countries: string;
  };
}
