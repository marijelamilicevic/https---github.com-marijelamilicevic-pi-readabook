import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Postojeci_korisnik',
    name: 'Postojeći korisnik',
    component: () => import( '../views/Postojeci_korisnik.vue')
  },
  {
    path: '/Novi_korisnik',
    name: 'Novi korisnik',
    component: () => import( '../views/Novi_korisnik.vue')
  },
  {
    path: '/Glavni_pregled',
    name: 'Glavni pregled',
    component: () => import('../views/Glavni_pregled.vue')
  },
  {
    path: '/Dodaj_knjigu',
    name: 'Dodaj knjigu',
    component: () => import('../views/Dodaj_knjigu.vue')
  },
  {
    path: '/Pretraga',
    name: 'Pretraga baze knjiga',
    component: () => import('../views/Pretraga.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
