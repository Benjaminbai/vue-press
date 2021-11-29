<template>
  <a-select
    class="b-select"
    :size="size"
    :disabled="disabled"
    :placeholder="placeholder"
  >
    <slot></slot>
  </a-select>
</template>
<script>
import Vue from "vue";
import { Select } from "ant-design-vue";
import "ant-design-vue/lib/select/style/index.js";

Vue.use(Select);

export default {
  name: "BSelect",
  props: {
    size: {
      type: String,
      require: false,
      default: "default",
    },
    disabled: {
      type: Boolean,
      require: false,
      default: false,
    },
    placeholder: {
      type: String,
      require: false,
    },
  },
  // render: function (h) {
  //   const on = {
  //     ...this.$listeners,
  //   };
  //   const props = {
  //     ...this.$attrs,
  //     ...this.$props,
  //     ...{
  //       size: this.size,
  //       disabled: this.disabled,
  //       placeholder: this.placeholder,
  //     },
  //   };
  //   const slots = h(
  //     "a-select-option",
  //     {
  //       attrs: {
  //         value: "",
  //       },
  //     },
  //     this.$slots.default
  //   );
  //   const select = (
  //     <a-select
  //       class="b-select"
  //       props={props}
  //       scopedSlots={this.$scopedSlots}
  //       on={on}
  //     >
  //       {slots}
  //     </a-select>
  //   );
  //   return <div>{select}</div>;
  // },
};
</script>

<style lang="less">
.b-select {
  width: 100%;
}
</style>