<template>
  <div>
    <Arrows ref="arrows" />
    <ButtonNav />
    <div
      ref="application"
      :class="[
        $style.applicationWrapper,
        {
          [$style.withPerspective]: withPerspective,
        },
      ]"
    >
      <Preloader />
      <transition
        :enter-active-class="$style[`${transitionName}-enter-active`]"
        :leave-active-class="$style[`${transitionName}-leave-active`]"
        @before-leave="beforeLeave"
        @after-leave="afterLeave"
        @before-enter="beforeEnter"
        @enter="enter"
      >
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import ButtonNav from './components/indexbuttons'
import Preloader from './components/preloader'
import Arrows from './components/arrows'
import { sleep } from './utils'
import projects from './pages/Projects/projects'

export default {
  components: {
    ButtonNav,
    Preloader,
    Arrows,
  },
  data() {
    return {
      transitionName: '',
      duration: 1000,
    }
  },
  computed: {
    withPerspective() {
      return !Object.keys(projects).some(name => name === this.$route.name)
    },
  },
  methods: {
    elementDisappear(el) {
      if (!el.style) {
        return
      }

      return new Promise(async resolve => {
        el.style.transition = `opacity ${this.duration}ms, transform ${this.duration}ms ease`
        el.style.transform = 'translateY(-100px)'
        el.style.opacity = '0'
        await sleep(800)
        resolve()
      })
    },
    elementAppear(el) {
      if (!el.style) {
        return
      }

      return new Promise(async resolve => {
        el.style.transition = `opacity ${this.duration}ms, transform ${this.duration}ms ease`
        el.style.transform = 'translateY(0)'
        el.style.opacity = '1'
        await sleep(800)
        resolve()
      })
    },
    async beforeLeave(el) {
      if (!this.$route.params.animate) {
        return
      }
      this.$refs.application.style.height = '100vh'

      await this.elementDisappear(el.querySelector('#header'))
      this.elementDisappear(this.$refs.arrows.$el)
    },
    afterLeave(el) {
      if (!this.$route.params.animate) {
        return
      }

      this.$refs.application.style.height = 'auto'
    },
    beforeEnter(el) {
      this.elementDisappear(el.querySelector('#header'))
    },
    async enter(el, done) {
      if (!this.$route.params.animate) {
        return
      }

      await sleep(3000)
      done()
      await this.elementAppear(el.querySelector('#header'))
      this.elementAppear(this.$refs.arrows.$el)
    },
  },
  watch: {
    $route(to, from) {
      if (!from.meta.index && !this.$route.params.animate) {
        return
      }

      this.transitionName =
        to.meta.index > from.meta.index ? 'slide-right' : 'slide-left'
    },
  },
}
</script>

<style lang="sass" src="./assets/style/style.sass"></style>
<style lang="scss" module>
$duration: 1s;
$routeDelay: 2s;

.applicationWrapper {
  overflow: hidden;
}

.withPerspective {
  perspective: 500;
  -webkit-perspective: 500px;
}

.slide-right-enter-active {
  animation: slide-right-in $duration ease-in-out;
  animation-delay: $routeDelay;
}

.slide-right-leave-active {
  animation: slide-right-out $duration ease-in-out;
  animation-delay: $routeDelay;
  transform-origin: right;
}

.slide-left-enter-active {
  animation: slide-left-in $duration ease-in-out;
  animation-delay: $routeDelay;
}

.slide-left-leave-active {
  animation: slide-left-out $duration ease-in-out;
  animation-delay: $routeDelay;
  transform-origin: left;
}

@keyframes slide-right-in {
  0% {
    transform: translateX(100%);
    height: 100vh;
    overflow: hidden;
  }
  100% {
    height: 100vh;
    overflow: hidden;
    transform: translateX(0);
  }
}

@keyframes slide-right-out {
  0% {
    position: absolute;
    left: 0;
    right: 0;
    height: 100vh;
    overflow: hidden;
    transform: translateX(0) rotateY(0deg);
  }
  100% {
    position: absolute;
    left: 0;
    right: 0;
    height: 100vh;
    overflow: hidden;
    transform: translateX(-100%) rotateY(-27deg);
  }
}

@keyframes slide-left-in {
  0% {
    transform: translateX(-100%);
    height: 100vh;
    overflow: hidden;
  }
  100% {
    height: 100vh;
    overflow: hidden;
    transform: translateX(0);
  }
}

@keyframes slide-left-out {
  0% {
    position: absolute;
    left: 0;
    right: 0;
    height: 100vh;
    overflow: hidden;
    transform: translateX(0) rotateY(0deg);
  }
  100% {
    position: absolute;
    left: 0;
    right: 0;
    height: 100vh;
    overflow: hidden;
    transform: translateX(100%) rotateY(27deg);
  }
}
</style>
