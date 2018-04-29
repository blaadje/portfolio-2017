<style lang="scss" scoped src="./style.scss"></style>
<script>
export default {
  props: {
    title: { type: String },
    description: { type: String },
    tags: { type: Array.String },
    github: { type: String },
    facebook: { type: String },
    src: { type: String },
    preview: { type: String }
  }
}
</script>
<template>
  <div class="Template-overlay">
    <div class="Template-wrapper">
      <img src="~/@assets/images/close.svg" class="Template-close" @click="() => this.$router.go(-1)"/>
      <div class="Template-header">
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
        <div class="Header-tags">
          <span class="Template-button Tags" v-for="(item, key) in tags" :key="key">{{ item }}</span>
        </div>
        <a :href="preview" target="_blank" class="Template-button Preview">Preview</a>
      </div>
      <div class="Template-socialNetwork">
        <a :href="github" class="Template-button Github" target="_blank">
          <img src="~/@assets/images/github-logo.svg" />
          <span>Github</span>
        </a>
        <a :href="facebook" class="Template-button Facebook" target="_blank">
          <img src="~/@assets/images/facebook-logo-button.svg" />
          <span>Facebook</span>
        </a>
      </div>
      
      <img 
        :src="require(`@assets/images/${src}`)"
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
