import Vue from 'vue'
import VueRouter from 'vue-router'
import Catalog from '@/views/catalog/template';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Planes',
    component: Catalog
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
