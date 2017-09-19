<template>
  <div id="header" class="cf">
    <div class="wrapper">
      <div class="logo" :class="{ accueil: accueil }">
        <p class="title">Charlot Alexandre</p>
        <p class="subTitle">Front-end developer</p>
      </div>
    <nav>
      <router-link :to="{ name: 'page1', params: { animate: true } }">Home</router-link>
      <router-link :to="{ name: 'page2', params: { animate: true } }">Skills</router-link>
      <router-link :to="{ name: 'page3', params: { animate: true } }">Projects</router-link>
      <router-link :to="{ name: 'page4', params: { animate: true } }">Resume</router-link>
      <router-link :to="{ name: 'page5', params: { animate: true } }">Contacts</router-link>
    </nav>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    accueil: { type: Boolean, default: false }
  }
}
</script>

<style lang="sass">
$main: #282b3c
#header
  font-family: lato, sans-serif
  box-shadow: 0px 3px 38px 0px rgba(0, 0, 0, 0.15)
  height: 100px
  background: rgba($main, 0.8)
  position: relative
  z-index: 3
  margin-bottom: 30px
  .logo
    background: transparent
    float: left
    text-align: center
    padding: 1.4em 2.5em
    &.accueil
      background: $main
      padding: 2em 2.5em
      box-shadow: 0px 3px 38px 0px rgba(0, 0, 0, 0.15)
    p
      margin: 0
      padding: 0
    .title
      font-weight: 600
      font-size: 1.6em
      text-transform: uppercase
      color: white
    .subTitle
      color: rgba(white, 0.7)
      font-size: 1.4em
  nav
    margin-top: 40px
    float: right
    a
      color: white
      font-weight: 600
      text-decoration: none
      text-transform: uppercase
      position: relative
      &:not(:last-child)
        margin-right: 2em
        &:after
          content: ''
          border-radius: 50%
          height: 3px
          width: 3px
          background: rgba(white, 0.6)
          position: absolute
          right: -1.2em
          top: 50%
          bottom: 50%
          transform: translateY(-50%)

</style>


