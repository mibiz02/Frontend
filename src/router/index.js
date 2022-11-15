import Vue from 'vue'
import VueRouter from 'vue-router'
import CompatibilityView from '../views/CompatibilityView'
import ErrorView from '../views/ErrorView'
import MainView from '../views/MainView'
import MovieView from '../views/MovieView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainView
  },
  {
    path: '/main',
    name: 'main',
    component: MainView
  },
  {
    path: '/compatibility',
    name: 'compatibility',
    component: CompatibilityView
  },
  {
    path: '/movie',
    name: 'movie',
    component: MovieView
  },
  {
    path: '*',
    name: 'error',
    component: ErrorView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
