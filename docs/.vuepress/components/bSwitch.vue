<template>
  <div>
    <b-switch :checked="true" />
    <b-switch disabled :checked="false" />
    <b-switch size="small" :checked="true" />

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
        <td>是否禁用</td>
        <td>boolean</td>
        <td>true / false</td>
        <td>false</td>
      </tr>
      <tr>
        <td>size</td>
        <td>开关大小</td>
        <td>string</td>
        <td>default / small</td>
        <td>default</td>
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
        <td>改变时的回调</td>
        <td>(event) => void</td>
      </tr>
    </table>
  </div>
</template>

<script>
import BSwitch from "../../../components/bSwitch";
export default {
  components: { BSwitch },
  data() {
    return {
      content: `
        <b-switch :checked="true" />

        <b-switch disabled :checked="false" />

        <b-switch size="small" :checked="true" />
    `,
    };
  },
  methods: {},
};
</script>

<style lang="less">
@import "../styles/index.less";
.ant-switch-checked {
  background-color: @primary-color;
}
</style>