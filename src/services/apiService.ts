import { StorageKeys } from '@constants/storageKeys';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { store } from '..';
import { refreshTokensAction } from '../store/actions/auth/auth';

export class ApiService {
  static api: AxiosInstance;

  static init(baseUrl: string): void {
    ApiService.api = axios.create({ baseURL: baseUrl });

    ApiService.api.interceptors.request.use((config: AxiosRequestConfig) => {
      const token = localStorage.getItem(StorageKeys.Token);
      if (token) {
        if (config.headers) {
          // eslint-disable-next-line no-param-reassign
          config.headers.Authorization = `Bearer ${token}`;
        }
      }
      return config;
    });
    const { dispatch } = store;
    ApiService.api.interceptors.response.use(
      (response) => response,
      (error) => {
        const resp = error.response;
        const originalConfig = error.config;
        if (
          originalConfig.url !== '/auth/signIn' &&
          originalConfig.url !== '/auth/signUp' &&
          resp
        ) {
          // eslint-disable-next-line no-underscore-dangle
          if (resp.data.message === 'TokenExpired' && !originalConfig._retry) {
            // eslint-disable-next-line no-underscore-dangle
            originalConfig._retry = true;
            try {
              dispatch(refreshTokensAction.request());
            } catch (_error: any) {
              return Promise.reject(_error.response.data);
            }
          }
        }
        return Promise.reject(resp.data);
      },
    );
  }
}
