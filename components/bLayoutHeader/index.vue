<template>
  <a-layout-header>
    <slot></slot>
  </a-layout-header>
</template>

<script>
import Vue from "vue";
import { Layout } from "ant-design-vue";
import "ant-design-vue/lib/layout/style/index.js";
Vue.use(Layout);

export default {
  name: "BLayoutHeader",
};
</script>
<style lang="less">
.ant-layout-header {
  padding: 0 80px;
  height: 64px;
  width: 100%;
  background: linear-gradient(135deg, #005587 0%, #009cd9 91.64%, #00a3e0 100%);
  color: #fff;
}
</style>