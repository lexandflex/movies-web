import { ActionType, createAsyncAction } from 'typesafe-actions';
import {
  ErrorType,
  GetByTitlePayloadType,
  GetByTitleResponseType,
  FilmIdPayloadType,
  FilmInfo,
  GetTopPayloadType,
  TopFilmsType,
  InfoAboutSeasonsType,
  AddRatingPayloadType,
  MovieRatingType,
  KinopoiskIdType,
} from './types';

export enum MoviesTypes {
  GetTop = '[Movies] GetTop',
  GetTopSuccess = '[Movies] GetTopSuccess',
  GetTopFailid = '[Movies] GetTopFailid',

  GetByTitle = '[Movies] GetByTitle',
  GetByTitleSuccess = '[Movies] GetByTitleSuccess',
  GetByTitleFailid = '[Movies] GetByTitleFailid',

  GetInfoAboutFilm = '[Movies] GetInfoAboutFilm',
  GetInfoAboutFilmSuccess = '[Movies] GetInfoAboutFilmSuccess',
  GetInfoAboutFilmFailid = '[Movies] GetInfoAboutFilmFailid',

  GetInfoAboutSeasons = '[Movies] GetInfoAboutSeasons',
  GetInfoAboutSeasonsSuccess = '[Movies] GetInfoAboutSeasonsSuccess',
  GetInfoAboutSeasonsFailid = '[Movies] GetInfoAboutSeasonsFailid',

  AddRating = '[Movies] AddRating',
  AddRatingSuccess = '[Movies] AddRatingSuccess',
  AddRatingFailid = '[Movies] AddRatingFailid',

  GetRating = '[Movies] GetRating',
  GetRatingSuccess = '[Movies] GetRatingSuccess',
  GetRatingFailid = '[Movies] GetRatingFailid',

  RemoveRating = '[Movies] RemoveRating',
  RemoveRatingSuccess = '[Movies] RemoveRatingSuccess',
  RemoveRatingFailid = '[Movies] RemoveRatingFailid',
}

export const getTopAction = createAsyncAction(
  MoviesTypes.GetTop,
  MoviesTypes.GetTopSuccess,
  MoviesTypes.GetTopFailid,
)<GetTopPayloadType, TopFilmsType, ErrorType>();

export const getByTitleAction = createAsyncAction(
  MoviesTypes.GetByTitle,
  MoviesTypes.GetByTitleSuccess,
  MoviesTypes.GetByTitleFailid,
)<GetByTitlePayloadType, GetByTitleResponseType, ErrorType>();

export const getInfoAboutFilmAction = createAsyncAction(
  MoviesTypes.GetInfoAboutFilm,
  MoviesTypes.GetInfoAboutFilmSuccess,
  MoviesTypes.GetInfoAboutFilmFailid,
)<FilmIdPayloadType, FilmInfo, ErrorType>();

export const getInfoAboutSeasonsAction = createAsyncAction(
  MoviesTypes.GetInfoAboutSeasons,
  MoviesTypes.GetInfoAboutSeasonsSuccess,
  MoviesTypes.GetInfoAboutSeasonsFailid,
)<FilmIdPayloadType, InfoAboutSeasonsType, ErrorType>();

export const addRatingAction = createAsyncAction(
  MoviesTypes.AddRating,
  MoviesTypes.AddRatingSuccess,
  MoviesTypes.AddRatingFailid,
)<AddRatingPayloadType, MovieRatingType, ErrorType>();

export const getRatingAction = createAsyncAction(
  MoviesTypes.GetRating,
  MoviesTypes.GetRatingSuccess,
  MoviesTypes.GetRatingFailid,
)<FilmIdPayloadType, MovieRatingType, ErrorType>();

export const removeRatingAction = createAsyncAction(
  MoviesTypes.RemoveRating,
  MoviesTypes.RemoveRatingSuccess,
  MoviesTypes.RemoveRatingFailid,
)<KinopoiskIdType, MovieRatingType, ErrorType>();

export type MoviesActionUnion =
  | ActionType<typeof getTopAction>
  | ActionType<typeof getByTitleAction>
  | ActionType<typeof getInfoAboutFilmAction>
  | ActionType<typeof getInfoAboutSeasonsAction>
  | ActionType<typeof addRatingAction>
  | ActionType<typeof getRatingAction>
  | ActionType<typeof removeRatingAction>;
