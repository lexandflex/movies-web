export type GetTopPayloadType = {
  page: number;
};

export type TopFilmsType = {
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
};

export type GetByTitlePayloadType = {
  title: string;
};

export type GetByTitleResponseType = {
  filmsId: number[];
};

export type FilmIdPayloadType = {
  id: number;
};

export type FilmInfo = {
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
};

export type InfoAboutSeasonsType = {
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
};

export type AddRatingPayloadType = {
  kinopoiskId: number;
  rating: number;
};

export type MovieRatingType = {
  kinopoiskId: number;
  totalRating: number;
  numberOfAppraisers: number;
  appraisers: [{ userId: string | null; rating: number }];
};

export type KinopoiskIdType = {
  kinopoiskId: number;
};

export type ErrorType = {
  error: string;
};
