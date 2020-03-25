<template>
  <div :class="$style.content">
    <Header />
    <Container>
      <h2>Resume</h2>
      <div :class="$style.intro">
        <h3 :class="$style.subTitle">Introducing me</h3>
        <hr :class="$style.divider" />
        <p v-html="resume.introduction" />
      </div>
      <div :class="$style.experience">
        <h3 :class="$style.subTitle">Here are my experiences and diplomas</h3>
        <hr :class="$style.divider" />
        <Timeline :class="$style.timeline" :items="resume.experiences" />
      </div>
      <div :class="$style.resume">
        <h3 :class="$style.subTitle">Resume</h3>
        <hr :class="$style.divider" />
        <div>You can download my resume's printable version here:</div>
        <a
          :class="$style.button"
          target="_blank"
          :href="require('@assets/moncv2.pdf').default"
        >
          <div :class="$style.squares">
            <div :class="$style.firstSquare"></div>
            <div :class="$style.secondSquare"></div>
          </div>
          <span :class="$style.buttonLabel">pdf</span>
          <ArrowIcon :class="$style.arrowIcon" />
        </a>
      </div>
    </Container>
  </div>
</template>

<script>
import Header from '@components/header'
import Container from '@components/container'
import ArrowIcon from '@assets/images/arrow'
import Timeline from './components/Timeline'
import resume from './resume'

export default {
  components: { ArrowIcon, Header, Container, Timeline },
  mounted() {
    this.$nextTick(_ => {
      this.$store.dispatch('endPreload')
    })
  },
  computed: {
    resume: () => resume,
  },
}
</script>

<style lang="scss" module src="./style.scss"></style>
