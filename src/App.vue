<style lang="sass" src="./assets/style/style.sass"></style>
<script>
import Velocity from 'velocity-animate'
import buttonnav from './components/indexbuttons'
import Preloader from './components/preloader'

export default {
  components: {
    buttonnav,
    'preloader-component': Preloader,
  },
  name: 'app',
  data() {
    return {
      transitionName: 'slide-right',
    }
  },

  methods: {
    beforeLeave(el) {
      if (this.$route.params.animate) {
        Velocity(
          el.querySelector('#header'),
          {
            translateY: '-100px',
            opacity: 0,
          },
          { delay: 1000, duration: 300 }
        )
        Velocity(
          el.querySelector('#arrows .prev'),
          {
            translateY: '-100px',
            opacity: 0,
          },
          { delay: 1300, duration: 300 }
        )
        Velocity(
          el.querySelector('#arrows .next'),
          {
            translateY: '-100px',
            opacity: 0,
          },
          { delay: 1600, duration: 300 }
        )
        document.querySelector('#app').style.height = 'auto'
      }
    },
    afterLeave(el) {
      document.querySelector('#app').style.height = '100vh'
    },
    beforeEnter(el) {
      if (this.$route.params.animate) {
        Velocity(
          el.querySelector('#header'),
          {
            translateY: '-100px',
            opacity: 0,
          },
          {}
        )
        Velocity(
          el.querySelector('#arrows .prev'),
          {
            translateY: '-100px',
            opacity: 0,
          },
          {}
        )
        Velocity(
          el.querySelector('#arrows .next'),
          {
            translateY: '-100px',
            opacity: 0,
          },
          {}
        )
        Velocity(
          document.querySelector('#navbar'),
          {
            translateY: '100px',
            opacity: 0,
          },
          {}
        )
      }
    },
    enter(el, done) {
      if (this.$route.params.animate) {
        Velocity(
          el.querySelector('#header'),
          {
            translateY: 0,
            opacity: 1,
          },
          { delay: 3000, duration: 300 }
        )
        Velocity(
          el.querySelector('#arrows .prev'),
          {
            translateY: 0,
            opacity: 1,
          },
          { delay: 3300, duration: 300 }
        )
        Velocity(
          document.querySelector('#navbar'),
          {
            translateY: 0,
            opacity: 1,
          },
          { delay: 3600, duration: 300 }
        )
        Velocity(
          el.querySelector('#arrows .next'),
          {
            translateY: 0,
            opacity: 1,
          },
          { delay: 3900, duration: 300, complete: done }
        )
      }
    },
  },
  watch: {
    $route(to, from) {
      if (from.meta.index) {
        this.transitionName =
          to.meta.index > from.meta.index ? 'slide-right' : 'slide-left'
      }
    },
  },
}
</script>
<template>
  <div id="app">
    <preloader-component />
    <buttonnav />

    <transition v-if="!$route.params.animate">
      <router-view />
    </transition>

    <transition
      v-else
      :name="transitionName"
      @before-leave="beforeLeave"
      @after-leave="afterLeave"
      @before-enter="beforeEnter"
      @enter="enter"
    >
      <router-view />
    </transition>
  </div>
</template>
