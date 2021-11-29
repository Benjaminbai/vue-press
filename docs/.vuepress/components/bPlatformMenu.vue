<template>
  <div>
    <div style="width: 200px">
      <b-platform-menu layoutMode="sidemenu" :menu="menuList"></b-platform-menu>
    </div>
    <b-platform-menu :menu="menuList"></b-platform-menu>

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
        <td>layoutMode</td>
        <td>展示模式</td>
        <td>string</td>
        <td>sidemenu | topmenu</td>
        <td>topmenu</td>
      </tr>
      <tr>
        <td>siderOpen</td>
        <td>侧边菜单模式下生效</td>
        <td>boolean</td>
        <td>true / false</td>
        <td>true</td>
      </tr>
      <tr>
        <td>menu</td>
        <td>菜单数据</td>
        <td>object[]</td>
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
        <td>点击时的回调</td>
        <td>function(e)</td>
      </tr>
    </table>
  </div>
</template>

<script>
import BPlatformMenu from "../../../components/bPlatformMenu";
const menuList = [
  {
    icon: "desktop",
    label: "Application Portal",
    active: true,
  },
  {
    icon: "pull-request",
    label: "Workflow Portal",
    active: false,
  },
  {
    icon: "ordered-list",
    label: "RuleEngine Portal",
    active: false,
  },
  {
    icon: "bulb",
    label: "Admin Portal",
    active: false,
  },
];
export default {
  components: { BPlatformMenu },
  data() {
    return {
      menuList,
      content: `
        <div style="width: 200px">
          <b-platform-menu layoutMode="sidemenu"></b-platform-menu>
        </div>
        <b-platform-menu></b-platform-menu>
    `,
    };
  },
  methods: {},
};
</script>

<style lang="less">
</style>