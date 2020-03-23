<template>
  <div :class="$style.wrapper">
    <slot />
  </div>
</template>

<style lang="scss" module>
.wrapper {
  display: inline-flex;
  background: #292b3c;
  box-shadow: 0px 0px 31.15px 3.85px rgba(0, 0, 0, 0.3);
  padding: 2.3rem 2rem;
}
</style>

