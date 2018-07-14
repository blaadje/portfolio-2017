<style lang="scss" scoped src="./style.scss"></style>
<script>
import datas from './projectItems'

export default {
  data () { return { datas: datas[this.$route.name] } }
}
</script>
<template>  
  <div class="Template-overlay">
    <div class="Template-wrapper">
      <img src="~/@assets/images/close.svg" class="Template-close" @click="() => this.$router.go(-1)"/>
      <div class="Template-header">
        <h1>{{ datas.title }}</h1>
        <p>{{ datas.description }}</p>
        <div class="Header-tags">
          <span class="Template-button Tags" v-for="(item, key) in datas.tags" :key="key">{{ item }}</span>
        </div>
        <a :href="datas.preview" target="_blank" class="Template-button Preview">Preview</a>
      </div>
      <div class="Template-socialNetwork">
        <a :href="datas.github" class="Template-button Github" target="_blank">
          <img src="~/@assets/images/github-logo.svg" />
          <span>Github</span>
        </a>
        <a :href="datas.facebook" class="Template-button Facebook" target="_blank">
          <img src="~/@assets/images/facebook-logo-button.svg" />
          <span>Facebook</span>
        </a>
      </div>
      
      <img 
        :src="require(`@assets/images/${datas.src}`)"
        class="Template-image"
        alt=""
      >

      <!-- <div class="Template-browser">
        <p>Browser compatibility</p>
        <img src="" />
        <img src="" />
      </div> -->
    </div>
  </div>
</template>

