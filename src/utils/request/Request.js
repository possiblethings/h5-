import Vue from 'vue';
import axios from 'axios';

class Request {
  constructor(config) {
    this.instance = axios.create(config);
    this.interceptors = config.interceptors;

    // 每个实例单独添加的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    );
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    );

    // 全局请求拦截
    this.instance.interceptors.request.use(
      (config) => {
        const { showLoading } = config;
        if (showLoading) {
          Vue.prototype.$loading.show();
        }
        return config;
      },
      (err) => {
        return Promise.reject(err);
      }
    );

    // 全局响应拦截
    this.instance.interceptors.response.use(
      ({ data }) => {
        Vue.prototype.$loading.close();
        return data;
      },
      (err) => {
        Vue.prototype.$loading.close();
        return Promise.reject(err);
      }
    );
  }

  request(config) {
    if (config.interceptors?.requestSuccessFn) {
      config = config.interceptors.requestSuccessFn(config);
    }
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          if (config.interceptors?.responseSuccessFn)
            res = config.interceptors.responseSuccessFn(res);
          resolve(res);
        })
        .catch((err) => {
          if (config.interceptors?.responseFailureFn)
            err = config.interceptors.responseFailureFn(err);
          reject(err);
        });
    });
  }

  get(config) {
    return this.request({ ...config, method: 'GET' });
  }
  post(config) {
    return this.request({ ...config, method: 'POST' });
  }
  put(config) {
    return this.request({ ...config, method: 'PUT' });
  }
  patch(config) {
    return this.request({ ...config, method: 'PATCH' });
  }
  delete(config) {
    return this.request({ ...config, method: 'DELETE' });
  }
}

export default Request;
