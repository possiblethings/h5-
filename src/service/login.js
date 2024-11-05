import { HTTP } from '@/utils/request';

export function fetchLogin(data) {
  return HTTP.post({
    url: '/user/login',
    data,
    showLoading: true
  });
  // return new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve({
  //       code: 200,
  //       data: '123123',
  //       msg: 'success'
  //     });
  //   }, 1000);
  // });
}
