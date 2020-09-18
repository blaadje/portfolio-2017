<template>
  <div
    :class="[
      $style.wrapper,
      {
        [$style.withOverflow]: withOverflow,
      },
    ]"
  >
    <Header />
    <h2>Projects</h2>
    <div :class="$style.grid">
      <router-link
        v-for="({ description, noTray, tags, src, name, style },
        index) in projects"
        :key="index"
        :class="$style.link"
        :style="style"
        :to="{ name: index }"
      >
        <div :class="$style.block">
          <picture v-if="!noTray" :class="$style.picture">
            <img
              :class="$style.topBar"
              :src="require('@assets/images/topBar.png').default"
              alt=""
            />
          </picture>
          <div
            :class="$style.image"
            :style="{
              background: `linear-gradient(to left, rgba(40, 43, 60, 0.85), rgba(40, 43, 60, 0.85)), url(${
                require(`@assets/images/${src}`).default
              })`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }"
          >
            <div :class="$style.firstContent">
              <h3>{{ name }}</h3>
              <p
                :class="$style.description"
                v-html="getCroppedDescription(description)"
              />
            </div>
            <div :class="$style.hiddenContent">
              <span v-for="tag in tags" :key="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </router-link>
    </div>
    <transition
      :enter-active-class="$style[`slide-enter-active`]"
      :leave-active-class="$style[`slide-leave-active`]"
    >
      <router-view />
    </transition>
  </div>
</template>

<script>
import Header from '@components/header'
import projects from './projects'

export default {
  components: {
    Header,
  },
  computed: {
    withOverflow() {
      return Object.keys(projects).some(name => name === this.$route.name)
    },
    projects: () => projects,
    projectsLength() {
      return Object.keys(this.projects).length + 1
    },
  },
  methods: {
    getCroppedDescription(description) {
      const maxCharacters = 20

      const string = description.split(' ')
      const isCropped = string.length > maxCharacters

      return isCropped
        ? [...string.slice(0, maxCharacters), '...'].join(' ')
        : description
    },
  },
  mounted() {
    this.$nextTick(_ => {
      this.$store.dispatch('endPreload')
    })
  },
}
</script>

<style lang="scss" module>
$main: #282b3c;
$text: #807e8e;
$highlight: #00a4a9;
$opacity: 0.85;

.wrapper {
  background: rgba($main, 0.9);
  padding-bottom: 100px;
}

.withOverflow {
  overflow: hidden;
  height: 100vh;
}

.grid {
  justify-content: center;
  grid-gap: 4rem;
  display: grid;
  grid-template-columns: 500px 500px;
  grid-auto-rows: 313px;
  margin: auto;
}

.block {
  border-radius: 0 0 0.3em 0.3em;
  height: 100%;
  position: relative;
  overflow: hidden;
  border: none;
  box-shadow: 0px 3px 38px 0px rgba(0, 0, 0, 0.23);
  &:hover {
    cursor: pointer;
    .image {
      transform: scale(1.1);
    }
  }
}

.topBar {
  width: 100%;
  height: 13px;
  background-size: cover;
  z-index: 3;
}

.picture {
  display: flex;
  position: relative;
  z-index: 4;
}

.picture:after {
  content: '';
  background: linear-gradient(
    to left,
    rgba($main, $opacity),
    rgba($main, $opacity)
  );
  border-radius: 0.3em 0.3em 0 0;
  position: absolute;
  z-index: 1000;
  top: -1px;
  left: -1px;
  right: -1px;
  bottom: 0;
}

.image {
  transition: all 0.6s;
  height: 100%;
  z-index: 2;
  position: relative;
  border-radius: 0 0 0.3em 0.3em;
  background-size: contain;
}

.hiddenContent {
  position: absolute;
  transition: all 0.6s;
  top: 50%;
  width: 100%;
  transform: translateY(-300px);
  opacity: 0;
  text-align: center;
  span {
    text-transform: uppercase;
    color: white;
    padding: 0.5em 1em;
    border-radius: 0.2em;
    background: rgba(#1fa8ab, 0.5);
    &:not(:last-child) {
      margin-right: 1em;
    }
  }
}

.link {
  text-decoration: none;
}

.firstContent {
  opacity: 1;
  flex-grow: 1;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  transition: all 0.6s;
  padding: 0 4em;
  color: white;
  h3 {
    font-size: 3em;
    padding: 0;
    margin: 0;
  }
  p {
    padding: 0;
    font-size: 1.2em;
  }
}

.slide-enter-active {
  animation: slideUp 0.3s linear;
}

.slide-leave-active {
  animation: slideDown 0.3s linear;
}

@keyframes slideUp {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideDown {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(100%);
  }
}
</style>
