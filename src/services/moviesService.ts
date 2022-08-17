import jwtDecode from 'jwt-decode';
import { ApiService } from './apiService';
import { StorageKeys } from '../constants/storageKeys';

export class MoviesService {
  static async getTop(page: number) {
    return ApiService.api.get(`/movies/top?page=${page}`);
  }

  static async getByTitle(title: string, page: number) {
    return ApiService.api.get(`/movies?title=${encodeURI(title)}&page=${page}`);
  }

  static async getGenres() {
    return ApiService.api.get('/movies/genres');
  }

  static async getMoviesByGenre(genreId: string, page: number) {
    return ApiService.api.get(`/movies/search-by-genre?genreId=${genreId}&page=${page}`);
  }

  static async getInformationAboutTheFilmById(id: string) {
    return ApiService.api.get(`/movies/about-film/${id}`);
  }

  static async getInformationAboutSeasonsBySerialId(id: string) {
    return ApiService.api.get(`/movies/${id}/about-seasons`);
  }

  static async addARatingToAFilm(kinopoiskId: string, rating: number) {
    return ApiService.api.post('/movies/add-rating', { kinopoiskId: Number(kinopoiskId), rating });
  }

  static async getARatingByKinopoiskId(id: string) {
    const token = localStorage.getItem(StorageKeys.Token);
    let userId = '';
    if (token) {
      const decoded: any = jwtDecode(token || '');
      userId = decoded?.userId || '';
    }
    return ApiService.api.get(`/movies/${id}/get-rating${userId ? `?userId=${userId}` : ''}`);
  }

  static async removeRatingFromAFilm(kinopoiskId: string) {
    return ApiService.api.delete('/movies/remove-rating', {
      data: { kinopoiskId: Number(kinopoiskId) },
    });
  }
}
