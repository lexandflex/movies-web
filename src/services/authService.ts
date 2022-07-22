import { ApiService } from './apiService';

export class AuthService {
  static async login(email: string, password: string) {
    return ApiService.api.post('/auth/signIn', { email, password });
  }

  static async register(email: string, password: string) {
    return ApiService.api.post('/auth/signUp', { email, password });
  }
}
