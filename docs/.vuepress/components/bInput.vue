<template>
  <div>
    <div style="margin: 10px 0">
      <b-input size="large" placeholder="large"></b-input>
    </div>
    <div style="margin: 10px 0">
      <b-input placeholder="default"></b-input>
    </div>
    <div style="margin: 10px 0">
      <b-input size="small" placeholder="small"></b-input>
    </div>
    <div style="margin: 10px 0">
      <b-input-search placeholder="input search text" />
    </div>

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
        <td>value(v-model)</td>
        <td>输入框内容</td>
        <td>string</td>
        <td>——</td>
        <td>——</td>
      </tr>
      <tr>
        <td>size</td>
        <td>控件大小</td>
        <td>string</td>
        <td>large / default / small</td>
        <td>default</td>
      </tr>
      <tr>
        <td>placeholder</td>
        <td>占位符</td>
        <td>string</td>
        <td>——</td>
        <td>——</td>
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
        <td>输入框内容变化时的回调</td>
        <td>function(e)</td>
      </tr>
    </table>
  </div>
</template>

<script>
import BInput from "../../../components/bInput";
import BInputSearch from "../../../components/bInput/search";
export default {
  components: { BInput, BInputSearch },
  data() {
    return {
      content: `
        <div style="margin: 10px 0">
            <b-input size="large" placeholder="large"></b-input>
        </div>

        <div style="margin: 10px 0">
            <b-input placeholder="default"></b-input>
        </div>

        <div style="margin: 10px 0">
            <b-input size="small" placeholder="small"></b-input>
        </div>

        <div style="margin: 10px 0">
            <b-input-search placeholder="input search text" />
        </div>
    `,
    };
  },
  methods: {},
};
</script>

<style lang="less">
@import "../styles/index.less";
.ant-input:hover {
  border-color: @primary-color;
}
.ant-input-affix-wrapper:hover .ant-input:not(.ant-input-disabled) {
  border-color: @primary-color;
}
</style>