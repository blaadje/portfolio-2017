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
    arrows(last)
    .wrapper.cf
      h2 Let's get in touch
      .contact
        h3 Contact informations
        p If you like my work, why not contact me for your next project ?
        .infos.cf
          .phone
            .imageContainer
              img(:src="require('@assets/images/contactPhone.svg').default").contactPhone
            .text
              h4 Phone
              h5 06 43 18 58 24
          .email
            .imageContainer
              img(:src="require('@assets/images/contactEmail.svg').default").contactEmail
            .text
              h4 Email
              h5 acharlot91@gmail.com
          br
          .city
            .imageContainer
              img(:src="require('@assets/images/contactPlace.svg').default").contactPlace
            .text
              h4 City
              h5 Paris
      .message
        h3 Send me a message
        p.
          If you have any further question about my work don't hesitate to contact me.
          I will get back to you as soon as I can.
        form
          input(placeholder="Name", required).name
          input(placeholder="Email", required).email
          textarea(placeholder="Message", required).message
          button(type="submit").send Send
      .sociable
        h3 Let's be sociable
        a(href="https://www.linkedin.com/in/alexandre-charlot-38698b151/", target='_blank').linkedIn
          span in
        a(href="#").dribble
          img(:src="require('@assets/images/ball.png').default")
</template>
