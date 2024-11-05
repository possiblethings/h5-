import Request from './Request';
import { sessionCache } from '@/utils/storage';
console.log(process.env.VUE_APP_BASE_URL,'process')
let requestUrl = 'https://cdz.fubao996.top/api'
export const HTTP = new Request({
  baseURL: requestUrl,
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
