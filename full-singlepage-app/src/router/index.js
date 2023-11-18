import { createApp } from 'vue'
import App from '../App.vue'

import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../assets/main.css'

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SearchComponent from '../components/SearchComponent.vue';
import OptionsComponent from '../components/OptionsComponent.vue';
import ResultsComponent from '../components/ResultsComponent.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      props: true,
      children: [
        { path: 'search', component: SearchComponent },
        { path: 'options', component: OptionsComponent },
        { path: 'results', component: ResultsComponent }
      ] 
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignupView.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue')
    },
    {
      path: '/searchdoc/:id',
      name: 'searchdoc',
      component: () => import('../views/SearchDocView.vue')
    }
  ]
})

export default router
