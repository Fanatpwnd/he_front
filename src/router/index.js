import Vue from 'vue'
import VueRouter from 'vue-router'
import Catalog from '@/views/catalog/template.vue';
import Login from '@/views/login/template.vue';
import store from '@/store.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Planes',
    component: Catalog,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {

	if( to.matched.some(record => record.meta.requiresAuth) ) {
	    
    if ( !store.getters.isLoggedIn ) {
			
      next({name: 'Login'})

		} else {

			next();

		}

  } else {

    next();

  }

})


export default router
