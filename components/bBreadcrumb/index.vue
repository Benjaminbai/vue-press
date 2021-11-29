<template>
  <a-breadcrumb>
    <slot></slot>
  </a-breadcrumb>
</template>

<script>
import Vue from "vue";
import { Breadcrumb } from "ant-design-vue";
import "ant-design-vue/lib/breadcrumb/style/index.js";
Vue.use(Breadcrumb);
export default {
  name: "BBreadcrumb",
};
</script>

<style lang="less">

</style>