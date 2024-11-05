// /user/register
import { HTTP } from '@/utils/request';
export function fetchLogin(data) {
    return HTTP.post({
      url: '/user/login',
      data,
      showLoading: true
    });
  }

export function register(data){
    return HTTP.post({
        url: '/user/register',
        data,
        showLoading: true
      });
}