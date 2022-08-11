import { call, Effect, put, SagaReturnType, takeEvery, takeLatest } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';
import { MoviesService } from '../../services/moviesService';
import {
  getByTitleAction,
  getTopAction,
  getInfoAboutFilmAction,
  getInfoAboutSeasonsAction,
  addRatingAction,
  getRatingAction,
  removeRatingAction,
  getGenresAction,
  getByGenreAction,
} from '../actions/movies';

export class MoviesSagaWorker {
  static *getTop({ payload }: ActionType<typeof getTopAction.request>) {
    try {
      const response: SagaReturnType<typeof MoviesService.getTop> = yield call(
        MoviesService.getTop,
        payload.page,
      );
      yield put(getTopAction.success(response.data));
    } catch (error: any) {
      yield put(getTopAction.failure({ error: error.message }));
    }
  }

  static *getGenres() {
    try {
      const response: SagaReturnType<typeof MoviesService.getGenres> = yield call(
        MoviesService.getGenres,
      );
      yield put(getGenresAction.success(response.data));
    } catch (error: any) {
      yield put(getGenresAction.failure({ error: error.message }));
    }
  }

  static *getByGenre({ payload }: ActionType<typeof getByGenreAction.request>) {
    try {
      const response: SagaReturnType<typeof MoviesService.getMoviesByGenre> = yield call(
        MoviesService.getMoviesByGenre,
        payload.genreId,
        payload.page,
      );
      yield put(getByGenreAction.success(response.data));
    } catch (error: any) {
      yield put(getByGenreAction.failure({ error: error.message }));
    }
  }

  static *getByTitle({ payload }: ActionType<typeof getByTitleAction.request>) {
    try {
      const response: SagaReturnType<typeof MoviesService.getByTitle> = yield call(
        MoviesService.getByTitle,
        payload.title,
        payload.page,
      );

      yield put(getByTitleAction.success(response.data));
    } catch (error: any) {
      yield put(getByTitleAction.failure({ error: error.message }));
    }
  }

  static *getInfoAboutFilm({ payload }: ActionType<typeof getInfoAboutFilmAction.request>) {
    try {
      const response: SagaReturnType<typeof MoviesService.getInformationAboutTheFilmById> =
        yield call(MoviesService.getInformationAboutTheFilmById, payload.id);

      yield put(getInfoAboutFilmAction.success(response.data));
    } catch (error: any) {
      yield put(getInfoAboutFilmAction.failure({ error: error.message }));
    }
  }

  static *getInfoAboutSeasons({ payload }: ActionType<typeof getInfoAboutSeasonsAction.request>) {
    try {
      const response: SagaReturnType<typeof MoviesService.getInformationAboutSeasonsBySerialId> =
        yield call(MoviesService.getInformationAboutSeasonsBySerialId, payload.id);

      yield put(getInfoAboutSeasonsAction.success(response.data));
    } catch (error: any) {
      yield put(getInfoAboutSeasonsAction.failure({ error: error.message }));
    }
  }

  static *addRating({ payload }: ActionType<typeof addRatingAction.request>) {
    try {
      const response: SagaReturnType<typeof MoviesService.addARatingToAFilm> = yield call(
        MoviesService.addARatingToAFilm,
        payload.kinopoiskId,
        payload.rating,
      );

      yield put(addRatingAction.success(response.data));
    } catch (error: any) {
      yield put(addRatingAction.failure({ error: error.message }));
    }
  }

  static *getRating({ payload }: ActionType<typeof getRatingAction.request>) {
    try {
      const response: SagaReturnType<typeof MoviesService.getARatingByKinopoiskId> = yield call(
        MoviesService.getARatingByKinopoiskId,
        payload.id,
      );

      yield put(getRatingAction.success(response.data));
    } catch (error: any) {
      yield put(getRatingAction.failure({ error: error.message }));
    }
  }

  static *removeRating({ payload }: ActionType<typeof removeRatingAction.request>) {
    try {
      const response: SagaReturnType<typeof MoviesService.removeRatingFromAFilm> = yield call(
        MoviesService.removeRatingFromAFilm,
        payload.kinopoiskId,
      );

      yield put(removeRatingAction.success(response.data));
    } catch (error: any) {
      yield put(removeRatingAction.failure({ error: error.message }));
    }
  }
}

export function* moviesSaga(): Generator<Effect, void> {
  yield takeLatest(getTopAction.request, MoviesSagaWorker.getTop);
  yield takeLatest(getByTitleAction.request, MoviesSagaWorker.getByTitle);
  yield takeLatest(getInfoAboutFilmAction.request, MoviesSagaWorker.getInfoAboutFilm);
  yield takeLatest(getGenresAction.request, MoviesSagaWorker.getGenres);
  yield takeEvery(getByGenreAction.request, MoviesSagaWorker.getByGenre);
  yield takeLatest(getInfoAboutSeasonsAction.request, MoviesSagaWorker.getInfoAboutSeasons);
  yield takeLatest(addRatingAction.request, MoviesSagaWorker.addRating);
  yield takeLatest(getRatingAction.request, MoviesSagaWorker.getRating);
  yield takeLatest(removeRatingAction.request, MoviesSagaWorker.removeRating);
}
