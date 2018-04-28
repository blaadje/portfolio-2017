<style lang="scss" scoped src="./style.scss"></style>
<script>
export default {
  props: {
    title: { type: String },
    description: { type: String },
    tags: { type: Array.String },
    github: { type: String },
    facebook: { type: String },
    src: { type: String }
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
        <a href="" class="Template-button Preview">Preview</a>
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
      
      <div 
        v-if="src"
        :style="{ 
          background: 'linear-gradient(to left, rgba(39, 42, 59, 0.6), rgba(39, 42, 59, 0.6)), url('+ require(`@assets/images/${src}`) + ')',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }" 
        class="Template-image" 
      />f
      <div class="Template-browser">
        <p>Browser compatibility</p>
        <img src="" />
        <img src="" />
      </div>
    </div>
  </div>
</template>
