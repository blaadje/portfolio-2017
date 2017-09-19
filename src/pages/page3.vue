<template lang="pug">
  .content
    topHeader
    arrows
    .wrapper
      h2 Projects
      #grid
        .immo
          .image(:style="{ background: 'linear-gradient(to left, rgba(40, 43, 60, 0.85), rgba(40, 43, 60, 0.85)), url('+ require('../assets/immo.png') + ')', backgroundSize: 'cover' }")
            .firstContent
              h3 Immo
              p.
                L'agence immobilière Immo est un projet de bts qui propose des biens à d'éventuels acheteurs ou locataires.
            .hiddenContent
              span Html / jade
              span Css / Sass
              span Php / activeRecord
        .todoList
          .image(:style="{ background: 'linear-gradient(to left, rgba(40, 43, 60, 0.85), rgba(40, 43, 60, 0.85)), url('+ require('../assets/todoList.png') + ')', backgroundSize: 'cover' }")
            .firstContent
              h3 TodoList
              p TodoList est une application de bureau permettant de gerer ses taches journalieres de maniere optimise.
            .hiddenContent
              span Vue js
              span Electron
              span Nedb
        .waldata
          .image(:style="{ background: 'linear-gradient(to left, rgba(40, 43, 60, 0.85), rgba(40, 43, 60, 0.85)), url('+ require('../assets/waldata.png') + ')', backgroundSize: 'cover' }")
            .firstContent
              h3 Waldata
              p Waldata propose des logiciels d'aide a la decision en bourse.
            .hiddenContent
              span Html
              span Css
              span Asp
        .waltrade
          .image(:style="{ background: 'linear-gradient(to left, rgba(40, 43, 60, 0.85), rgba(40, 43, 60, 0.85)), url('+ require('../assets/waltrade.png') + ')', backgroundSize: 'cover' }")
            .firstContent
              h3 Waltrade Institut
              p.
                Waltrade propose des formations sur place ou a distance afin de progresser et d'evoluer sur les marches.
            .hiddenContent
              span Html
              span Css
              span Asp
        .oldPortfolio
          .image(:style="{ background: 'linear-gradient(to left, rgba(40, 43, 60, 0.85), rgba(40, 43, 60, 0.85)), url('+ require('../assets/oldportfolio.png') + ')', backgroundSize: 'cover' }")
            .firstContent
              h3 Portfolio (2016)
              p.
                Mon ancien Portfolio qui a ete creer pour le BTS.
            .hiddenContent
              span Html
              span Css
        .newPortfolio
          .image(:style="{ background: 'linear-gradient(to left, rgba(40, 43, 60, 0.85), rgba(40, 43, 60, 0.85)), url('+ require('../assets/newportfolio.png') + ')', backgroundSize: 'cover' }")
            .firstContent
              h3 Portfolio (2017)
              p.
                Nouveau Portfolio
            .hiddenContent
              span Vue js
              span Vue router
              span Vuex

</template>
<script>
import topHeader from '@/components/header'
import indexBts from '@/components/indexbuttons'
import arrows from '@/components/arrows'
export default {
  components: { topHeader, indexBts, arrows },
  methods: {
    updateScroll (e) {
      document.removeEventListener('wheel', this.updateScroll)
    }
  },
  activated () {
    this.$nextTick(_ => {
      this.$store.dispatch('endPreload')
    })
  }
}
</script>

<style lang="sass" scoped>
$main: #282b3c
$text: #807e8e
$highlight: #00a4a9
$opacity: 0.85

.content 
  background: $main

#grid
  width: 80%
  margin: auto
  .immo, .todoList, .waldata, .waltrade, .oldPortfolio, .newPortfolio
    display: inline-block
    vertical-align: top
    margin: 2em
    border-radius: 0 0 .3em .3em
    position: relative
    overflow: hidden
    border: none
    width: calc(50% - (2em * 2))
    box-shadow: 0px 3px 38px 0px rgba(0, 0, 0, 0.23)
    &:hover
      cursor: pointer
      .image
        transform: scale(1.1)
      .firstContent
        transform: translateY(300px) !important
        opacity: 0 !important
      .hiddenContent
        opacity: 1 !important
        transform: translateY(-50%) !important
    &:not(.todoList)
      padding-top: 16.96px
    &:not(.todoList):before
      z-index: 3
      position: absolute
      top: 0
      border-radius: .3em .3em 0 0
      width: 100%
      height: 16.96px
      content: ''
      background: linear-gradient(to left, rgba($main, $opacity), rgba($main, $opacity)), url('../assets/topBar.png')
      background-size: cover
    .image
      transition: all .6s
      z-index: 2
      height: 100%
      position: relative
      border-radius: 0 0 .3em .3em
      .hiddenContent
        position: absolute
        transition: all .6s
        top: 50%
        width: 100%
        transform: translateY(-300px)
        opacity: 0
        text-align: center
        span
          text-transform: uppercase
          color: white
          padding: .5em 1em
          border-radius: .2em
          background: rgba(#1fa8ab, 0.5)
          &:not(:last-child)
            margin-right: 1em
      .firstContent
        opacity: 1
        height: auto
        position: absolute
        transition: all .6s
        top: 50%
        transform: translateY(-50%)
        padding: 0 4em
        color: white
        h3
          margin: 0 0 1em 0
          padding-bottom: 1em
          border-bottom: 2px solid white
          font-size: 3em
        p
          font-size: 1.2em
  
  .immo
    height: 330px
    .image
      background-size: cover !important
      background-position: 50% 50% !important
  .todoList
    float: right
    height: 725px
    .image
      background-size: cover !important
      background-position: 50% 50% !important
  .waldata
    height: 330px
    .image
      background-size: cover !important
      background-position: 50% 50% !important
  .oldPortfolio
    height: 330px
    .image
      background-size: cover !important
      background-position: 50% 50% !important
  .newPortfolio
    height: 330px
    .image
      background-size: cover !important
      background-position: 50% 50% !important
  .waltrade
    width: calc(100% - 4em)
    height: 600px
    .image
      background-size: cover !important
      background-position: 50% 50% !important
</style>


