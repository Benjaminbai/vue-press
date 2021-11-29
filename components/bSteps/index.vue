<template>
  <a-steps :current="current" :size="size" :direction="direction">
    <slot></slot>
  </a-steps>
</template>
<script>
import Vue from "vue";
import { Steps } from "ant-design-vue";
import "ant-design-vue/lib/steps/style/index.js";
Vue.use(Steps);

export default {
  name: "BSteps",
  props: {
    current: {
      type: Number,
      require: false,
      default: 0,
    },
    size: {
      type: String,
      require: false,
      default: 'default',
    },
    direction: {
      type: String,
      require: false,
      default: 'horizontal',
    },
  },
  methods: {},
};
</script>

<style lang="less">
</style>