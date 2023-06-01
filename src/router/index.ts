import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import LogIn from '../components/layouts/LoginLayout.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'login',
    component: LogIn,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
