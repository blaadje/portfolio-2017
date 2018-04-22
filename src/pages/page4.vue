<template lang="pug">
  .content
    topHeader
    arrows
    .wrapper
      h2 Resume
      .intro
        h3 An introduction of myself
        p.
          I'm 22 years old, passionated by informatics since forever. <br> <br>
          I choose the web orientation because that area interests me a lot and it never stops evolving. I'd like to improve myself in this area
          and keep learning new stuffs as much as development as design 
      .experience
        h3 Here are my experiences and diplomas
        img(src='../assets/images/experiences.svg').exp
      .hobbies
        h3 Hobbies
        p.
          I play piano (classical, synth, electronic organ), guitar (folk, electric) and drums occasiannaly.
          I love to compose acoustical or electronic musique too
      .download
        p You can download my resume's printable version here :
        .button
          .squares
            .a
            .b
          span pdf
          img(src="../assets/images/arrow.svg")
      
</template>
<script>
import topHeader from '@/components/header'
import indexBts from '@/components/indexbuttons'
import arrows from '@/components/arrows'

export default {
  components: { topHeader, indexBts, arrows },
  methods: {
    updateScroll (e) {
    }
  },
  mounted () {
    this.$nextTick(_ => {
      document.addEventListener('wheel', this.updateScroll)
      this.$store.dispatch('endPreload')
    })
  }
}
</script>

<style lang="sass" scoped>
$main: #282b3c
$text: #807e8e
$highlight: #38a8ab

.content 
  background: $main
  padding-bottom: 6em

.intro, .experience, .hobbies, .download
  color: white
  h3
    font-weight: 300
    font-size: 1.8em
    position: relative
    margin: 1.8em 0
    &:after
      content: ''
      position: absolute
      bottom: -50px
      height: 1px
      width: 150px
      background: $highlight
      left: 0
  .exp
    margin: 3em 0
  p
    width: 60%
    font-weight: 300
    font-size: 1.2em
    padding: 2.5em 0
  .button
    width: 200px
    height: 200px
    border: 2px solid white
    background: #236b78
    position: relative
    transition: all .8s
    &:hover
      cursor: pointer
      background: $main
      .a
        background: $main !important
      img
        animation: bounce 1s infinite
        @keyframes bounce
          0%
            transform: translateY(0) translateX(-50%)
          50%
            transform: translateY(-5px) translateX(-50%)
          100%
            transform: translateY(0) translateX(-50%)
    .squares
      position: relative
      width: 100%
      height: 100%
      .a, .b
        transform: translateX(-50%) translateY(-50%)
        width: 28%
        height: 35%
        position: absolute
        border: 3px solid $highlight
        border-radius: .2em
        padding: 1.5em
        transition: background .8s
      .a
        z-index: 2
        top: 50%
        left: 45%
        background: #236b78
      .b
        z-index: 1
        top: 43%
        left: 52%
    span
      background: white
      color: #807e8e
      padding: .4em 1em
      font-size: 1.3em
      border-radius: .2em
      text-transform: uppercase
      position: absolute
      z-index: 3
      top: 50%
      left: 40%
      transform: translateX(-50%)
    img
      position: absolute
      bottom: 10px
      left: 50%
      transform: translateX(-50%)
      width: 30px
      
</style>


