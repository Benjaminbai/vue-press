<template>
  <div>
    <b-tag>标签一</b-tag>
    <b-tag closable>禁用标签</b-tag>

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
        <td>closable</td>
        <td>标签是否可以关闭</td>
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
        <td>close</td>
        <td>关闭时的回调</td>
        <td>(event) => void</td>
      </tr>
    </table>
  </div>
</template>

<script>
import BTag from "../../../components/bTag";
export default {
  components: { BTag },
  data() {
    return {
      content: `
        <b-tag>标签一</b-tag>

        <b-tag closable>禁用标签</b-tag>
    `,
    };
  },
  methods: {},
};
</script>

<style lang="less">
@import "../styles/index.less";
.ant-tag {
  border: 1px solid @primary-color;
  color: @primary-color;
  border-radius: 15px;
  background: transparent;

  .anticon-close {
    color: @primary-color;
  }
}
</style>