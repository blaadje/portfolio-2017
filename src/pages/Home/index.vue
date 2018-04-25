<style lang="sass" scoped src="./style.sass"></style>
<script>
import topHeader from '@/components/header'
import indexBts from '@/components/indexbuttons'
import background from '@/components/background'

export default {
  components: { background, topHeader, indexBts }
}
</script>
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
        <img class="computer" :src="require('@assets/images/computer.svg')" alt="">
      </div>
      <img class="scroll" :src="require('@assets/images/scroll.svg')" alt="">
      <span class="scroll">Scroll down</span>
    </div>
  </div>
</template>




