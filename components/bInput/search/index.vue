<template>
  <a-input-search :size="size" :placeholder="placeholder" @search="onSearch" />
</template>

<script>
import Vue from "vue";
import { Input } from "ant-design-vue";
import "ant-design-vue/lib/input/style/index.js";
Vue.use(Input);

export default {
  name: "BInputSearch",
  props: {
    size: {
      type: String,
      require: false,
      default: "default",
    },
    placeholder: {
      type: String,
      require: false,
      default: "placeholder",
    },
  },
  methods: {
    onSearch(val) {
      console.log(1111, val);
      this.$emit("search");
    },
  },
};
</script>

<style lang="less">
</style>