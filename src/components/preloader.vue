<template lang="pug">
  div.preloader(:class="{ '-hidden': !this.$store.getters.isPreloading }")
</template>

<style lang="sass" scoped>
.preloader
  background: white
  position: fixed
  top: 0
  left: 0
  width: 100%
  transition: transform 2s ease-in-out
  transform: scaleX(0)
  transform-origin: left
  height: 3px
  opacity: 1
  z-index: 999
  &.-hidden
    animation: load 2s forwards
    @keyframes load
      0%
        opacity: 1
      100%
        opacity: 0
        transform: scaleX(1)
</style>
