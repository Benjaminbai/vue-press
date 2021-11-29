<template>
  <div>
    <b-checkbox> 选项一 </b-checkbox>
    <b-checkbox disabled> 禁用选项 </b-checkbox>

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
        <td>checked</td>
        <td>指定当前是否选中</td>
        <td>boolean</td>
        <td>true / false</td>
        <td>false</td>
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
        <td>点击复选框时的回调</td>
        <td>(event) => void</td>
      </tr>
    </table>
  </div>
</template>

<script>
import BCheckbox from "../../../components/bCheckbox";
export default {
  components: { BCheckbox },
  data() {
    return {
      content: `
        <b-checkbox> 选项一 </b-checkbox>

        <b-checkbox disabled> 禁用选项 </b-checkbox>
    `,
    };
  },
  methods: {},
};
</script>

<style lang="less">
@import "../styles/index.less";
.ant-checkbox-checked::after {
  border: 1px solid @primary-color;
}
.ant-checkbox-wrapper:hover .ant-checkbox-inner,
.ant-checkbox:hover .ant-checkbox-inner,
.ant-checkbox-input:focus + .ant-checkbox-inner {
  border: 1px solid @primary-color;
}
.ant-checkbox-checked .ant-checkbox-inner {
  background: @primary-color;
}
</style>