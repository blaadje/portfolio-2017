<template>
  <div id="arrows">
    <a href="#" @click.prevent="RouteLeft" class="prev">
      <i class="arrow"></i>
      <span>Prev</span>
    </a>
    <a href="#" v-if="!last" @click.prevent="RouteRight" class="next">
      <i class="arrow"></i>
      <span>Next</span>
    </a>
  </div>
</template>

<script>
export default {
  props: { last: { type: Boolean, default: false } },
  data () {
    return {
      index: this.$route.meta.index,
      show: true
    }
  },
  methods: {
    RouteLeft () {
      if (this.$route.meta.index > 1) {
        let page = this.$route.meta.index - 1
        this.$router.push({ name: 'page' + page, params: { animate: true } })
      }
    },
    RouteRight () {
      if (this.$route.meta.index < 5) {
        let page = this.$route.meta.index + 1
        this.$router.push({ name: 'page' + page, params: { animate: true } })
      }
    }
  }
}
</script>

<style lang="sass" scoped>
#arrows
  position: fixed
  width: 100%
  top: 50vh
  .prev, .next
    outline: none
    position: absolute
    perspective: 200
    text-decoration: none
    color: white
    &:hover
      span
        opacity: 1
        transform: translateY(-50%) translateX(0)
    span
      transition: all .4s
      font-size: 1em
      opacity: 0
      position: absolute
      top: 50%
    .arrow
      $size: 50px
      transition: all .4s ease-in-out
      display: inline-block
      font-style: normal
      border-radius: .2em
      position: relative
      content: ''
      width: $size
      height: $size
      border-right: 0.2em solid white
      border-top: 0.2em solid white
  .prev
    left: 3%
    span
      left: 50%
      transform: translateY(-50%) translateX(-20px)
    .arrow
      transform: rotate(-135deg)
    &:hover
      .arrow
        transform: rotate(-135deg) scale(1.1)
    
  .next
    right: 3%
    span
      right: 50%
      transform: translateY(-50%) translateX(20px)
    .arrow
      transform: rotate(45deg)
    &:hover
      .arrow
        transform: rotate(45deg) scale(1.1)
    
</style>

