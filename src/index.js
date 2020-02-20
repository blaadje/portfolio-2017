// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import { sync } from 'vuex-router-sync'
// import * as VueThreejs from 'vue-threejs'
import router from './router'

Vue.config.productionTip = false
// Vue.use(VueThreejs)

sync(store, router)

/* eslint-disable no-new */
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
