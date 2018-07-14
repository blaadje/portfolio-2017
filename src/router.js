import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

Vue.use(Router)

const page1 = () => import('./pages/Home')
const page2 = () => import('./pages/Skills')
const page3 = () => import('./pages/Projects')
const page4 = () => import('./pages/Resume')
const page5 = () => import('./pages/Contact')

const PageItem = () => import('./pages/Projects/items')

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
        { path: 'immo', name: 'immo', component: PageItem, meta: { preload: true } },
        { path: 'todolist', name: 'todolist', component: PageItem, meta: { preload: true } },
        { path: 'drawer', name: 'drawer', component: PageItem, meta: { preload: true } },
        { path: 'portfolio2016', name: 'portfolio2016', component: PageItem, meta: { preload: true } },
        { path: 'portfolio2017', name: 'portfolio2017', component: PageItem, meta: { preload: true } }
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
