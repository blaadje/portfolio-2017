<style lang="sass" scoped src="./style.sass"></style>
<script>
import topHeader from '@/components/header'
import indexBts from '@/components/indexbuttons'
import arrows from '@/components/arrows'

export default {
  components: { topHeader, indexBts, arrows },
  mounted () {
    this.$store.dispatch('endPreload')
  }
}
</script>
<template lang="pug">
  .content
    topHeader
    arrows
    .wrapper
      h2 Skills
      #grid.cf
        #block1
          .frontEnd
            h3 Front-end languages
            .block
              .insideWrapper
                .rect.html
                  span.pourcentage 98%
                  span.text Html
                .rect.css
                  span.pourcentage 96%
                  span.text Css
          .prePross
            h3 Pre-processors
            .block
              .insideWrapper
                .rect.sass
                  span.pourcentage 65%
                  span.text Sass
                .rect.less
                  span.pourcentage 51%
                  span.text Less
                .rect.pug
                  span.pourcentage 75%
                  span.text Pug/Jade
                .rect.coffee
                  span.pourcentage 43%
                  span.text Coffee
        .backEnd.cf
          h3 Back-end languages
          .block
            img(:src="require('@assets/images/skillgraph.svg')").skillgraph
        #block2
          .frameworks
            h3 Main frameworks
            .block
              .item
                img(:src="require('@assets/images/vue.png')") 
                br
                span Vue JS
              .item
                img(:src="require('@assets/images/react.png')") 
                br
                span React JS
              .item
                img(:src="require('@assets/images/laravel.png')") 
                br
                span Laravel
              .item
                img(:src="require('@assets/images/semantic.png')") 
                br
                span Semantic
        #block3
          .design
            h3 Designing tools
            .block
              .insideWrapper
                .rect.photoshop
                  span.pourcentage 65%
                  span.text Photoshop
                .rect.sketch
                  span.pourcentage 90%
                  span.text Sketch
                .rect.illustrator
                  span.pourcentage 51%
                  span.text Illustrator
          .developping
            h3 Developing tools
            .block
              .left
                .ide
                  h1.title IDE
                  .textContent
                    span vscode
                    span eclipse
                    span vs studio
                    span pyscripter
                .platforms
                  h1.title Platforms
                  .textContent
                    span arch Linux
                    span Mac os
              .right
                .micro
                  h1.title Micro frameworks
                  .textContent
                    span express js
                    span electron
                    br
                    span socket io
                .building
                  h1.title Building Tools
                  .textContent
                    span grunt
                    span gulp
                    span webpack
                    br
                    span npm
                    span yarn
</template>


