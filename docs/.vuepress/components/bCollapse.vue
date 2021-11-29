<template>
  <div>
    <b-collapse activeKey="1" expandIconPosition="right" :bordered="false">
      <a-collapse-panel
        key="1"
        header="This is panel header 1"
        :style="customStyle"
      >
        <p>This is panel content 1</p>
      </a-collapse-panel>
      <a-collapse-panel
        key="2"
        header="This is panel header 2"
        :style="customStyle"
      >
        <p>This is panel content 2</p>
      </a-collapse-panel>
      <a-collapse-panel key="3" header="This is panel header 3" disabled>
        <p>This is panel content 3</p>
      </a-collapse-panel>
    </b-collapse>

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
        <td>string[]|string</td>
        <td>——</td>
        <td>——</td>
      </tr>
      <tr>
        <td>bordered</td>
        <td>带边框风格的折叠面板</td>
        <td>boolean</td>
        <td>true / false</td>
        <td>true</td>
      </tr>
      <tr>
        <td>expandIconPosition</td>
        <td>设置图标位置</td>
        <td>string</td>
        <td>left / right</td>
        <td>left</td>
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
        <td>function(key)</td>
      </tr>
    </table>
  </div>
</template>

<script>
import BCollapse from "../../../components/bCollapse";

export default {
  components: { BCollapse },
  data() {
    return {
      content: `
        <b-collapse activeKey="1" expandIconPosition="right" :bordered="false">
          <a-collapse-panel
            key="1"
            header="This is panel header 1"
            :style="customStyle"
          >
            <p>This is panel content 1</p>
          </a-collapse-panel>
          <a-collapse-panel
            key="2"
            header="This is panel header 2"
            :style="customStyle"
          >
            <p>This is panel content 2</p>
          </a-collapse-panel>
          <a-collapse-panel key="3" header="This is panel header 3" disabled>
            <p>This is panel content 3</p>
          </a-collapse-panel>
        </b-collapse>
    `,
      customStyle: "background: #fff;",
    };
  },
  methods: {},
};
</script>

<style lang="less">
@import "../styles/index.less";
</style>