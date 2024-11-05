import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import LoadingPlugin from '@/components/Loading';
import i18n from './language';
import '@/utils/flexible';
import '@/assets/css/base.css';
import '@/assets/css/theme.css';
import '../mock';

Vue.use(LoadingPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App)
}).$mount('#app');
