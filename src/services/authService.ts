import { AxiosResponse } from 'axios';
import { AuthResponse } from '@models/auth';
import { StorageKeys } from '../constants/storageKeys';
import { ApiService } from './apiService';

export class AuthService {
  static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return ApiService.api.post<AuthResponse>('/auth/signIn', { email, password });
  }

  static async register(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return ApiService.api.post<AuthResponse>('/auth/signUp', { email, password });
  }

  static async refreshTokens(): Promise<AxiosResponse<AuthResponse>> {
    const refreshToken = localStorage.getItem(StorageKeys.RefreshToken) || '';
    return ApiService.api.post('/auth/refresh-tokens', null, {
      headers: { Authorization: `Bearer ${refreshToken}` },
    });
  }

  static async logout(): Promise<void> {
    const refreshToken = localStorage.getItem(StorageKeys.RefreshToken) || '';
    return ApiService.api.post('/auth/logout', null, {
      headers: { Authorization: `Bearer ${refreshToken}` },
    });
  }
}
