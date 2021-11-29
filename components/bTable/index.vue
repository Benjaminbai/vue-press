<script>
import Vue from "vue";
import { Table, Icon } from "ant-design-vue";
import "ant-design-vue/lib/table/style/index.js";
import "ant-design-vue/lib/icon/style/index.js";
Vue.use(Table);
Vue.use(Icon);

export default {
  name: "BTable",
  props: {
    columns: {
      type: Array,
      require: false,
      default: {},
    },
    dataSource: {
      type: Array,
      require: false,
      default: [],
    },
  },
  render() {
    const on = {
      ...this.$listeners,
    };
    const props = {
      ...this.$attrs,
      ...this.$props,
      ...{
        dataSource: this.dataSource,
        columns: this.columns,
      },
    };
    const slots = Object.keys(this.$slots).map((slot) => {
      return <template slot={slot}>{this.$slots[slot]}</template>;
    });
    const table = (
      <a-table bordered props={props} scopedSlots={this.$scopedSlots} on={on}>
        {slots}
      </a-table>
    );
    return <div>{table}</div>;
  },
};
</script>

<style lang="less">
.ant-table table {
  border-collapse: collapse;
}
</style>