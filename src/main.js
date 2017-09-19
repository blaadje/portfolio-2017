// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import store from './store'
import { sync } from 'vuex-router-sync'
import VueThreejs from 'vue-threejs/package'

Vue.config.productionTip = false

const page1 = () => import('./pages/page1')
const page2 = () => import('./pages/page2')
const page3 = () => import('./pages/page3')
const page4 = () => import('./pages/page4')
const page5 = () => import('./pages/page5')

Vue.use(Router)
Vue.use(VueThreejs)

const router = new Router({
  routes: [
    { path: '/', name: 'page1', component: page1, meta: { preload: false, index: 1 } },
    { path: '/skills', name: 'page2', component: page2, meta: { preload: true, index: 2 }, params: { animate: false } },
    { path: '/projects', name: 'page3', component: page3, meta: { preload: true, index: 3 }, params: { animate: false } },
    { path: '/resume', name: 'page4', component: page4, meta: { preload: true, index: 4 }, params: { animate: false } },
    { path: '/contacts', name: 'page5', component: page5, meta: { preload: true, index: 5 }, params: { animate: false } },
    { path: '*', redirect: '/' }
  ],
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
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

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
