import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

Vue.use(Router)

const page1 = () => import('./pages/Home')
const page2 = () => import('./pages/Skills')
const page3 = () => import('./pages/Projects')
const page4 = () => import('./pages/Resume')
const page5 = () => import('./pages/Contact')

const immo = () => import('./pages/Projects/items/immo')
const todolist = () => import('./pages/Projects/items/todolist')
const waldata = () => import('./pages/Projects/items/waldata')
const waltrade = () => import('./pages/Projects/items/waltrade')
const portfolio2016 = () => import('./pages/Projects/items/portfolio2016')
const portfolio2017 = () => import('./pages/Projects/items/portfolio2017')

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'page1', component: page1, meta: { preload: false, index: 1 } },
    { path: '/skills', name: 'page2', component: page2, meta: { preload: true, index: 2 }, params: { animate: false } },
    {
      path: '/projects',
      name: 'page3',
      component: page3,
      meta: { preload: true, index: 3 },
      params: { animate: false },
      children: [
        { path: 'immo', name: 'immo', component: immo, meta: { preload: true } },
        { path: 'todolist', name: 'todolist', component: todolist, meta: { preload: true } },
        { path: 'waldata', name: 'waldata', component: waldata, meta: { preload: true } },
        { path: 'waltrade', name: 'waltrade', component: waltrade, meta: { preload: true } },
        { path: 'portfolio2016', name: 'portfolio2016', component: portfolio2016, meta: { preload: true } },
        { path: 'portfolio2017', name: 'portfolio2017', component: portfolio2017, meta: { preload: true } }
      ]
    },
    { path: '/resume', name: 'page4', component: page4, meta: { preload: true, index: 4 }, params: { animate: false } },
    { path: '/contacts', name: 'page5', component: page5, meta: { preload: true, index: 5 }, params: { animate: false } },
    { path: '*', redirect: '/' }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(m => m.meta.preload)) {
    store.dispatch('beginPreload')
    next()
  } else {
    store.dispatch('endPreload')
    next()
  }
})

export default router
