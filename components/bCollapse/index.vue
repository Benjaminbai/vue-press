<template>
  <a-collapse
    :activKey="activKey"
    :bordered="bordered"
    :expandIconPosition="expandIconPosition"
  >
    <template #expandIcon="props">
      <a-icon type="caret-right" :rotate="props.isActive ? 90 : 0" />
    </template>
    <slot></slot>
  </a-collapse>
</template>
<script>
import Vue from "vue";
import { Collapse, Icon } from "ant-design-vue";
import "ant-design-vue/lib/icon/style/index.js";
import "ant-design-vue/lib/collapse/style/index.js";
Vue.use(Collapse);
Vue.use(Icon);

export default {
  name: "BCollapse",
  props: {
    activKey: {
      require: false,
    },
    bordered: {
      type: Boolean,
      require: false,
      default: true,
    },
    expandIconPosition: {
      type: String,
      require: false,
      default: "left",
    },
    expandIcon: {
      require: false,
    },
  },
  methods: {},
};
</script>

<style lang="less">
</style>