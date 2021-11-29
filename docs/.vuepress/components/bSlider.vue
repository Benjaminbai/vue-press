<template>
  <div>
    <b-slider :defaultValue="30"></b-slider>
    <b-slider :defaultValue="[30, 50]" range></b-slider>
    <b-slider :defaultValue="30" disabled></b-slider>

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
        <td>defaultValue</td>
        <td>
          设置初始取值。当 range 为 false 时，使用 number，否则用 [number,
          number]
        </td>
        <td>number | number[]</td>
        <td>——</td>
        <td>——</td>
      </tr>
      <tr>
        <td>range</td>
        <td>双滑块模式</td>
        <td>boolean</td>
        <td>true / false</td>
        <td>false</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td>值为 true 时，滑块为禁用状态</td>
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
        <td>滑块改变时的回调</td>
        <td>(event) => void</td>
      </tr>
    </table>
  </div>
</template>

<script>
import BSlider from "../../../components/bSlider";
export default {
  components: { BSlider },
  data() {
    return {
      content: `
        <b-slider :defaultValue="30"></b-slider>

        <b-slider :defaultValue="[30, 50]" range></b-slider>

        <b-slider :defaultValue="30" disabled></b-slider>
    `,
    };
  },
  methods: {},
};
</script>

<style lang="less">
@import "../styles/index.less";
.ant-slider-track {
  background-color: @primary-color;
}
.ant-slider-handle {
  background-color: @primary-color;
  border: solid 2px @primary-color;
}
.ant-slider-disabled .ant-slider-handle,
.ant-slider-disabled .ant-slider-dot {
  background-color: #ccc;
  border-color: #ccc !important;
}
</style>