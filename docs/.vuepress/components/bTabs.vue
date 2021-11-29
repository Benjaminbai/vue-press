<template>
  <div>
    <b-tabs activeKey="1">
      <a-tab-pane key="1" keys="1" tab="Tab 1">
        Content of Tab Pane 1
      </a-tab-pane>
      <a-tab-pane key="2" keys="2" tab="Tab 2">
        Content of Tab Pane 2
      </a-tab-pane>
      <a-tab-pane key="3" keys="3" tab="Tab 3">
        Content of Tab Pane 3
      </a-tab-pane>
    </b-tabs>

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
        <td>activeKey</td>
        <td>当前激活 tab 面板的 key</td>
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
        <td>切换面板的回调</td>
        <td>Function(activeKey) {}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import BTabs from "../../../components/bTabs";
export default {
  components: { BTabs },
  data() {
    return {
      content: `
        <b-tabs activeKey="1">
            <a-tab-pane key="1" keys="1" tab="Tab 1">
                Content of Tab Pane 1
            </a-tab-pane>
            <a-tab-pane key="2" keys="2" tab="Tab 2">
                Content of Tab Pane 2
            </a-tab-pane>
            <a-tab-pane key="3" keys="3" tab="Tab 3">
                Content of Tab Pane 3
            </a-tab-pane>
        </b-tabs>
    `,
    };
  },
  methods: {},
};
</script>

<style lang="less">
@import "../styles/index.less";
.ant-tabs-ink-bar {
  background-color: @primary-color;
}
.ant-tabs-nav .ant-tabs-tab-active {
  color: @primary-color;
}
</style>