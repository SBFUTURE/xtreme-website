import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import EventView from '@/views/EventView.vue'
import EventDetailView from '@/views/EventDetailView.vue'
import ContactView from '@/views/ContactView.vue'
import TrainingSchemaView from '@/views/TrainingSchemaView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // Als er een hash is (anchor link), scroll naar dat element
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80 // Extra ruimte voor navigatie
      }
    }
    // Als er een opgeslagen positie is (browser back/forward), gebruik die
    if (savedPosition) {
      return savedPosition
    }
    // Anders altijd naar de bovenkant
    return { top: 0, behavior: 'smooth' }
  },
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
      path:'/trainingskalender',
      name: 'trainingskalender',
      component: TrainingSchemaView
    },
    {
      path:'/events',
      name: 'events',
      component: EventView
    },
    {
      path: '/events/:id',
      name: 'event-detail',
      component: EventDetailView,
      props: true
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/success',
      name: 'success',
      component: () => import('@/views/SuccessView.vue')
    },
  ],
})

export default router
