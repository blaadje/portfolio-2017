<style lang="scss" scoped src="./style.scss"></style>
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
<template>
  <div class="Template-overlay">
    <div class="Template-wrapper">
      <div class="Template-header">
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
        <div class="Header-tags">
          <span class="Template-button Tags" v-for="(item, key) in tags" :key="key">{{ item }}</span>
        </div>
        <a href="" class="Template-button Preview">Preview</a>
      </div>
      <div class="Template-socialNetwork">
        <a :href="github" class="Template-button Github">
          <img src="" />
          <span>Github</span>
        </a>
        <a :href="facebook" class="Template-button Facebook">
          <img src="" />
          <span>Facebook</span>
        </a>
      </div>
      <img src="">
      <div class="Template-browser">
        <p>Browser compatibility</p>
        <img src="" />
        <img src="" />
      </div>
    </div>
  </div>
</template>
