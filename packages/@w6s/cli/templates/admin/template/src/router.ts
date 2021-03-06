import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/layout/index.vue';

Vue.use(Router);

/*
  redirect: if set to 'noredirect', no redirect action will be trigger when clicking the breadcrumb
  alwaysShow: if ture, it will always show the root menu
  meta: {
    title: 'title'               the name showed in subMenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon showed in the sidebar
    breadcrumb: false            if false, the item will be hidden in breadcrumb (default is true)
    hidden: true                 if true, this route will not show in the sidebar (default is false)
  }
*/

export default new Router({
  // mode: 'history',  // Enable this if you need.
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  },
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      component: () => import(/* webpackChunkName: "login" */ '@/views/login/index.vue'),
      meta: { hidden: true },
    },
    {
      path: '/',
      component: Layout,
      redirect: '/dashboard',
      children: [
        {
          path: 'dashboard',
          component: () => import('@/views/dashboard/index.vue'),
          meta: {
            title: 'Dashboard',
            icon: 'dashboard',
          },
        },
      ],
    },
    {
      path: '/nested',
      component: Layout,
      redirect: '/nested/menu1',
      meta: {
        title: 'Nested',
        icon: 'nested',
      },
      children: [
        {
          path: 'menu1',
          component: () => import('@/views/nested/menu1/index.vue'),
          redirect: '/nested/menu1/menu1-1',
          meta: { title: 'Menu1' },
          children: [
            {
              path: 'menu1-1',
              component: () => import('@/views/nested/menu1/menu1-1/index.vue'),
              meta: { title: 'Menu1-1' },
            },
          ],
        },
        {
          path: 'menu1-2',
          component: () => import('@/views/nested/menu1/menu1-2/index.vue'),
          redirect: '/nested/menu1/menu1-2/menu1-2-1',
          meta: { title: 'Menu1-2' },
          children: [
            {
              path: 'menu1-2-1',
              component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1/index.vue'),
              meta: { title: 'Menu1-2-1' },
            },
            {
              path: 'menu1-2-2',
              component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2/index.vue'),
              meta: { title: 'Menu1-2-2' },
            },
          ],
        },
        {
          path: 'menu2',
          component: () => import('@/views/nested/menu2/index.vue'),
          meta: { title: 'Menu2' },
        },
      ],
    },
    {
      path: '/404',
      component: () => import('@/views/404.vue'),
      meta: { hidden: true },
    },
    {
      path: '*',
      redirect: '/404',
      meta: { hidden: true },
    },
  ],
});
