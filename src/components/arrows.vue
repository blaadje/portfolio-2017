<template>
  <div v-if="shouldShow" :class="$style.wrapper">
    <a href="#" @click.prevent="previousRoute" :class="$style.prev">
      <BackIcon :class="$style.arrowIcon" />
      <span :class="$style.text">Prev</span>
    </a>
    <a href="#" v-if="!last" @click.prevent="nextRoute" :class="$style.next">
      <span :class="$style.text">Next</span>
      <NextIcon :class="$style.arrowIcon" />
    </a>
  </div>
</template>

<script>
import BackIcon from '@assets/images/back'
import NextIcon from '@assets/images/next'

const FIRST_PAGE = 1
const LAST_PAGE = 5

export default {
  components: {
    BackIcon,
    NextIcon,
  },
  props: { last: { type: Boolean, default: false } },
  computed: {
    shouldShow() {
      return (
        this.$route.meta.index !== FIRST_PAGE &&
        this.$route.meta.index !== LAST_PAGE
      )
    },
  },
  methods: {
    previousRoute() {
      this.$router.push({
        name: `page${this.$route.meta.index - 1}`,
        params: { animate: true },
      })
    },
    nextRoute() {
      this.$router.push({
        name: `page${this.$route.meta.index + 1}`,
        params: { animate: true },
      })
    },
  },
}
</script>

<style lang="scss" module>
.wrapper {
  position: fixed;
  padding: 0 40px;
  right: 0;
  left: 0;
  top: 50vh;
  z-index: 50;
  display: flex;
}

.arrowIcon {
  fill: white;
  color: white;
  width: 50px;
  height: 50px;
}

.text {
  font-size: 1em;
}

.prev,
.next {
  display: flex;
  align-items: center;
  outline: none;
  text-decoration: none;
  color: white;
  transition: all 0.4s;
  &:hover {
    transform: scale(1.1);
  }
}

.next {
  margin-left: auto;
}
</style>
