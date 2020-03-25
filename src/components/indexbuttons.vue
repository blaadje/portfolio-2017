<template>
  <div :class="$style.wrapper">
    <router-link
      v-for="{ name } in routes"
      :key="name"
      :to="{ name, params: { animate: true } }"
      :class="$style.navigation"
      :active-class="$style.active"
      exact
    />
  </div>
</template>

<script>
export default {
  computed: {
    routes() {
      return this.$router.options.routes.filter(({ path }) => path !== '*')
    },
  },
}
</script>

<style lang="scss" module>
.wrapper {
  position: fixed;
  bottom: 60px;
  left: 0;
  right: 0;
  z-index: 4;
  display: flex;
  justify-content: center;
}

.navigation {
  border-radius: 50%;
  display: inline-block;
  height: 28px;
  width: 28px;
  border: 5px solid white;
  background: white;
  position: relative;
  cursor: pointer;
  transition: background 0.8s;
  outline: none;
  &:not(:last-child) {
    margin-right: 1em;
    &:after {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: -26px;
      content: '';
      width: 23px;
      background: white;
      height: 5px;
    }
  }

  &.active {
    background: transparent;
  }
}
</style>
