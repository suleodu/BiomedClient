// import { createRouter, createWebHistory } from 'vue-router'
import Vue from 'vue'
import Home from '../views/Home/HomeIndex.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home-index',
    component: Home
  },
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
