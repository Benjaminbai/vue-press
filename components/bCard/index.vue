<template>
  <a-card :size="size" :hoverable="hoverable" :bordered="bordered">
    <slot></slot>
  </a-card>
</template>
<script>
import Vue from "vue";
import { Card } from "ant-design-vue";
import "ant-design-vue/lib/card/style/index.js";

Vue.use(Card);
export default {
  name: "BCard",
  props: {
    size: {
      type: String,
      require: false,
      default: "default",
    },
    hoverable: {
      type: Boolean,
      require: false,
      default: false,
    },
    bordered: {
      type: Boolean,
      require: false,
      default: false,
    },
  },
};
</script>

<style lang="less">
.ant-card {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, .05);
}
</style>