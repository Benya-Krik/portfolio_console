import store from '@/store'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/skills',
    name: 'skills',
    component: () => import('../views/SkillsView.vue')
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/ProjectsView.vue')
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('../views/ContactsView.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (!store.getters.GET_FIRST_ROUTE){

    store.commit('SET_SHOW_CLEANER', true);
    setTimeout(() => {
      next()
    }, 600)
  } else{
    store.commit('SET_FIRST_ROUTE', false)
    next()
  }
  
})

export default router
