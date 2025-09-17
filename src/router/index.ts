import { createRouter, createWebHistory } from 'vue-router'

export const routesArray = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/home-page.vue'),
    meta: {
      title: '首页',
    },
  },
  {
    path: '/editor',
    name: 'editor',
    component: () => import('../views/editor-page.vue'),
    meta: {
      title: '编辑器',
    },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routesArray,
})

export default router
