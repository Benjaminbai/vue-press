
<template>
  <a-menu v-model="current" mode="horizontal">
    <slot></slot>
  </a-menu>
</template>
<script type="text/jsx">
import Vue from "vue";
import { Menu } from "ant-design-vue";
import "ant-design-vue/lib/menu/style/index.js";

Vue.use(Menu);
export default {
  name: "bMenu",
  data() {
    return {
      current: ["mail"],
    };
  },
};
</script>
<style lang="less">
// .ant-menu-horizontal {
//   height: 52px;
//   line-height: 51px;
//   background-color: #ffffff;
//   box-shadow: 0 6px 16px -15px rgba(0, 0, 0, 0.3);
//   text-align: left;
// }
// .ant-menu-horizontal > .ant-menu-item-selected > a {
//   color: @primary-color !important;
// }
// .ant-menu-horizontal > .ant-menu-item:hover,
// .ant-menu-horizontal > .ant-menu-submenu:hover,
// .ant-menu-horizontal > .ant-menu-item-active,
// .ant-menu-horizontal > .ant-menu-submenu-active,
// .ant-menu-horizontal > .ant-menu-item-open,
// .ant-menu-horizontal > .ant-menu-submenu-open {
//   color: #999999;
//   border-bottom: 0;
// }
// .ant-menu-horizontal {
//   .ant-menu-item-selected {
//     border: 0 !important;
//     color: @primary-color !important;
//     font-size: 20px !important;
//     font-weight: 500 !important;
//     position: relative !important;
//     &::after {
//       position: absolute !important;
//       bottom: 0 !important;
//       left: 50% !important;
//       transform: translateX(-50%) !important;
//       content: "" !important;
//       height: 2.44px !important;
//       width: 20px !important;
//       border-radius: 1px !important;
//       background-color: @primary-color !important;
//     }
//   }
// }
// .ant-menu-submenu-title:hover {
//   color: @primary-color;
//   border-bottom: 0;
// }
// .ant-menu-horizontal > .ant-menu-item,
// .ant-menu-horizontal > .ant-menu-submenu {
//   border-bottom: 0;
// }

// .ant-menu-horizontal > .ant-menu-submenu-selected {
//   border: 0 !important;
//   color: @primary-color !important;
//   font-size: 20px !important;
//   font-weight: 500 !important;
//   position: relative !important;
//   &::after {
//     position: absolute !important;
//     bottom: 0 !important;
//     left: 50% !important;
//     transform: translateX(-50%) !important;
//     content: "" !important;
//     height: 2.44px !important;
//     width: 20px !important;
//     border-radius: 1px !important;
//     background-color: @primary-color !important;
//   }
// }
</style>