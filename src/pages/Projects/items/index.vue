<script>
import projects from '../projects'
import CloseIcon from '@assets/images/close'
import GithubIcon from '@assets/images/github-logo'
import FacebookIcon from '@assets/images/facebook-logo-button'

export default {
  components: {
    CloseIcon,
    GithubIcon,
    FacebookIcon,
  },
  computed: {
    project() {
      return projects[this.$route.name]
    },
  },
}
</script>
<template>
  <div :class="$style.wrapper">
    <div :class="$style.container">
      <CloseIcon :class="$style.close" @click="() => this.$router.go(-1)" />
      <div :class="$style.topWrapper">
        <div :class="$style.header">
          <h1>{{ project.name }}</h1>
          <p v-html="project.description" />
          <div :class="$style.tags">
            <span
              :class="[$style.button, $style.tags]"
              v-for="(item, key) in project.tags"
              :key="key"
              >{{ item }}</span
            >
          </div>
          <a
            v-if="project.preview"
            :href="project.preview"
            target="_blank"
            :class="[$style.button, $style.preview]"
            >Preview</a
          >
        </div>
        <div :class="$style.socialNetwork">
          <a
            v-if="project.github"
            :href="project.github"
            :class="[$style.button, $style.github]"
            target="_blank"
          >
            <GithubIcon :class="[$style.icon]" />
            <span>Github</span>
          </a>
          <a
            v-if="project.facebook"
            :href="project.facebook"
            :class="[$style.button, $style.facebook]"
            target="_blank"
          >
            <FacebookIcon :class="$style.icon" />
            <span>Facebook</span>
          </a>
        </div>
      </div>

      <img
        :src="require(`@assets/images/${project.src}`).default"
        :class="$style.image"
        alt=""
      />
    </div>
  </div>
</template>
<style lang="scss" module src="./style.scss"></style>
