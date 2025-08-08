import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import EventView from '@/views/EventView.vue'
import ContactView from '@/views/ContactView.vue'
import TrainingSchemaView from '@/views/TrainingSchemaView.vue'

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
      path:'/trainingskalender',
      name: 'trainingskalender',
      component: TrainingSchemaView
    },
    {
      path:'/evenementen',
      name: 'events',
      component: EventView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
  ],
})

export default router
