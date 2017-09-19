<template lang="pug">
  .content
    topHeader
    arrows(last)
    .wrapper.cf
      h2 Let's get in touch
      .contact
        h3 Contact informations
        p If you like my work, why not contact on me for your next project?
        .infos.cf
          .phone
            .imageContainer
              img(src="../assets/contactPhone.svg").contactPhone
            .text
              h4 Phone
              h5 06 43 18 58 24
          .email
            .imageContainer
              img(src="../assets/contactEmail.svg").contactEmail
            .text
              h4 Email
              h5 acharlot91@gmail.com
          br
          .city
            .imageContainer
              img(src="../assets/contactPlace.svg").contactPlace
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
        a(href="#").linkedIn
          span in
        a(href="#").dribble
          img(src="../assets/ball.png")
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
  activated () {
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
$white: #31737f

.content 
  background: $main
  color: white
  h3
    font-weight: 300
    font-size: 1.8em
    position: relative
    margin-bottom: 2em
    &:after
      content: ''
      position: absolute
      bottom: -30px
      height: 1px
      width: 150px
      background: $highlight
      left: 0
  .contact, .message
    display: inline-block
    width: 50%
    vertical-align: top
    p
      font-size: 1.2em
      font-weight: 300
  .contact,
    .infos
      margin: 3em 0
      .phone, .email, .city
        display: inline-block
        margin-right: 20%
        position: relative
        vertical-align: top
        &:not(:last-child)
          margin-bottom: 2em
        .imageContainer
          width: 50px
          display: inline-block
          margin-right: .6em
          height: 47px
          position: relative
          float: left
          img
            top: 50%
            left: 50%
            width: 30px
            transform: translateX(-50%) translateY(-50%)
            position: absolute
            margin-right: 1em
            opacity: 0.8
          .contactEmail
            width: 38px !important
          .contactPlace
            width: 25px !important
            left: 30%
            top: 20%
            transform: rotate(-45deg)

        .text
          display: inline-block
          float: right
          h4, h5
            margin: 0
            font-weight: 300
          h4
            font-size: 1.4em
          h5
            font-size: 1.2em
            opacity: 0.7
  .message
    float: right
    margin-bottom: 8%
    .name, .email, .message, .send
      color: white
      outline: none
      width: 100%
      position: relative
      background: rgba(white, 0.1)
      border: none
      border-radius: .3em
      margin: 1em 0
      padding: 1em 0 1em 3em
      background-repeat: no-repeat
      background-size: 18px
      background-position: 2% 15px
      &::placeholder
        color: white
        -webkit-font-smoothing: antialiased
        -moz-osx-font-smoothing: grayscale
        font-family: 'Nunito', sans-serif
    .name
      background-image: url(../assets/name.svg)
    .email
      background-image: url(../assets/email.png)
    .message
      background-image: url(../assets/message.svg)
      resize: none
      height: 300px
    .send
      padding: 1.5em 0 1.5em 3em
      background-position: 12% 20px
      position: relative
      background-size: 25px
      background-image: url(../assets/send.svg)
      width: 30%
      &:hover
        cursor: pointer
      &:after
        position: absolute
        left: 34%
        top: 0
        content: ''
        background: white
        width: 1px
        height: 100%
  .sociable
    a
      display: inline-block
      transition: all .6s
      color: white
      text-decoration: none
      font-size: 2.5em
      font-weight: 700
      background: $white
      vertical-align: top
      border: 1px solid white
      padding: .4em .6em
      &:hover
        background: $main
      &:not(:last-child)
        margin-right: 1em
      img
        vertical-align: middle
    
</style>


