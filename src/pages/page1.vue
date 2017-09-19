<template>
  <div class="content">
    <background :speed="0.1"/>
    <topHeader accueil/>
    <div class="wrapper">
      <div class="presentation">
        <div class="text">
          <h1>Web developer / Web designer</h1>
          <p>
            Hello everyone, my name is Alexandre.
            I'm 22 years old, welcome to my Portfolio.
          </p>
        </div>
        <img class="computer" src="../assets/computer.svg" alt="">
      </div>
      <img class="scroll" src="../assets/scroll.svg" alt="">
      <span class="scroll">Scroll down</span>
    </div>
  </div>
</template>

<script>
import topHeader from '@/components/header'
import indexBts from '@/components/indexbuttons'
import background from '@/components/background'

export default {
  components: { background, topHeader, indexBts },
  methods: {
    updateScroll (e) {
      if (e.deltaY > 0) {
        this.name = 'page2'
        this.$router.push({ name: this.name, params: { animate: true } })
      }
    }
  },
  destroyed () {
    window.removeEventListener('wheel', this.updateScroll)
  }
}
</script>

<style lang="sass" scoped>
// $main: #0d5b6a
$main: #282b3c
.content 
  position: relative
  z-index: 0
  background: #282b3c
  background-size: cover
  overflow: hidden
  height: 100vh
  .presentation
    position: absolute
    z-index: 4
    font-family: 'Nunito', sans-serif
    top: 0
    bottom: 0
    width: 1500px
    height: 410px
    text-align: center
    margin: auto
    .text
      display: inline-block
      vertical-align: top
      margin-top: 7em
      text-align: left
      margin-right: 5em
      h1
        font-weight: 300
        font-size: 3.1em
        padding: 0
        margin: .3em 0
      p
        margin: 0
        color: rgba(white, 0.8)
        padding: 0
        font-size: 1.7em
        font-weight: 300
        width: 600px
    .computer
      width: 500px
  img.scroll
    animation: bounce 1s infinite
    display: inline-block
    z-index: 3
    position: absolute
    width: 35px
    bottom: 18%
    left: 0
    right: 0
    margin: auto
    @keyframes bounce
      0%
        transform: translateY(0)
      50%
        transform: translateY(-10px)
      100%
        transform: translateY(0)
  span.scroll
    display: inline-block
    position: absolute
    z-index: 3
    font-size: .7em
    font-weight: 700
    border-radius: .2em
    text-align: center
    color: white
    text-transform: uppercase
    padding: .5em 0
    width: 100px
    bottom: 15%
    left: 0
    right: 0
    margin: auto
@media only screen and (max-width: 1500px)
  .presentation
    width: 100% !important
    left: 0

</style>
