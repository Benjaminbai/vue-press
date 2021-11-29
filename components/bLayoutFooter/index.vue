<template>
  <a-layout-footer>
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
</template>

<script>
import Vue from "vue";
import { Layout } from "ant-design-vue";
import "ant-design-vue/lib/layout/style/index.js";
Vue.use(Layout);

export default {
  name: "BLayoutFooter",
};
</script>
<style lang="less">
.ant-layout-footer {
  padding: 0 80px !important;
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