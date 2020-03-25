<template>
  <div id="header" :class="$style.wrapper">
    <Container :class="$style.container">
      <div :class="[$style.logo, { accueil: accueil }]">
        <p :class="$style.title">Alexandre Charlot</p>
        <p :class="$style.subTitle">Front-end developer</p>
      </div>
      <nav :class="$style.links">
        <router-link
          :class="$style.link"
          :to="{ name: 'page1', params: { animate: true } }"
          >Home</router-link
        >
        <router-link
          :class="$style.link"
          :to="{ name: 'page2', params: { animate: true } }"
          >Skills</router-link
        >
        <router-link
          :class="$style.link"
          :to="{ name: 'page3', params: { animate: true } }"
          >Projects</router-link
        >
        <router-link
          :class="$style.link"
          :to="{ name: 'page4', params: { animate: true } }"
          >Resume</router-link
        >
        <router-link
          :class="$style.link"
          :to="{ name: 'page5', params: { animate: true } }"
          >Contact</router-link
        >
      </nav>
    </Container>
  </div>
</template>

<script>
import Container from '@components/container'
export default {
  components: {
    Container,
  },
  props: {
    accueil: { type: Boolean, default: false },
  },
}
</script>

<style lang="scss" module>
$main: #282b3c;

.wrapper {
  box-shadow: 0px 3px 38px 0px rgba(0, 0, 0, 0.15);
  height: 100px;
  background: rgba($main, 0.8);
  top: 0;
  left: 0;
  right: 0;
  position: relative;
  z-index: 8;
  padding: 0 40px;
}

.container {
  height: 100%;
  display: flex;
  align-items: center;
  width: 100%;
}

.logo {
  background: transparent;
  &.accueil {
    background: $main;
    padding: 2em 2.5em;
    box-shadow: 0px 3px 38px 0px rgba(0, 0, 0, 0.15);
  }
}

.title {
  margin: 0;
  font-weight: 600;
  font-size: 1.6em;
  text-transform: uppercase;
  color: white;
}

.subTitle {
  margin: 0;
  color: rgba(white, 0.7);
  font-size: 1.4em;
}

.links {
  margin-left: auto;
}

.link {
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  text-transform: uppercase;
  position: relative;
  &:not(:last-child) {
    margin-right: 2em;
    &:after {
      content: '';
      border-radius: 50%;
      height: 3px;
      width: 3px;
      background: rgba(white, 0.6);
      position: absolute;
      right: -1.2em;
      top: 50%;
      bottom: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>
