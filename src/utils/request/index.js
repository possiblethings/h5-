import Request from './Request';
import { sessionCache } from '@/utils/storage';

export const HTTP = new Request({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 1000 * 60,
  interceptors: {
    requestInterceptor: (config) => {
      // 携带token
      const token = sessionCache.getItem('token');

      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    }
  }
});
