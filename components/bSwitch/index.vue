<template>
  <a-switch
    v-model="check"
    @change="onChange"
    :disabled="disabled"
    :size="size"
  />
</template>
<script>
import Vue from "vue";
import { Switch } from "ant-design-vue";
import "ant-design-vue/lib/switch/style/index.js";
Vue.use(Switch);

export default {
  name: "BSwitch",
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
    size: {
      type: String,
      require: false,
      default: "default",
    },
  },
  data() {
    return {
      check: this.checked,
    };
  },
  methods: {
    onChange() {
      this.$emit("change", this.check);
    },
  },
};
</script>

<style lang="less">
</style>