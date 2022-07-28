import { ApiService } from './apiService';

export class MoviesService {
  static async getTop(page: number) {
    console.log({ api: ApiService.api });
    return ApiService.api.get(`/movies/top?page=${page}`);
  }

  static async getByTitle(title: string) {
    return ApiService.api.get(`/movies/${title}`);
  }

  static async getInformationAboutTheFilmById(id: string) {
    return ApiService.api.get(`/movies/about-film/${id}`);
  }

  static async getInformationAboutSeasonsBySerialId(id: string) {
    return ApiService.api.get(`/movies/${id}/about-seasons`);
  }

  static async addARatingToAFilm(kinopoiskId: string, rating: number) {
    return ApiService.api.post('/movies/add-rating', { kinopoiskId, rating });
  }

  static async getARatingByKinopoiskId(id: string) {
    return ApiService.api.get(`/movies/${id}/get-rating`);
  }

  static async removeRatingFromAFilm(kinopoiskId: string) {
    return ApiService.api.delete('/movies/remove-rating', {
      data: { kinopoiskId },
    });
  }
}
