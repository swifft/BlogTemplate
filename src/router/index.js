import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
import Article from "../views/article";

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    {
      path: '/',
      component: Home
    },
    {
      path: '/article',
      name:'article',
      component: Article
    }
  ]
})

export default router
