<template>
  <div>
    <b-card style="width: 300px" hoverable>
      <p>this is content......</p>
    </b-card>

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
        <td>hoverable</td>
        <td>鼠标悬浮高亮</td>
        <td>boolean</td>
        <td>true / false</td>
        <td>false</td>
      </tr>
    </table>
  </div>
</template>

<script>
import BCard from "../../../components/bCard";
export default {
  components: { BCard },
  data() {
    return {
      content: `
        <b-card style="width: 300px" hoverable>
            <p>this is content......</p>
        </b-card>
    `,
    };
  },
  methods: {},
};
</script>

<style lang="less">
</style>