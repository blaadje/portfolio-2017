import Vue from 'vue'
import Router from 'vue-router'
import page1 from '@/pages/page1'
import page2 from '@/pages/page2'
import page3 from '@/pages/page3'
import page4 from '@/pages/page4'
import page5 from '@/pages/page5'
import store from '../store'
import { sync } from 'vuex-router-sync'
var vueSmoothScroll = require('vue-smoothscroll')

Vue.use(vueSmoothScroll)
Vue.use(Router)

const scrollBehavior = (to, from, savedPosition) => {
  return { x: 0, y: 0 }
}

const router = new Router({
  mode: 'history',
  scrollBehavior,
  routes: [
    { path: '/', name: 'page1', component: page1, query: { index: 1 } },
    { path: '/skills', name: 'page2', component: page2, query: { index: 2 } },
    { path: '/projects', name: 'page3', component: page3, query: { index: 3 } },
    { path: '/resume', name: 'page4', component: page4, query: { index: 4 } },
    { path: '/contacts', name: 'page5', component: page5, query: { index: 5 } },
    { path: '*', redirect: '/' }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(m => m.meta.preload)) {
    store.dispatch('beginPreload')
    next()
  } else {
    store.dispatch('endPrelaod')
    next()
  }
})

sync(store, router)
