<template>
  <div id="navbar">
    <router-link
      :to="{ name: 'page1', params: { animate: true } }"
      class="navigation"
      exact
    ></router-link>
    <router-link
      :to="{ name: 'page2', params: { animate: true } }"
      class="navigation"
      exact
    ></router-link>
    <router-link
      :to="{ name: 'page3', params: { animate: true } }"
      class="navigation"
      exact
    ></router-link>
    <router-link
      :to="{ name: 'page4', params: { animate: true } }"
      class="navigation"
      exact
    ></router-link>
    <router-link
      :to="{ name: 'page5', params: { animate: true } }"
      class="navigation"
      exact
    ></router-link>
  </div>
</template>

<script>
export default {}
</script>

<style lang="sass" scoped>
#navbar
  position: fixed
  bottom: 5%
  left: 0
  text-align: center
  right: 0
  z-index: 4
  margin: auto
  .navigation
    border-radius: 50%
    display: inline-block
    height: 28px
    width: 28px
    border: 5px solid white
    background: white
    position: relative
    cursor: pointer
    transition: background .8s
    outline: none
    &:not(:last-child)
      margin-right: 1em
      &:after
        position: absolute
        top: 50%
        transform: translateY(-50%)
        right: -26px
        content: ''
        width: 23px
        background: white
        height: 5px
    &.router-link-active
      background: transparent
</style>
