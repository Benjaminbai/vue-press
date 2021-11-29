<template>
  <a-slider :range="range" :defaultValue="defaultValue" :disabled="disabled" />
</template>

<script>
import Vue from "vue";
import { Slider } from "ant-design-vue";
import "ant-design-vue/lib/slider/style/index.js";
Vue.use(Slider);

export default {
  name: "BSlider",
  props: {
    defaultValue: {
      require: false,
    },
    disabled: {
      type: Boolean,
      require: false,
      default: false,
    },
    range: {
      type: Boolean,
      require: false,
      default: false,
    },
  },
};
</script>

<style lang="less">

</style>