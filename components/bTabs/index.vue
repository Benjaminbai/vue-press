<template>
  <a-tabs :activeKey="tabs" @change="callback">
    <slot></slot>
  </a-tabs>
</template>

<script>
import Vue from "vue";
import { Tabs } from "ant-design-vue";
import "ant-design-vue/lib/tabs/style/index.js";
Vue.use(Tabs);

export default {
  name: "BTabs",
  props: {
    activeKey: {
      require: false,
    },
  },
  data() {
    return {
      tabs: this.activeKey,
    };
  },
  methods: {
    callback(val) {
      this.tabs = val;
      this.$emit("change", this.tabs);
    },
  },
};
</script>

<style lang="less">
</style>