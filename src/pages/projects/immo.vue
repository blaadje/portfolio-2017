<template lang="pug">
  .content
    .wrapper
      .title
        h1 Projet Immobilier "Immo"
        p.
          L'agence immobilière Immo est un projet de bts qui propose des biens à d'éventuels acheteurs ou locataires.
      .socialNetwork
        a(href="")
          img(src="")
          span Github
        a(href="")
          img(src="")
          span Facebook
      .tags
      a(href="").preview Preview
      img(src="")
      .browser
        h2 browser compatibility
        img(src="")
        img(src="")

</template>

<script>

export default {
  components: {},
  activated () {
    this.$nextTick(_ => {
      document.addEventListener('wheel', this.updateScroll)
      this.$store.dispatch('endPreload')
    })
  }
}
</script>

<style lang="sass" scoped>
// $main: #0d5b6a

$main: #282b3c
.content 
  position: absolute
  z-index: 4
  top: 0
  height: 100%
  left: 0
  background: rgba($main, 0.95) !important
  .wrapper
    width: 1000px
    border: 1px solid white

</style>
