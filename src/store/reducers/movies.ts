import { createReducer } from 'typesafe-actions';
import {
  FilmsByTitleResponse,
  TopFilmsResponse,
  InfoAboutSeasonsResponse,
  MovieRatingResponse,
  FilmByIdResponse,
  MoviesByGenre,
  Genre,
} from '../../models/movies';

import {
  addRatingAction,
  getByGenreAction,
  getByTitleAction,
  getGenresAction,
  getInfoAboutFilmAction,
  getInfoAboutSeasonsAction,
  getTopAction,
  MoviesActionUnion,
  removeRatingAction,
} from '../actions/movies';

export interface MoviesState {
  topFilms: TopFilmsResponse;
  filmsIds: string[];
  currentFilmId: string | null;
  infoAboutSeasons: InfoAboutSeasonsResponse;
  movieRating: MovieRatingResponse;
  films: { [id: string]: FilmByIdResponse };
  searchedFilms: FilmsByTitleResponse;
  genres: Genre[];
  moviesByGenre: MoviesByGenre;
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
  currentFilmId: null,
  filmsIds: [],
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
  searchedFilms: { films: [], keyword: '', pagesCount: 0 },
  movieRating: {
    kinopoiskId: 0,
    totalRating: 0,
    numberOfAppraisers: 0,
    appraisers: [{ userId: null, rating: 0 }],
  },
  genres: [],
  moviesByGenre: {
    total: 0,
    totalPages: 0,
    items: [
      {
        kinopoiskId: 0,
        imdbId: 0,
        nameRu: null,
        nameEn: null,
        nameOriginal: null,
        countries: [{ country: null }],
        genres: [{ genre: null }],
        ratingKinopoisk: 0,
        ratingImdb: 0,
        year: 0,
        type: null,
        posterUrl: null,
        posterUrlPreview: null,
      },
    ],
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
  .handleAction(getGenresAction.request, (state) => ({
    ...state,
    loading: true,
  }))
  .handleAction(getGenresAction.success, (state, action) => ({
    ...state,
    loading: false,
    genres: action.payload.genres,
  }))
  .handleAction(getGenresAction.failure, (state, action) => ({
    ...state,
    loading: false,
    error: action.payload.error,
  }))
  .handleAction(getByGenreAction.request, (state) => ({
    ...state,
    loading: true,
  }))
  .handleAction(getByGenreAction.success, (state, action) => ({
    ...state,
    loading: false,
    moviesByGenre: action.payload,
  }))
  .handleAction(getByGenreAction.failure, (state, action) => ({
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
    searchedFilms: action.payload,
  }))
  .handleAction(getByTitleAction.failure, (state, action) => ({
    ...state,
    loading: false,
    error: action.payload.error,
    searchedFilms: initialState.searchedFilms,
  }))
  .handleAction(getInfoAboutFilmAction.request, (state) => ({
    ...state,
    loading: true,
  }))
  .handleAction(getInfoAboutFilmAction.success, (state, action) => ({
    ...state,
    loading: false,
    films: {
      [action.payload.kinopoiskId]: action.payload,
    },
    filmsIds: [...new Set([...state.filmsIds, `${action.payload.kinopoiskId}`])],
    currentFilmId: `${action.payload.kinopoiskId}`,
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
