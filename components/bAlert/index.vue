<template>
  <a-alert
    :message="message"
    :type="type"
    :closable="closable"
    :showIcon="showIcon"
    @close="onClose"
  >
    <template slot="icon">
      <a-icon type="warning" theme="filled" v-if="type === 'warning'" />
      <a-icon type="check-circle" theme="filled" v-if="type === 'success'" />
      <a-icon
        type="exclamation-circle"
        theme="filled"
        v-if="type === 'error'"
      />
      <a-icon type="info-circle" theme="filled" v-if="type === 'info'" />
    </template>
  </a-alert>
</template>
<script>
import Vue from "vue";
import { Alert, Icon } from "ant-design-vue";
import "ant-design-vue/lib/alert/style/index.js";
import "ant-design-vue/lib/icon/style/index.js";

Vue.use(Alert);
Vue.use(Icon);
export default {
  name: "BAlert",
  props: {
    message: {
      type: String,
      require: false,
      default:
        "Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text",
    },
    type: {
      type: String,
      require: false,
      default: "warning",
    },
    closable: {
      type: Boolean,
      require: false,
      default: true,
    },
    showIcon: {
      type: Boolean,
      require: false,
      default: true,
    },
  },
  methods: {
    onClose() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="less">

</style>