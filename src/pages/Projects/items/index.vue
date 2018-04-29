<script>
import Templates from './Templates'
import datas from './projectItems'

export default {
  components: { Templates },
  data () { return { datas } }
}
</script>
<template>
  <Templates
    v-if="this.$route.name"
    :title="datas[this.$route.name].title"
    :description="datas[this.$route.name].description"
    :tags="datas[this.$route.name].tags"
    :github="datas[this.$route.name].github"
    :facebook="datas[this.$route.name].facebook"
    :src="datas[this.$route.name].src"
    :preview="datas[this.$route.name].preview"
  />
</template>
