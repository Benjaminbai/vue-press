<template>
  <div>
    <b-radio>选项一</b-radio>
    <b-radio disabled>禁用选项</b-radio>

    <h3 style="margin-top: 20px">示例代码</h3>
    <pre>
      <code>{{ content }}</code>
    </pre>

    <h3>支持属性</h3>
    <table width="100%">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>

      <tr>
        <td>disabled</td>
        <td>禁选所有子单选器</td>
        <td>boolean</td>
        <td>true / false</td>
        <td>false</td>
      </tr>
    </table>

    <h3>支持事件</h3>
    <table width="100%">
      <tr>
        <th>事件名称</th>
        <th>说明</th>
        <th>回调参数</th>
      </tr>
      <tr>
        <td>change</td>
        <td>单选框改变时的回调</td>
        <td>(event) => void</td>
      </tr>
    </table>
  </div>
</template>

<script>
import BRadio from "../../../components/bRadio";
export default {
  components: { BRadio },
  data() {
    return {
      content: `
        <b-radio>选项一</b-radio>

        <b-radio disabled>禁用选项</b-radio>
    `,
    };
  },
  methods: {},
};
</script>

<style lang="less">
@import "../styles/index.less";
.ant-radio-checked .ant-radio-inner {
  border-color: @primary-color;
}
.ant-radio-inner::after {
  background-color: @primary-color;
}
.ant-radio-wrapper:hover .ant-radio,
.ant-radio:hover .ant-radio-inner,
.ant-radio-input:focus + .ant-radio-inner {
  border-color: @primary-color;
}
</style>