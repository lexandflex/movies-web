import { createReducer } from 'typesafe-actions';
import {
  TopFilmsResponse,
  InfoAboutSeasonsResponse,
  MovieRatingResponse,
  FilmByIdResponse,
} from '../../models/movies';
import {
  addRatingAction,
  getByTitleAction,
  getInfoAboutFilmAction,
  getInfoAboutSeasonsAction,
  getTopAction,
  MoviesActionUnion,
  removeRatingAction,
} from '../actions/movies';

export interface MoviesState {
  topFilms: TopFilmsResponse;
  filmsId: number[];
  // infoAboutFilm: InfoAboutFilmType;
  infoAboutSeasons: InfoAboutSeasonsResponse;
  movieRating: MovieRatingResponse;
  films: { [id: number]: FilmByIdResponse };
}

const initialState: MoviesState = {
  topFilms: {
    pagesCount: 0,
    films: [
      {
        filmId: 0,
        nameRu: null,
        nameEn: null,
        year: null,
        filmLength: null,
        countries: [{ country: null }],
        genres: [{ genre: null }],
        posterUrl: null,
        posterUrlPreview: null,
      },
    ],
  },

  filmsId: [],
  films: {},
  infoAboutSeasons: {
    total: 0,
    items: [
      {
        number: 0,
        episodes: [
          {
            seasonNumber: 0,
            episodeNumber: 0,
            nameRu: null,
            nameEn: null,
            synopsis: null,
          },
        ],
      },
    ],
  },
  movieRating: {
    kinopoiskId: 0,
    totalRating: 0,
    numberOfAppraisers: 0,
    appraisers: [{ userId: null, rating: 0 }],
  },
};

export const moviesReducer = createReducer<MoviesState, MoviesActionUnion>(initialState)
  .handleAction(getTopAction.request, (state) => ({
    ...state,
    loading: true,
  }))
  .handleAction(getTopAction.success, (state, action) => ({
    ...state,
    loading: false,
    topFilms: action.payload,
  }))
  .handleAction(getTopAction.failure, (state, action) => ({
    ...state,
    loading: false,
    error: action.payload.error,
  }))
  .handleAction(getByTitleAction.request, (state) => ({
    ...state,
    loading: true,
  }))
  .handleAction(getByTitleAction.success, (state, action) => ({
    ...state,
    loading: false,
    filmsId: action.payload.filmsId,
  }))
  .handleAction(getByTitleAction.failure, (state, action) => ({
    ...state,
    loading: false,
    error: action.payload.error,
  }))
  .handleAction(getInfoAboutFilmAction.request, (state) => ({
    ...state,
    loading: true,
  }))
  .handleAction(getInfoAboutFilmAction.success, (state, action) => ({
    ...state,
    loading: false,
    infoAboutFilm: action.payload,
  }))
  .handleAction(getInfoAboutFilmAction.failure, (state, action) => ({
    ...state,
    loading: false,
    error: action.payload.error,
  }))
  .handleAction(getInfoAboutSeasonsAction.request, (state) => ({
    ...state,
    loading: true,
  }))
  .handleAction(getInfoAboutSeasonsAction.success, (state, action) => ({
    ...state,
    loading: false,
    infoAboutSeasons: action.payload,
  }))
  .handleAction(getInfoAboutSeasonsAction.failure, (state, action) => ({
    ...state,
    loading: false,
    error: action.payload.error,
  }))
  .handleAction(addRatingAction.request, (state) => ({
    ...state,
    loading: true,
  }))
  .handleAction(addRatingAction.success, (state, action) => ({
    ...state,
    loading: false,
    movieRating: action.payload,
  }))
  .handleAction(addRatingAction.failure, (state, action) => ({
    ...state,
    loading: false,
    error: action.payload.error,
  }))
  .handleAction(removeRatingAction.request, (state) => ({
    ...state,
    loading: true,
  }))
  .handleAction(removeRatingAction.success, (state, action) => ({
    ...state,
    loading: false,
    movieRating: action.payload,
  }))
  .handleAction(removeRatingAction.failure, (state, action) => ({
    ...state,
    loading: false,
    error: action.payload.error,
  }));
