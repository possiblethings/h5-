import { fetchLogin } from '@/service/login';
import { sessionCache } from '@/utils/storage';

const userInfo = {
  namespaced: true,
  state: () => ({
    userInfo: {
      id: null,
      name: ''
    },
    token: ''
  }),
  mutations: {
    setUserInfo(state, payload) {
      state.userInfo.id = payload.id;
      state.userInfo.name = payload.name;
      state.token = payload.token;
    }
  },
  actions: {
    async fetchLoginAction({ commit }, { account, context }) {
      // context: 传递过来的vue实例
      // context.$loading.show();
      const { data } = await fetchLogin(account);
      // throw new Error('aaa');
      sessionCache.setItem('token', data.token);
      commit('setUserInfo', data);
      context.$router.push('/home');
    }
  },
  getters: {}
};

export default userInfo;
