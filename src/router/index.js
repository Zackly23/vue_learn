import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import PostView from '@/views/PostView.vue'
import TestBroadView from '@/views/TestBroadView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/sign-up',
      name: 'register',
      component: RegisterView
    }, 
    {
      path: '/post/create',
      name: 'post-create',
      component: PostView
    },
    {
      path: '/testbroad',
      name: 'testbroad',
      component: TestBroadView
    }
  ],
})

export default router
