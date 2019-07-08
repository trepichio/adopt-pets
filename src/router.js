import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Cats from './views/Cats.vue'
import Dogs from './views/Dogs.vue'
import Pet from './views/Pet.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cats',
      name: 'Cats',
      component: Cats
    },
    {
      path: '/dogs',
      name: 'Dogs',
      component: Dogs
    },
    {
      path: '/pet',
      name: 'Pet',
      component: Pet
    },
  ]
})
