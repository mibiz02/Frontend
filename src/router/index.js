import Vue from 'vue'
import VueRouter from 'vue-router'
import CompatibilityView from '../views/CompatibilityView'
import ErrorView from '../views/ErrorView'
import MainView from '../views/MainView'
import MovieView from '../views/MovieView'
import LoginView from '../views/LoginView'
import RegisterView from '../views/RegisterView'
import MyPageView from '../views/MyPageView'
import LoadingView from '../views/LoadingView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/main',
    name: 'main',
    component: MainView
  },
  {
    path: '/compatibility',
    name: 'compatibility',
    component: CompatibilityView,
    props : true
  },
  {
    path: '/movie',
    name: 'movie',
    component: MovieView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/mypage',
    name: 'mypage',
    component: MyPageView
  },
  {
    path: '*',
    name: 'error',
    component: ErrorView
  },
  {
    path:'/',
    name : 'loadingView',
    component : LoadingView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
