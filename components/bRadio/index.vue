<template>
  <a-radio :disabled="disabled">
    <slot></slot>
  </a-radio>
</template>

<script>
import Vue from "vue";
import { Radio } from "ant-design-vue";
import "ant-design-vue/lib/radio/style/index.js";
Vue.use(Radio);

export default {
  name: "bRadio",
  props: {
    disabled: {
      type: Boolean,
      require: false,
      default: false,
    },
  },
};
</script>
<style lang="less">
</style>