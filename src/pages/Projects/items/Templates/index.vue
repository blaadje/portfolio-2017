<style lang="sass" scoped src="./style.sass"></style>
<script>
export default {
  props: {
    title: { type: String },
    description: { type: String },
    tags: { type: Array },
    github: { type: String },
    facebook: { type: String }
  }
}
</script>
<template lang="pug">
.overlay
  .wrapper
    .content
      .title
        h1 {{ title }}
        p.
          {{ description }}
        .tags(v-for='item in tags')
          span.button {{ item }}
      .socialNetwork
        a(:href="github").button
          img(src="")
          span Github
        a(:href="facebook").button
          img(src="")
          span Facebook
      a(href="").preview Preview
      img(src="")
      .browser
        h2 browser compatibility
        img(src="")
        img(src="")

</template>
