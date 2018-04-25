<template lang="pug">
.overlay
  .wrapper
    .content
      .title
        h1 Projet Immobilier "Immo"
        p.
          L'agence immobilière Immo est un projet de bts qui propose des biens à d'éventuels acheteurs ou locataires.
        .tags
          span.button Html
          span.button css
          span.button PHP
      .socialNetwork
        a(href="").button
          img(src="")
          span Github
        a(href="").button
          img(src="")
          span Facebook
      a(href="").preview Preview
      img(src="")
      .browser
        h2 browser compatibility
        img(src="")
        img(src="")

</template>

<style lang="sass" scoped>
$main: #282b3c
.overlay 
  position: absolute
  z-index: 4
  top: 0
  width: 100%
  height: 100%
  left: 0
  background: rgba($main, 0.95) !important
  .wrapper
    width: 1000px

.content
  margin-top: 100px
  .title
    p
      color: rgba(white, 0.9)
    .tags
      span
</style>
