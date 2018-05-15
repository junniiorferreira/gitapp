import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/layout/Login'
import Oauth from '@/services/Oauth'
import Dashboard from '@/layout/Dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/oauth/access_token',
      name: 'Oauth',
      component: Oauth
    }        
  ],
  mode: 'history'
})
