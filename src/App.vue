<template>
  <div id="app">
    <preloader-component/>
    <buttonnav/>
    <transition v-if="$route.params.animate"
      :name="transitionName"
      @before-leave="beforeLeave"
      @after-leave="afterLeave"

      @before-enter="beforeEnter"
      @enter="enter"
    >
      <keep-alive>
        <router-view :key="$route.fullPath"></router-view>
      </keep-alive>
    </transition>
    <transition v-else
      :name="transitionName + 'test'"
    >
      <keep-alive >
        <router-view :key="$route.fullPath"></router-view>
      </keep-alive>
    </transition>
    
  </div>
</template>

<script>
import Velocity from 'velocity-animate'
import buttonnav from './components/indexbuttons'
import Preloader from './components/preloader'

export default {
  components: {
    buttonnav,
    'preloader-component': Preloader
  },
  name: 'app',
  data () {
    return {
      transitionName: 'slide-right'
    }
  },
  methods: {
    beforeLeave (el) {
      Velocity(el.querySelector('#header'), {
        translateY: '-100px',
        opacity: 0
      }, { delay: 1000, duration: 300 })
      Velocity(el.querySelector('#arrows .prev'), {
        translateY: '-100px',
        opacity: 0
      }, { delay: 1300, duration: 300 })
      Velocity(el.querySelector('#arrows .next'), {
        translateY: '-100px',
        opacity: 0
      }, { delay: 1600, duration: 300 })
      document.querySelector('#app').style.height = 'auto'
    },
    afterLeave (el) {
      document.querySelector('#app').style.height = '100vh'
    },
    beforeEnter (el) {
      Velocity(el.querySelector('#header'), {
        translateY: '-100px',
        opacity: 0
      }, {})
      Velocity(el.querySelector('#arrows .prev'), {
        translateY: '-100px',
        opacity: 0
      }, {})
      Velocity(el.querySelector('#arrows .next'), {
        translateY: '-100px',
        opacity: 0
      }, {})
      Velocity(document.querySelector('#navbar'), {
        translateY: '100px',
        opacity: 0
      }, {})
    },
    enter (el, done) {
      Velocity(el.querySelector('#header'), {
        translateY: 0,
        opacity: 1
      }, { delay: 3000, duration: 300 })
      Velocity(el.querySelector('#arrows .prev'), {
        translateY: 0,
        opacity: 1
      }, { delay: 3300, duration: 300 })
      Velocity(document.querySelector('#navbar'), {
        translateY: 0,
        opacity: 1
      }, { delay: 3600, duration: 300 })
      Velocity(el.querySelector('#arrows .next'), {
        translateY: 0,
        opacity: 1
      }, { delay: 3900, duration: 300, complete: done })
    }
  },
  watch: {
    '$route' (to, from) {
      const toIndex = to.meta.index
      const fromIndex = from.meta.index
      if (from.meta.index) {
        this.transitionName = toIndex > fromIndex ? 'slide-right' : 'slide-left'
      }
    }
  }
}
</script>

<style lang="sass">
#app
  width: 100vw
  height: 100vh
  overflow-x: hidden

@import url('https://fonts.googleapis.com/css?family=Nunito:200,300,400')
@import url('https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css')
@import './assets/animation'

$main: #0d5b6a
$clearWhite: rgba(white, 0.16)
$blue: #04a6ab

*
  box-sizing: border-box

.cf:before,.cf:after
  content: ''
  display: table
.cf:after
  clear: both

.wrapper
  width: 1500px
  margin: auto

body
  position: absolute
  margin: 0
  background: #1c1e27
  overflow-x: hidden
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  font-family: 'Nunito', sans-serif
  padding: 0

::-webkit-scrollbar
  width: 5px

::-webkit-scrollbar-track
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3)
  -webkit-border-radius: 3px

::-webkit-scrollbar-thumb
  -webkit-border-radius: 3px
  border-radius: 3px
  background: rgba(white, 0.6)
  -webkit-box-shadow: inset 0 0 6px rgba(white, 0.5)
  &:window-inactive
    background: rgba(white, 0.4)

h1
  padding: 0
  margin: 0
  color: white

h2
  margin: 1em
  color: white
  text-align: center
  font-size: 3em
  font-weight: 300

.content
  width: 100vw

@media screen and (max-width: 1500px)
  .wrapper
    width: 1200px

</style>
