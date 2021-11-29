<template>
  <div>
    <div style="margin-top: 20px">
      <b-select size="large" placeholder="large">
        <a-select-option
          v-for="i in 25"
          :key="(i + 9).toString(36) + i"
          :value="i"
        >
          {{ (i + 9).toString(36) + i }}
        </a-select-option>
      </b-select>
    </div>
    <div style="margin-top: 20px">
      <b-select placeholder="default" disabled>
        <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
          {{ (i + 9).toString(36) + i }}
        </a-select-option>
      </b-select>
    </div>
    <div style="margin-top: 20px">
      <b-select size="small" placeholder="small">
        <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
          {{ (i + 9).toString(36) + i }}
        </a-select-option>
      </b-select>
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
      <tr>
        <td>disabled</td>
        <td>是否禁用</td>
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
        <td>输入框内容变化时的回调</td>
        <td>function(e)</td>
      </tr>
    </table>
  </div>
</template>

<script>
import BSelect from "../../../components/bSelect";
export default {
  components: { BSelect },
  data() {
    return {
      content: `
        <div style="margin-top: 20px">
            <b-select size="large" disabled placeholder="large">
                <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
                {{ (i + 9).toString(36) + i }}
                </a-select-option>
            </b-select>
        </div>
        <div style="margin-top: 20px">
            <b-select placeholder="default">
                <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
                {{ (i + 9).toString(36) + i }}
                </a-select-option>
            </b-select>
        </div>
        <div style="margin-top: 20px">
            <b-select size="small" placeholder="small">
                <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
                {{ (i + 9).toString(36) + i }}
                </a-select-option>
            </b-select>
        </div>
    `,
    };
  },
  methods: {},
};
</script>

<style lang="less">
@import "../styles/index.less";
.ant-select-selection:hover {
  border-color: @primary-color;
}
// .ant-select-dropdown-menu-item-active:not(.ant-select-dropdown-menu-item-disabled) {
//   background-color: @primary-color;
//   color: #fff;
// }
</style>