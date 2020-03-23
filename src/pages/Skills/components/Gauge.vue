<template>
  <div>
    <div :class="$style.gaugeWrapper">
      <span
        :class="[$style.item, $style.gauge]"
        v-for="{ label, pourcentage } in items"
        :style="{
          height: `${pourcentage}%`,
          width: `calc(100% / ${items.length}`,
        }"
        :key="`gauge-${label}`"
        >{{ pourcentage }}%</span
      >
    </div>
    <div :class="$style.labelWrapper">
      <span
        :class="[$style.item, $style.label]"
        :style="{ width: `calc(100% / ${items.length}` }"
        v-for="{ label } in items"
        :key="label"
        >{{ label }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: [],
    },
  },
}
</script>

<style lang="scss" module>
.gaugeWrapper {
  height: 90px;
  display: flex;
  border-bottom: 2px solid #00a4aa;
}

.labelWrapper,
.gaugeWrapper {
  padding: 0 14px;
}

.item {
  display: inline-block;
  text-align: center;
}

.label {
  padding-top: 10px;
  color: white;
}

.gauge {
  border-radius: 1px 1px 0 0;
  margin-top: auto;
  padding-top: 10px;
  background: white;
  color: rgb(128, 126, 142);
  font-weight: 100;
}

.gauge:not(:last-child) {
  margin-right: 1px;
}
</style>
