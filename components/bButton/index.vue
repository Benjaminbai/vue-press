<template>
  <a-button :type="type" :size="size" :disabled="disabled" :ghost="ghost">
    <slot></slot>
  </a-button>
</template>

<script>
import Vue from "vue";
import { Button } from "ant-design-vue";
import "ant-design-vue/lib/button/style/index.js";
Vue.use(Button);

export default {
  name: "bButton",
  props: {
    size: {
      type: String,
      required: false,
      default: "default",
    },
    type: {
      type: String,
      required: false,
      default: "default",
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    ghost: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>
<style lang="less">
</style>