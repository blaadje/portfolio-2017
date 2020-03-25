<template>
  <div :class="$style.wrapper"><slot /></div>
</template>

<style lang="scss"module>
.wrapper {
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
}
</style>