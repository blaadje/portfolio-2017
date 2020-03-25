<template>
  <div :class="$style.wrapper">
    <Header />
    <background :speed="0.1" @isScrolled="handleScroll" />
    <Container :class="$style.container">
      <div :class="$style.presentation">
        <div :class="$style.text">
          <h1 :class="$style.title">Front-end developer</h1>
          <p :class="$style.description">
            Hi, I'm Alexandre and I'm 24 years old. <br />Welcome to my
            Portfolio.
          </p>
        </div>
        <ComputerIcon :class="$style.computer" />
      </div>
      <ScrollIcon :class="$style.scroll" />
      <span :class="$style.scroll">Scroll down</span>
    </Container>
  </div>
</template>

<script>
import Header from '@components/header'
import background from '@components/background'
import ComputerIcon from '@assets/images/computer'
import ScrollIcon from '@assets/images/scroll'
import Container from '@components/container'
import { mapGetters } from 'vuex'

export default {
  components: {
    Header,
    background,
    ComputerIcon,
    ScrollIcon,
    Container,
  },
  methods: {
    handleScroll() {
      this.$router.push({ name: 'page2', params: { animate: true } })
    },
  },
}
</script>

<style lang="scss" module src="./style.scss" />
