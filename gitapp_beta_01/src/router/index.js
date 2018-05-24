// Libs
import Vue from 'vue' //Core da aplicação
import VueResource from 'vue-resource' //Gerenciador HTTP
import Router from 'vue-router' //Gerenciador de rotas

Vue.use(VueResource)
Vue.use(Router)

// Components
// Componente a ser enviado para a SPA 
Vue.component('screen',{
  template: '<li>HELLO WORLD</li>'
})

// Card de um repositório do GitHub

// Templates
import VueComs from '@/components/VueComs'

import Login from '@/layout/Login'
import Oauth from '@/services/Oauth'
import Dashboard from '@/layout/Dashboard'



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
