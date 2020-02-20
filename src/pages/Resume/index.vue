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
        img(:src="require('@assets/images/experiences.svg').default").exp
      .hobbies
        h3 Hobbies
        p.
          I play piano (classical, synth, electronic organ), guitar (folk, electric) and drums occasionally.
          I love to compose acoustic or electronic music too
      
      .download
        p You can download my resume's printable version here :
        a(target="_blank", :href="require('@assets/moncv2.pdf').default")
          .button
            .squares
              .a
              .b
            span pdf
            img(:src="require('@assets/images/arrow.svg').default")
      
</template>
