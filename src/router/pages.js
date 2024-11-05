export default [
  {
    name: 'Register',
    path: '/register',
    component: () => import(/* webpackChunkName: "register" */ '@/views/register/register.vue')
  },
  {
    name: 'Home',
    path: '/home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/home/home.vue')
  },
  {
    name: 'Shop',
    path: '/shop',
    component: () => import(/* webpackChunkName: "shop" */ '@/views/shop/shop.vue')
  },
  {
    name: 'Record',
    path: '/record',
    component: () => import(/* webpackChunkName: "record" */ '@/views/record/record.vue')
  },
  {
    name: 'My',
    path: '/my',
    component: () => import(/* webpackChunkName: "my" */ '@/views/my/my.vue')
  }
];
