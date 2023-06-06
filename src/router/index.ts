import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import LogIn from '../components/layouts/LoginLayout.vue';
import MainLayout from '../components/layouts/MainLayout.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/login',
    name: 'login',
    component: LogIn,
  },
  {
    path: '/',
    name: 'MainLayout',
    component: MainLayout,
    children: [
      {
        path: '/projects',
        name: 'ProjectsView',
        component: () => import('../components/ProjectsView.vue'),
      },
      {
        path: '/tickets',
        name: 'TicketsView',
        component: () => import('../components/TicketsView.vue'),
      },
      {
        path: '/calendar',
        name: 'CalendarView',
        component: () => import('../components/CalendarView.vue'),
      },
      {
        path: '/project/*',
        name: 'ProjectView',
        component: () => import('../components/SingleProjectView.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
