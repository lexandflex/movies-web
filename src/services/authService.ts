import { AxiosResponse } from 'axios';
import { AuthResponse } from '@models/auth';
import { ApiService } from './apiService';

export class AuthService {
  static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return ApiService.api.post<AuthResponse>('/auth/signIn', { email, password });
  }

  static async register(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return ApiService.api.post<AuthResponse>('/auth/signUp', { email, password });
  }

  static async logout(): Promise<void> {
    return ApiService.api.delete('/auth/logout');
  }
}
