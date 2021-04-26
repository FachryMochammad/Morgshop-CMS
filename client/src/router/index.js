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
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/product',
    name: 'Product',
    component: () => import('../views/Product.vue')
  },
  {
    path: '/product/add',
    name: 'AddProduct',
    component: () => import('../views/AddProduct.vue')
  },
  {
    path: '/product/:category',
    name: 'CategoryProduct',
    component: () => import('../views/Product.vue')
  },
  {
    path: '/product/edit/:id',
    name: 'EditProduct',
    component: () => import('../views/EditProduct.vue')
  },
  {
    path: '*',
    name: 'Not Found',
    component: () => import('../views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name === 'Product' || to.name === 'Home') {
    if (localStorage.access_token) {
      next()
    } else next('/login')
  }
  next()
})

export default router
