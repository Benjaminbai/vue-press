<template>
  <div>
    <b-breadcrumb>
      <a-breadcrumb-item>Home</a-breadcrumb-item>
      <a-breadcrumb-item><a href="">Application Center</a></a-breadcrumb-item>
      <a-breadcrumb-item><a href="">Application List</a></a-breadcrumb-item>
      <a-breadcrumb-item>An Application</a-breadcrumb-item>
    </b-breadcrumb>

    <h3 style="margin-top: 20px">示例代码</h3>
    <pre>
      <code>{{ content }}</code>
    </pre>

    <h3>Breadcrumb.Item 支持属性</h3>
    <table width="100%">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>

      <tr>
        <td>href</td>
        <td>链接的目的地</td>
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
        <td>click</td>
        <td>单击事件</td>
        <td>(e:MouseEvent)=>void</td>
      </tr>
    </table>
  </div>
</template>

<script>
import BBreadcrumb from "../../../components/bBreadcrumb";
export default {
  components: { BBreadcrumb },
  data() {
    return {
      content: `
        <b-breadcrumb>
            <a-breadcrumb-item>Home</a-breadcrumb-item>
            <a-breadcrumb-item><a href="">Application Center</a></a-breadcrumb-item>
            <a-breadcrumb-item><a href="">Application List</a></a-breadcrumb-item>
            <a-breadcrumb-item>An Application</a-breadcrumb-item>
        </b-breadcrumb>
    `,
    };
  },
  methods: {},
};
</script>

<style lang="less">
@import "../styles/index.less";
.ant-breadcrumb > span:last-child {
  color: @primary-color;
  font-size: 16px;
  line-height: 2.5;
}
</style>