import { createSelector } from 'reselect';
import { AppState } from '../reducers/index';

export const moviesStateSelector = (state: AppState) => state.movies;

export const filmsSelector = createSelector(moviesStateSelector, (state) => state.films);

export const currentFilmIdSelector = createSelector(
  moviesStateSelector,
  (state) => state.currentFilmId,
);

export const searchedFilmsSelector = createSelector(
  moviesStateSelector,
  (state) => state.searchedFilms?.films,
);

export const movieRatingSelector = createSelector(
  moviesStateSelector,
  (state) => state.movieRating,
);
