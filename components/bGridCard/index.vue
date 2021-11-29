<template>
  <a-card class="b-grid-card">
    <div class="b-icon-box" v-if="hasChildren">
      <a-icon class="b-icon" type="more" />
    </div>

    <div class="shortcut-box">
      <a-icon class="deep" :type="iconType" />
      <a-icon class="shallow" :type="iconType" />
    </div>
    <p class="grid-title">{{ bTitle }}</p>
    <span class="grid-desc">{{ desc }}</span>
  </a-card>
</template>

<script>
import Vue from "vue";
import { Card, Icon } from "ant-design-vue";
import "ant-design-vue/lib/card/style/index.js";
import "ant-design-vue/lib/icon/style/index.js";
Vue.use(Card);
Vue.use(Icon);
export default {
  name: "BGridCard",
  props: {
    bTitle: {
      type: String,
      required: false,
      default: "this is title",
    },
    desc: {
      type: String,
      required: false,
      default: "this is desc",
    },
    iconType: {
      type: String,
      required: false,
      default: "this is desc",
    },
    hasChildren: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>
<style lang="less">
// .b-grid-card {
//   box-sizing: border-box;
//   height: 160px;
//   width: 256px;
//   border: 1px solid #eaf0f7;
//   border-radius: 4px;
//   background-color: #ffffff;
//   box-shadow: 0 5px 10px -10px rgba(0, 0, 0, 0.2);
//   position: relative;
//   .ant-card-body {
//     padding: 16px;
//     text-align: left;
//   }

//   .b-icon-box {
//     font-size: 24px;
//     position: absolute;
//     right: 16px;
//     top: 16px;
//   }

//   .shortcut-box {
//     font-size: 41px;
//     color: @primary-color;
//     position: relative;
//     height: 52px;
//     .deep {
//       opacity: 1;
//       position: absolute;
//       left: 7px;
//       top: 4px;
//     }
//     .shallow {
//       opacity: 0.3;
//       position: absolute;
//       left: 16px;
//       top: 12px;
//     }
//   }

//   .grid-title {
//     color: #022047;
//     font-size: 18px;
//     letter-spacing: 0;
//     line-height: 28px;
//     margin-top: 20px;
//     margin-bottom: 8px;
//   }
//   .grid-desc {
//     color: #999999;
//     font-size: 12px;
//     letter-spacing: 0;
//     line-height: 17px;
//   }
// }
</style>