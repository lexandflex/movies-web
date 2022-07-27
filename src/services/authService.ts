import { StorageKeys } from '../constants/storageKeys';
import { ApiService } from './apiService';

export class AuthService {
  static async login(email: string, password: string) {
    return ApiService.api.post('/auth/signIn', { email, password });
  }

  static async register(email: string, password: string) {
    return ApiService.api.post('/auth/signUp', { email, password });
  }

  static async refreshTokens() {
    const refreshToken = localStorage.getItem(StorageKeys.RefreshToken) || '';
    return ApiService.api.post('/auth/refresh-tokens', null, {
      headers: { Authorization: `Bearer ${refreshToken}` },
    });
  }

  static async logout() {
    const refreshToken = localStorage.getItem(StorageKeys.RefreshToken) || '';
    return ApiService.api.post('/auth/logout', null, {
      headers: { Authorization: `Bearer ${refreshToken}` },
    });
  }
}
