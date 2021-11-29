<template>
  <div>
    <div style="margin: 20px 0">
      <b-alert message="warning"></b-alert>
    </div>
    <div style="margin: 20px 0">
      <b-alert type="success" message="success"></b-alert>
    </div>
    <div style="margin: 20px 0">
      <b-alert type="error" message="error"></b-alert>
    </div>
    <div style="margin: 20px 0">
      <b-alert type="info" message="info"></b-alert>
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
        <td>提示消息类型</td>
        <td>string</td>
        <td>default / warning / success / error / info</td>
        <td>default</td>
      </tr>
      <tr>
        <td>message</td>
        <td>消息内容</td>
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
        <td>close</td>
        <td>关闭时触发的回调函数</td>
        <td>(event) => void</td>
      </tr>
    </table>
  </div>
</template>

<script>
import BAlert from "../../../components/bAlert";
export default {
  components: { BAlert },
  data() {
    return {
      content: `
        <div style="margin: 20px 0">
            <b-alert message="warning"></b-alert>
        </div>

        <div style="margin: 20px 0">
            <b-alert type="success" message="success"></b-alert>
        </div>

        <div style="margin: 20px 0">
            <b-alert type="error" message="error"></b-alert>
        </div>

        <div style="margin: 20px 0">
            <b-alert type="info" message="info"></b-alert>
        </div>
    `,
    };
  },
  methods: {},
};
</script>

<style lang="less">
@import "../styles/index.less";
.ant-alert-icon {
  top: 9.5px;
}
.ant-alert-warning {
  background-color: @alert-warning-bg-color;
  .ant-alert-message {
    color: @warning-color;
  }
}
.ant-alert-success {
  background-color: @alert-success-bg-color;
  .ant-alert-message {
    color: @success-color;
  }
}
.ant-alert-error {
  background-color: @alert-error-bg-color;
  .ant-alert-message {
    color: @error-color;
  }
}
.ant-alert-info {
  background-color: @alert-info-bg-color;
  border: 1px solid @alert-info-border-color;
  .anticon-info-circle {
    color: @info-color;
  }
  .ant-alert-message {
    color: @info-color;
  }
}
</style>