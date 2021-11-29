<template>
  <a-checkbox :checked="check" @change="onChangeHandle" :disabled="disabled">
    <slot></slot>
  </a-checkbox>
</template>
<script>
import Vue from "vue";
import { Checkbox } from "ant-design-vue";
import "ant-design-vue/lib/checkbox/style/index.js";

Vue.use(Checkbox);
export default {
  name: "BCheckbox",
  props: {
    checked: {
      type: Boolean,
      require: false,
      default: false,
    },
    disabled: {
      type: Boolean,
      require: false,
      default: false,
    },
  },
  data() {
    return {
      check: this.checked,
    };
  },
  methods: {
    onChangeHandle() {
      this.check = !this.check;
      this.$emit("change", this.check);
    },
  },
};
</script>

<style lang="less">
</style>