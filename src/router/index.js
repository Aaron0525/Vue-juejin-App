import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/home'
import Find from '../components/find/find'
import Infor from '../components/infor/infor'
import My from '../components/my/my'
import Homepage from '../components/home/homepage/homepage'
import Frontend from '../components/home/frontend/frontend'
import Product from '../components/home/product/product'
import Design from '../components/home/design/design'
import Afterend from '../components/home/afterend/afterend'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: './home'
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '/',
          redirect: './homepage'
        },
        {
          path: '/home/homepage',
          component: Homepage
        },
        {
          path: '/home/frontend',
          component: Frontend
        },
        {
          path: '/home/product',
          component: Product
        },
        {
          path: '/home/design',
          component: Design
        },
        {
          path: '/home/afterend',
          component: Afterend
        }
      ]
    },
    {
      path: '/find',
      component: Find
    },
    {
      path: '/infor',
      component: Infor
    },
    {
      path: '/my',
      component: My
    }
  ]
})
