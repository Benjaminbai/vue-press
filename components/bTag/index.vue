<template>
  <a-tag :closable="closable" @close="onClose">
    <slot></slot>
  </a-tag>
</template>
<script>
import Vue from "vue";
import { Tag } from "ant-design-vue";
import "ant-design-vue/lib/tag/style/index.js";
Vue.use(Tag);

export default {
  name: "BTag",
  props: {
    closable: {
      type: Boolean,
      require: false,
      default: false,
    },
  },
  methods: {
    onClose() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="less">

</style>