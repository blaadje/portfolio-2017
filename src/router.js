import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
import projects from './pages/projects/projects.yaml'

Vue.use(Router)

const { default: page1 } = require('./pages/Home')
const { default: page2 } = require('./pages/Skills')
const { default: page3 } = require('./pages/Projects')
const { default: page4 } = require('./pages/Resume')
const { default: page5 } = require('./pages/Contact')

const PageItem = () => import('./pages/Projects/items')

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'page1',
      component: page1,
      meta: { preload: false, index: 1 },
    },
    {
      path: '/skills',
      name: 'page2',
      component: page2,
      meta: { preload: true, index: 2 },
      params: { animate: false },
    },
    {
      path: '/projects',
      name: 'page3',
      component: page3,
      meta: { preload: true, index: 3 },
      params: { animate: false },
      children: Object.keys(projects).map(key => ({
        path: key,
        name: key,
        component: PageItem,
        meta: { preload: true },
      })),
    },
    {
      path: '/resume',
      name: 'page4',
      component: page4,
      meta: { preload: true, index: 4 },
      params: { animate: false },
    },
    {
      path: '/contacts',
      name: 'page5',
      component: page5,
      meta: { preload: true, index: 5 },
      params: { animate: false },
    },
    { path: '*', redirect: '/' },
  ],
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
