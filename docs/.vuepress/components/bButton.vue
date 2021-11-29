<template>
  <div>
    <b-button size="large">large</b-button>
    <b-button>normal</b-button>
    <b-button size="small">small</b-button>
    <b-button type="primary">primary</b-button>
    <b-button>Default</b-button>
    <b-button type="dashed">dashed</b-button>
    <b-button type="danger">danger</b-button>
    <b-button type="link">link</b-button>
    <b-button type="primary" disabled>disabled</b-button>
    <div style="background-color: #f6f8fa">
      <b-button type="primary" ghost>ghost</b-button>
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
        <td>type</td>
        <td>按钮类型</td>
        <td>string</td>
        <td>default / primary / dashed / danger / link</td>
        <td>default</td>
      </tr>
      <tr>
        <td>size</td>
        <td>按钮大小</td>
        <td>string</td>
        <td>default / large / small</td>
        <td>default</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td>是否禁用</td>
        <td>boolean</td>
        <td>true / false</td>
        <td>false</td>
      </tr>
      <tr>
        <td>ghost</td>
        <td>幽灵模式</td>
        <td>boolean</td>
        <td>true / false</td>
        <td>true</td>
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
        <td>click</td>
        <td>点击按钮时的回调</td>
        <td>(event) => void</td>
      </tr>
    </table>
  </div>
</template>

<script>
import BButton from "../../../components/bButton";
export default {
  components: { BButton },
  data() {
    return {
      content: `
        <b-button size="large">large</b-button>

        <b-button>normal</b-button>

        <b-button size="small">small</b-button>

        <b-button type="primary">primary</b-button>

        <b-button>Default</b-button>

        <b-button type="dashed">dashed</b-button>

        <b-button type="danger">danger</b-button>

        <b-button type="link">link</b-button>

        <b-button type="primary" disabled>disabled</b-button>

        <div style="background-color: #ddd">
          <b-button type="primary" ghost>ghost</b-button>
        </div>
    `,
    };
  },
  methods: {},
};
</script>

<style lang="less">
@import "../styles/index.less";
.ant-btn {
  margin: 10px;
}
.ant-btn-primary {
  background-color: @primary-color;
  border-color: @border-color-base;
}
.ant-btn-danger {
  background-color: @btn-danger-bg;
  border-color: @btn-danger-bg;
}
.ant-btn-link {
  color: @primary-color;
}
.ant-btn-default,
.ant-btn-dashed,
.ant-btn-background-ghost {
  color: @primary-color !important;
  border-color: @primary-color !important;
}
</style>