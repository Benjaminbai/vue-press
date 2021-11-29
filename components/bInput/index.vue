<template>
  <a-input
    v-model="values"
    type="search"
    :size="size"
    :placeholder="placeholder"
    @change="inputChange"
  />
</template>

<script>
import Vue from "vue";
import { Input } from "ant-design-vue";
import "ant-design-vue/lib/input/style/index.js";
Vue.use(Input);

export default {
  name: "BInput",
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
    value: {
      type: String,
      require: false,
      default: "",
    },
  },
  data() {
    return {
      values: this.value,
    };
  },
  methods: {
    inputChange() {
      this.$emit("change", this.values);
    },
  },
};
</script>

<style lang="less">
</style>