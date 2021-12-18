import { createRouter, createWebHistory } from 'vue-router'
import Inicio from './views/Inicio.vue'
import NotFound from './views/NotFound.vue'
import {authenticated,guest} from './guards/auth'


/** @type {import('vue-router').RouterOptions['routes']} */
 const routes = [
  { 
  path: '/', 
  component: Inicio,
  meta: { title: 'Inicio' } },
  {
    path: '/sobre-nosotros',
    name: 'about',
    beforeEnter: guest,
    component: () => import('./views/About.vue'),
  },
  {
    path: '/noticias',
    name: 'news',
    component: () => import('./views/News.vue'),
  },
  {
    path: '/planes',
    name: 'plans',
    component: () => import('./views/Plans.vue'),
  },
  {
    path: '/speed-test',
    name: 'speedTest',
    beforeEnter: guest,
    component: () => import('./views/SpeedTest.vue'),
  },
  {
    path: '/admin',
    name: 'admin',
    beforeEnter: authenticated,
    redirect: {name: 'admin-news'},
    component: () => import('./views/admin/Admin.vue'),
    children: [
      {
        path: '/admin/noticias',
        component: () => import('./views/admin/News.vue'),
        name: 'admin-news',
      },
      {
        path: '/admin/create',
        component: () => import('./views/admin/NewsCreate.vue'),
        name: 'admin-news-create',
      },
      {
        path: '/admin/edit/:id',
        component: () => import('./views/admin/NewsCreate.vue'),
        name: 'admin-news-edit',
      },
      {
        path: '/admin/covertura',
        component: () => import('./views/admin/Covertura.vue'),
        name: 'admin-covertura',
      }
    ]
  },
  {
    path: '/admin/login',
    name: 'admin-login',
    beforeEnter: guest,
    component: () => import('./views/admin/Login.vue')
  },
  { path: '/:path(.*)', component: NotFound },
]


export const router = createRouter({
  history: createWebHistory(),
  routes,
})