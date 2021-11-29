<template>
  <div>
    <b-table :columns="columns" :dataSource="data">
      <span slot="customTitle"><a-icon type="smile-o" /> Name</span>
      <a slot="name" slot-scope="text">{{ text }}</a>
      <span slot="tags" slot-scope="tags">
        <span
          v-for="tag in tags"
          :key="tag"
          :color="
            tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'
          "
        >
          {{ tag.toUpperCase() }}
        </span>
      </span>
      <span slot="action" slot-scope="text, record">
        <a>Invite 一 {{ record.name }}</a>
      </span>
    </b-table>

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
        <td>checked</td>
        <td>指定当前是否选中</td>
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
        <td>改变时的回调</td>
        <td>(event) => void</td>
      </tr>
    </table>
  </div>
</template>

<script>
import BTable from "../../../components/bTable";
const columns = [
  {
    dataIndex: "name",
    key: "name",
    slots: { title: "customTitle" },
    scopedSlots: { customRender: "name" },
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    scopedSlots: { customRender: "tags" },
  },
  {
    title: "Action",
    key: "action",
    scopedSlots: { customRender: "action" },
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];
export default {
  components: { BTable },
  data() {
    return {
      content: `
        <b-table :columns="columns" :dataSource="data">
          <span slot="customTitle"><a-icon type="smile-o" /> Name</span>
          <a slot="name" slot-scope="text">{{ text }}</a>
          <span slot="tags" slot-scope="tags">
            <span
              v-for="tag in tags"
              :key="tag"
              :color="
                tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'
              "
            >
              {{ tag.toUpperCase() }}
            </span>
          </span>
          <span slot="action" slot-scope="text, record">
            <a>Invite 一 {{ record.name }}</a>
          </span>
        </b-table>
    `,
      columns,
      data,
    };
  },
  methods: {},
};
</script>

<style lang="less">
@import "../styles/index.less";
</style>