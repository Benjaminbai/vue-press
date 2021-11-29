<template>
  <h2 class="b-title">
    {{ title }}
    <slot></slot>
  </h2>
</template>

<script>
export default {
  name: "BTitle",
  props: {
    title: {
      type: String,
      require: false,
      default: "this is title",
    },
  },
};
</script>
<style lang="less">
.b-title {
  padding: 0;
  color: #022047;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 0;
  border-bottom: 1px solid #dddddd;
  text-align: left;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
}
</style>