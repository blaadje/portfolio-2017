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
            img(src="../assets/skillgraph.svg").skillgraph
        #block2
          .frameworks
            h3 Main frameworks
            .block
              .item
                img(src="../assets/vue.png") 
                br
                span Vue JS
              .item
                img(src="../assets/react.png") 
                br
                span React JS
              .item
                img(src="../assets/laravel.png") 
                br
                span Laravel
              .item
                img(src="../assets/semantic.png") 
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
                  span.pourcentage 33%
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
                    span atom
                    span vscode
                    br
                    span eclipse
                    span vs studio
                    br
                    span pyscripter
                .platforms
                  h1.title Platforms
                  .textContent
                    span mac os
                    span windows
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
  </div>
</template>

<script>
import topHeader from '@/components/header'
import indexBts from '@/components/indexbuttons'
import arrows from '@/components/arrows'

export default {
  components: { topHeader, indexBts, arrows },
  activated () {
    this.$nextTick(_ => {
      document.removeEventListener('wheel', this.updateScroll)
      this.$store.dispatch('endPreload')
    })
  }
}
</script>

<style lang="sass" scoped>
$main: #282b3c
$text: #807e8e
$highlight: #00a4a9

.content 
  background: $main
  padding-bottom: 3em
  #grid
    #block1, #block2, #block3, #block4
      display: inline-block
      position: relative
    #block1:after
      content: ''
      position: absolute
      left: 20.5%
      background: #236a79
      height: 2px
      bottom: -30px
      width: 466px
    #block3:after
      content: ''
      position: absolute
      left: 17%
      background: #236a79
      height: 2px
      top: 40px
      width: 985px
    .frontEnd,.prePross, .backEnd, .frameworks, .design, .developping
      display: inline-block
      vertical-align: top
      height: auto
      margin: 2em
      position: relative
      z-index: 2
      background: transparent
      &:not(.design):not(.developping):after
        content: ''
        position: absolute
        bottom: -62px
        z-index: -1
        left: 50%
        height: 62px
        width: 2px
        background: #236a79
      h3
        font-weight: 300
        font-size: 1.9em
        color: white
        margin-top: 0
      .block
        box-shadow: 0px 0px 31.15px 3.85px rgba(0, 0, 0, 0.3)
        height: 100%
        .insideWrapper
          border-bottom: 2px solid $highlight
          height: 100%
          display: flex
          justify-content: center
          text-align: center
          .rect
            height: 100%
            position: relative
            flex-direction: row
            align-self: flex-end
            width: 35%
            background: white
            vertical-align: bottom !important
            &:not(:last-child)
              margin: 0 1px 0 0
            .pourcentage
              color: $text
              position: absolute
              top: 20px
              left: 0
              right: 0
            .text
              font-size: 1.3em
              color: white
              position: absolute
              bottom: -35px
              left: 0
              right: 0
    .frontEnd, .prePross, .design
      .block
        padding: 2.5em 2.5em 3.8em 2.5em
    .frontEnd
      //width: 35.13%
      width: 315px
      .block
        height: 250px
      .rect
        width: 40% !important
      .html
        height: 98% !important
      .css
        height: 96% !important
      &:before
        content: ''
        position: absolute
        top: 60%
        z-index: -1
        right: -64px
        height: 2px
        width: 65px
        background: #236a79
    .prePross
      width: 490px
      .block
        height: 250px
      .rect
        width: 20% !important
      .sass
        height: 65% !important
      .less
        height: 51% !important
      .pug
        height: 75% !important
      .coffee
        height: 43% !important
      &:before
        content: ''
        position: absolute
        top: 60%
        z-index: -1
        right: -67px
        height: 2px
        width: 67px
        background: #236a79
    .backEnd
      width: 500px
      float: right
      &:after
        content: ''
        position: absolute
        bottom: -73px !important
        z-index: -1
        left: 50%
        height: 73px !important
        width: 2px
        background: #236a79
      .block
        height: 500px
      .skillgraph
        margin-top: 1.3em
    .frameworks
      margin: 1em 0 1em 40%
      width: 500px
      display: block
      &:before
        content: ''
        position: absolute
        top: 14px
        z-index: -1
        left: 50%
        height: 50px
        width: 2px
        background: #236a79
      .block
        height: 150px
      .block
        padding: 2em
        text-align: center
        .item
          display: inline-block
          vertical-align: top
          &:not(:last-child)
            margin-right: 2.5em
          img
            margin-bottom: .5em
          span
            color: white
            font-size: 1.2em
    .design
      width: 400px
      .block
        height: 250px
      .rect
        width: 30% !important
      .photoshop
        height: 65% !important
      .sketch
        height: 33% !important
      .illustrator
        height: 51% !important
      &:before
        content: ''
        position: absolute
        top: 8px
        z-index: -1
        left: 50%
        height: 56px
        width: 2px
        background: #236a79
      &:after
        content: ''
        position: absolute
        top: 60%
        z-index: -1
        right: -160px
        height: 2px
        width: 160px
        background: #236a79
    .developping
      margin-left: 8em
      width: 750px
      margin-bottom: 3em
      &:before
        content: ''
        position: absolute
        top: 8px
        z-index: -1
        left: 50%
        height: 56px
        width: 2px
        background: #236a79
      .block
        height: 350px
      .block
        padding: 3em 1em
        text-align: center
        .left, .right
          height: 100%
          text-align: left
          width: calc(50% - 1em)
          display: inline-block
          vertical-align: top
          padding: 0 1em
          &.right
            float: right
          &.left
            border-right: 1px solid $highlight

          h1
            font-weight: 300
            font-size: 2em
            &:after
              content: ' :'
          .textContent
            padding: 1em
            span
              text-transform: uppercase
              display: inline-block
              color: white
              margin: .5em 2em .5em 0
@media only screen and (max-width: 1500px)
  .presentation
    width: 100% !important
    left: 0

</style>


