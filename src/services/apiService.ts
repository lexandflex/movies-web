import { StorageKeys } from '@constants/storageKeys';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export class ApiService {
  static api: AxiosInstance;

  static init(baseUrl: string): void {
    ApiService.api = axios.create({ baseURL: baseUrl });

    ApiService.api.interceptors.request.use((config: AxiosRequestConfig) => {
      const storageTokens = localStorage.getItem(StorageKeys.Token);
      const tokens = storageTokens && JSON.parse(storageTokens);
      if (tokens) {
        const { token } = tokens;
        if (config.headers) {
          // eslint-disable-next-line no-param-reassign
          config.headers.Authorization = `Bearer ${token}`;
        }
      }
      return config;
    });

    ApiService.api.interceptors.response.use(
      (response) => response,
      (error) => {
        const resp = error.response;
        console.log({ resp });
      },
    );
  }
}
