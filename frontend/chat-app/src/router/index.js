import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Secret from '../views/Secret.vue'

import firebase from 'firebase';
import 'firebase/auth';


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/secret',
    name: 'Secret',
    component: Secret,
    meta:{requiersAuth: true}
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiersAuth);
  const isAuthenticated = firebase.auth().currentUser;
  if(requiresAuth && !isAuthenticated){
    next('/login');
  } else {
    next();
  }
})

export default router
