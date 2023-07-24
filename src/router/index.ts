import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/search-movie/:inputText',
      name: 'search-movie',
      component: () => import('../views/SearchMovie.vue')
    },
    {
      path: '/movie/:id',
      name: 'movie',
      component: () => import('../views/MovieDetail.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'Page-not-found',
      component: () => import('../views/PageNotFound.vue')
    }
  ]
})

export default router
