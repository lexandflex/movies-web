export interface TopFilmsParams {
  page: number;
}

export interface TopFilmsResponse {
  pagesCount: number;
  films: [
    {
      filmId: number;
      nameRu: string | null;
      nameEn: string | null;
      year: string | null;
      filmLength: string | null;
      countries: [{ country: string | null }];
      genres: [{ genre: string | null }];
      posterUrl: string | null;
      posterUrlPreview: string | null;
    },
  ];
}

export interface FilmsByTitleParams {
  title: string;
}

export interface FilmsByTitleResponse {
  filmsId: number[];
}

export interface FilmByIdParams {
  id: number;
}

export interface FilmByIdResponse {
  kinopoiskId: number;
  nameRu: string | null;
  nameEn: string | null;
  nameOriginal: string | null;
  posterUrl: string | null;
  posterUrlPreview: string | null;
  coverUrl: string | null;
  logoUrl: string | null;
  webUrl: string | null;
  filmLength: number;
  slogan: string | null;
  description: string | null;
  shortDescription: string | null;
  type: string | null;
  ratingAgeLimits: string | null;
  countries: [{ country: string | null }];
  genres: [{ genre: string | null }];
  startYear: number;
  endYear: number;
}

export interface InfoAboutSeasonsResponse {
  total: number;
  items: [
    {
      number: number;
      episodes: [
        {
          seasonNumber: number;
          episodeNumber: number;
          nameRu: string | null;
          nameEn: string | null;
          synopsis: string | null;
        },
      ];
    },
  ];
}

export interface AddRatingParams {
  kinopoiskId: number;
  rating: number;
}

export interface MovieRatingResponse {
  kinopoiskId: number;
  totalRating: number;
  numberOfAppraisers: number;
  appraisers: [{ userId: string | null; rating: number }];
}

export interface KinopoiskId {
  kinopoiskId: number;
}
