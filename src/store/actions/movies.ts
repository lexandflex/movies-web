import { Error } from '@models/common';
import { ActionType, createAsyncAction } from 'typesafe-actions';
import {
  TopFilmsParams,
  FilmsByTitleParams,
  FilmsByTitleResponse,
  FilmByIdParams,
  FilmByIdResponse,
  TopFilmsResponse,
  MovieRatingResponse,
  AddRatingParams,
  InfoAboutSeasonsResponse,
  KinopoiskId,
} from '@models/movies';

export enum MoviesTypes {
  GetTop = '[Movies] GetTop',
  GetTopSuccess = '[Movies] GetTopSuccess',
  GetTopFailed = '[Movies] GetTopFailed',

  GetByTitle = '[Movies] GetByTitle',
  GetByTitleSuccess = '[Movies] GetByTitleSuccess',
  GetByTitleFailed = '[Movies] GetByTitleFailed',

  GetInfoAboutFilm = '[Movies] GetInfoAboutFilm',
  GetInfoAboutFilmSuccess = '[Movies] GetInfoAboutFilmSuccess',
  GetInfoAboutFilmFailed = '[Movies] GetInfoAboutFilmFailed',

  GetInfoAboutSeasons = '[Movies] GetInfoAboutSeasons',
  GetInfoAboutSeasonsSuccess = '[Movies] GetInfoAboutSeasonsSuccess',
  GetInfoAboutSeasonsFailed = '[Movies] GetInfoAboutSeasonsFailed',

  AddRating = '[Movies] AddRating',
  AddRatingSuccess = '[Movies] AddRatingSuccess',
  AddRatingFailed = '[Movies] AddRatingFailed',

  GetRating = '[Movies] GetRating',
  GetRatingSuccess = '[Movies] GetRatingSuccess',
  GetRatingFailed = '[Movies] GetRatingFailed',

  RemoveRating = '[Movies] RemoveRating',
  RemoveRatingSuccess = '[Movies] RemoveRatingSuccess',
  RemoveRatingFailed = '[Movies] RemoveRatingFailed',
}

export const getTopAction = createAsyncAction(
  MoviesTypes.GetTop,
  MoviesTypes.GetTopSuccess,
  MoviesTypes.GetTopFailed,
)<TopFilmsParams, TopFilmsResponse, Error>();

export const getByTitleAction = createAsyncAction(
  MoviesTypes.GetByTitle,
  MoviesTypes.GetByTitleSuccess,
  MoviesTypes.GetByTitleFailed,
)<FilmsByTitleParams, FilmsByTitleResponse, Error>();

export const getInfoAboutFilmAction = createAsyncAction(
  MoviesTypes.GetInfoAboutFilm,
  MoviesTypes.GetInfoAboutFilmSuccess,
  MoviesTypes.GetInfoAboutFilmFailed,
)<FilmByIdParams, FilmByIdResponse, Error>();

export const getInfoAboutSeasonsAction = createAsyncAction(
  MoviesTypes.GetInfoAboutSeasons,
  MoviesTypes.GetInfoAboutSeasonsSuccess,
  MoviesTypes.GetInfoAboutSeasonsFailed,
)<FilmByIdParams, InfoAboutSeasonsResponse, Error>();

export const addRatingAction = createAsyncAction(
  MoviesTypes.AddRating,
  MoviesTypes.AddRatingSuccess,
  MoviesTypes.AddRatingFailed,
)<AddRatingParams, MovieRatingResponse, Error>();

export const getRatingAction = createAsyncAction(
  MoviesTypes.GetRating,
  MoviesTypes.GetRatingSuccess,
  MoviesTypes.GetRatingFailed,
)<FilmByIdParams, MovieRatingResponse, Error>();

export const removeRatingAction = createAsyncAction(
  MoviesTypes.RemoveRating,
  MoviesTypes.RemoveRatingSuccess,
  MoviesTypes.RemoveRatingFailed,
)<KinopoiskId, MovieRatingResponse, Error>();

export type MoviesActionUnion =
  | ActionType<typeof getTopAction>
  | ActionType<typeof getByTitleAction>
  | ActionType<typeof getInfoAboutFilmAction>
  | ActionType<typeof getInfoAboutSeasonsAction>
  | ActionType<typeof addRatingAction>
  | ActionType<typeof getRatingAction>
  | ActionType<typeof removeRatingAction>;
