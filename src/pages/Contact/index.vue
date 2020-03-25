<template>
  <div :class="$style.wrapper">
    <Header />
    <Container>
      <h2>Let's get in touch</h2>
      <div :class="$style.contentWrapper">
        <div :class="$style.contact">
          <h3 :class="$style.subTitle">Contact information</h3>
          <p :class="$style.catchupLine">
            If you like my work, why not contacting me for your next project?
          </p>
          <div :class="$style.infos">
            <div :class="$style.contactItem">
              <ContactPhoneIcon :class="$style.icon" />
              <div :class="$style.text">
                <h4 :class="$style.contactItemTitle">Phone</h4>
                <h5 :class="$style.contactItemValue">06 43 18 58 24</h5>
              </div>
            </div>
            <div :class="$style.contactItem">
              <ContactEmailIcon :class="$style.icon" />
              <div :class="$style.text">
                <h4 :class="$style.contactItemTitle">Email</h4>
                <h5 :class="$style.contactItemValue">acharlot91@gmail.com</h5>
              </div>
            </div>
            <div :class="[$style.contactItem, $style.city]">
              <ContactPlaceIcon :class="$style.icon" />
              <div :class="$style.text">
                <h4 :class="$style.contactItemTitle">City</h4>
                <h5 :class="$style.contactItemValue">Paris</h5>
              </div>
            </div>
          </div>
        </div>
        <div :class="$style.sociable">
          <h3 :class="$style.subTitle">Let's be sociable</h3>
          <a
            :class="$style.link"
            href="https://www.linkedin.com/in/alexandre-charlot-38698b151/"
            target="_blank"
          >
            <span :class="$style.linkIcon">in</span>
          </a>
          <a :class="$style.link" href="#" target="_blank">
            <img
              :class="$style.linkIcon"
              :src="require('@assets/images/ball.png').default"
            />
          </a>
          <a
            :class="$style.link"
            href="https://github.com/blaadje"
            target="_blank"
          >
            <GithubIcon :class="$style.linkIcon" />
          </a>
        </div>
      </div>
    </Container>
  </div>
</template>

<script>
import Header from '@components/header'
import arrows from '@components/arrows'
import ContactPhoneIcon from '@assets/images/contactPhone'
import ContactEmailIcon from '@assets/images/contactEmail'
import ContactPlaceIcon from '@assets/images/contactPlace'
import Container from '@components/Container'
import GithubIcon from '@assets/images/github-logo.svg'

export default {
  components: {
    arrows,
    Header,
    ContactPhoneIcon,
    ContactEmailIcon,
    ContactPlaceIcon,
    Container,
    GithubIcon,
  },
  mounted() {
    this.$nextTick(_ => {
      this.$store.dispatch('endPreload')
    })
  },
}
</script>

<style lang="scss" module src="./style.scss"></style>
