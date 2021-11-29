<template>
  <a-layout-content>
    <slot></slot>
  </a-layout-content>
</template>

<script>
import Vue from "vue";
import { Layout } from "ant-design-vue";
import "ant-design-vue/lib/layout/style/index.js";
Vue.use(Layout);

export default {
  name: "BLayoutContent",
};
</script>
<style lang="less">
.ant-layout-content {
  padding: 0px 80px !important;
  background-color: #fff;
  min-height: calc(100vh - 116px);
}
</style>