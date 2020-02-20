<style lang="sass" scoped src="./style.sass"></style>
<script>
import topHeader from '@components/header'
import indexBts from '@components/indexbuttons'
import arrows from '@components/arrows'
export default {
  components: { topHeader, indexBts, arrows },
  mounted() {
    this.$nextTick(_ => {
      this.$store.dispatch('endPreload')
    })
  },
}
</script>
<template lang="pug">
  .content
    topHeader
    arrows
    .wrapper
      h2 Projects
      #grid
        router-link(:to="{ name: 'drawer' }")
          .drawer
            .image(:style="{ background: 'linear-gradient(to left, rgba(40, 43, 60, 0.85), rgba(40, 43, 60, 0.85)), url('+ require('@assets/images/creativeDrawer.png').default + ')', backgroundSize: 'cover' }")
              .firstContent
                h3 Creative Drawer
                p.
                  Creative Drawer est un CMS permettant aux dessinateurs de creer un site d'exposition d'oeuvres rapidement.
              .hiddenContent
                span Html
                span Css / Sass
                span Php
        router-link(:to="{ name: 'immo' }")
          .immo
            .image(:style="{ background: 'linear-gradient(to left, rgba(40, 43, 60, 0.85), rgba(40, 43, 60, 0.85)), url('+ require('@assets/images/immo.png').default + ')', backgroundSize: 'cover' }")
              .firstContent
                h3 Immo
                p.
                  L'agence immobilière Immo est un projet de bts qui propose des biens à d'éventuels acheteurs ou locataires.
              .hiddenContent
                span Html / jade
                span Css / Sass
                span Php / activeRecord
        router-link(:to="{ name: 'todolist' }")
          .todoList
            .image(:style="{ background: 'linear-gradient(to left, rgba(40, 43, 60, 0.85), rgba(40, 43, 60, 0.85)), url('+ require('@assets/images/todolist.png').default + ')', backgroundSize: 'cover' }")
              .firstContent
                h3 TodoList
                p TodoList est une application de bureau permettant de gerer ses taches journalieres de maniere optimise.
              .hiddenContent
                span Vue js
                span Electron
                span Nedb

        //- router-link(:to="{ name: 'portfolio2016' }")
        .oldPortfolio
          .image(:style="{ background: 'linear-gradient(to left, rgba(40, 43, 60, 0.85), rgba(40, 43, 60, 0.85)), url('+ require('@assets/images/oldportfolio.png').default + ')', backgroundSize: 'cover' }")
            .firstContent
              h3 Portfolio (2016)
              p.
                Mon ancien Portfolio qui a ete creer pour le BTS.
            .hiddenContent
              span Html
              span Css
        //- router-link(:to="{ name: 'portfolio2017' }")
        .newPortfolio
          .image(:style="{ background: 'linear-gradient(to left, rgba(40, 43, 60, 0.85), rgba(40, 43, 60, 0.85)), url('+ require('@assets/images/newportfolio.png').default + ')', backgroundSize: 'cover' }")
            .firstContent
              h3 Portfolio (2017)
              p.
                Nouveau Portfolio
            .hiddenContent
              span Vue js
              span Vue router
              span Vuex
      transition(name="slide" appear)
        router-view(:key="$route.fullPath" v-if="$route.name !== 'page3'")
</template>
