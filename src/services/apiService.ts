import { StorageKeys } from '@constants/storageKeys';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { store } from '..';
import { setTokenAction } from '../store/actions/auth';

export class ApiService {
  static api: AxiosInstance;

  static init(baseUrl: string): void {
    ApiService.api = axios.create({ baseURL: baseUrl });

    ApiService.api.interceptors.request.use((config: AxiosRequestConfig) => {
      const token = localStorage.getItem(StorageKeys.Token);
      const refreshToken = localStorage.getItem(StorageKeys.RefreshToken);
      if (token && refreshToken) {
        if (config.headers) {
          if (config.url === '/auth/refresh-tokens' || config.url === '/auth/logout') {
            // eslint-disable-next-line no-param-reassign
            config.headers.Authorization = `Bearer ${refreshToken}`;
          } else {
            // eslint-disable-next-line no-param-reassign
            config.headers.Authorization = `Bearer ${token}`;
          }
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
            try {
              return this.api
                .post('/auth/refresh-tokens', null)
                .then((response) => {
                  const { data } = response;
                  dispatch(
                    setTokenAction({ token: data.accessToken, refreshToken: data.refreshToken }),
                  );
                  localStorage.setItem(StorageKeys.Token, data.accessToken);
                  localStorage.setItem(StorageKeys.RefreshToken, data.refreshToken);

                  originalConfig.headers.Authorization = `Bearer ${data.accessToken}`;
                  // eslint-disable-next-line no-underscore-dangle
                  originalConfig._retry = true;
                  return this.api(originalConfig);
                })
                .catch(() => {
                  setTokenAction({ token: '', refreshToken: '' });
                  localStorage.removeItem(StorageKeys.RefreshToken);
                  localStorage.removeItem(StorageKeys.Token);
                });
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
