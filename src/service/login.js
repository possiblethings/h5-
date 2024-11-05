import { HTTP } from '@/utils/request';

export function fetchLogin(data) {
  return HTTP.post({
    url: '/user/login',
    data,
    showLoading: true
  });
}
