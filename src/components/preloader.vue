<template lang="pug">
  div.preloader(:class="{ '-hidden': !this.$store.getters.isPreloading }")
</template>

<style lang="sass" scoped>
.preloader
  background: white
  position: fixed
  top: 0
  left: 0
  width: 100vw
  transition: transform 6s ease-in-out
  transform: scaleX(0.1)
  transform-origin: left
  height: 3px
  opacity: 1
  z-index: 999
  &.-hidden
    transition: all 6s ease-in-out
    animation: load 6s forwards
    @keyframes load
      0%
        transform: scaleX(0.4)
      100%
        opacity: 0
        transform: scaleX(1)
        z-index: -999999
</style>
