<template>
  <a-layout id="components-layout-demo-top" class="layout">
    <a-layout-header> </a-layout-header>
    <a-layout-content> </a-layout-content>
    <a-layout-footer style="text-align: center">
      <div>
        <span>Support</span>
        <span>Help Center</span>
        <span>Privacy</span>
        <span>Terms of Service</span>
      </div>
      <div>
        <span>Copyright © 2012-2021 IQVIA</span>
      </div>
    </a-layout-footer>
  </a-layout>
</template>

<script>
import Vue from "vue";
import { Layout } from "ant-design-vue";
import "ant-design-vue/lib/layout/style/index.js";
Vue.use(Layout);

export default {
  name: "BLayout",
};
</script>
<style lang="less">
.ant-layout-header {
  height: 64px;
  width: 100%;
  background: linear-gradient(135deg, #005587 0%, #009cd9 91.64%, #00a3e0 100%);
}
.ant-layout-content {
  padding: 64px 152px 0 152px !important;
  background-color: #fff;
  min-height: calc(100vh - 64px - 85px);
}
.ant-layout-footer {
  padding: 0 152px !important;
  height: 85px;
  border-top: 1px solid #dee5ef;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    margin-right: 31px;
    color: #67758d;
    font-size: 16px;
  }
}
</style>