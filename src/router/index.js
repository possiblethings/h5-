import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '@/layout/login/login.vue';
import Pages from './pages';
import NotFound from '@/layout/NotFound.vue';
import { sessionCache } from '@/utils/storage';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    name: 'Login',
    path: '/login',
    meta: { title: '登录' },
    component: Login
  },
  ...Pages,
  {
    name: 'NotFound',
    path: '/*',
    meta: { title: '404' },
    component: NotFound
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {
    const token = sessionCache.getItem('token');
    if (!token) {
      next({ path: '/login' });
    }
  }
  next();
});

export default router;
