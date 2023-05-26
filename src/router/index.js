import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Technology Enthusiasts', component: HomeView },
    { path: '/who-we-are', name: 'Who We Are', component: () => import('../views/WhoWeAre.vue') },
    { path: '/register', name: 'Register / Join us', component: () => import('../views/RegisterView.vue') },
    { path: '/members', name: 'Our Members', component: () => import('../views/MembersView.vue') },
  ]
})

router.beforeEach((to) => {
  document.title = `${to.name} - Arusha ICT Society`
})

export default router
