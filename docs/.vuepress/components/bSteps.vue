<template>
  <div>
    <div style="margin: 20px 0">
      <b-steps :current="1">
        <a-step>
          <template slot="title"> Finished </template>
          <span slot="description">This is a description.</span>
        </a-step>
        <a-step
          title="In Progress"
          sub-title="Left 00:00:08"
          description="This is a description."
        />
        <a-step title="Waiting" description="This is a description." />
      </b-steps>
    </div>
    <div style="margin: 20px 0">
      <a-steps :current="1" size="small">
        <a-step title="Finished" />
        <a-step title="In Progress" />
        <a-step title="Waiting" />
      </a-steps>
    </div>
    <div style="margin: 20px 0">
      <a-steps :current="1" direction="vertical">
        <a-step title="Step 1" description="This is a description." />
        <a-step title="Step 2" description="This is a description." />
        <a-step title="Step 3" description="This is a description." />
      </a-steps>
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
        <td>size</td>
        <td>指定大小</td>
        <td>string</td>
        <td>default / small</td>
        <td>default</td>
      </tr>
      <tr>
        <td>direction</td>
        <td>指定步骤条方向</td>
        <td>string</td>
        <td>horizontal / vertical</td>
        <td>horizontal</td>
      </tr>
      <tr>
        <td>current</td>
        <td>指定当前步骤，从 0 开始记数</td>
        <td>string</td>
        <td>——</td>
        <td>0</td>
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
        <td>点击切换步骤时触发</td>
        <td>(event) => void</td>
      </tr>
    </table>
  </div>
</template>

<script>
import BSteps from "../../../components/bSteps";
export default {
  components: { BSteps },
  data() {
    return {
      content: `
        <div style="margin: 20px 0">
            <b-steps :current="1">
                <a-step>
                    <template slot="title"> Finished </template>
                    <span slot="description">This is a description.</span>
                </a-step>
                <a-step
                title="In Progress"
                sub-title="Left 00:00:08"
                description="This is a description."
                />
                <a-step title="Waiting" description="This is a description." />
            </b-steps>
        </div>

        <div style="margin: 20px 0">
            <a-steps :current="1" size="small">
                <a-step title="Finished" />
                <a-step title="In Progress" />
                <a-step title="Waiting" />
            </a-steps>
        </div>

        <div style="margin: 20px 0">
            <a-steps :current="1" direction="vertical">
                <a-step title="Step 1" description="This is a description." />
                <a-step title="Step 2" description="This is a description." />
                <a-step title="Step 3" description="This is a description." />
            </a-steps>
        </div>
    `,
    };
  },
  methods: {},
};
</script>

<style lang="less">
@import "../styles/index.less";
.ant-steps-item-finish .ant-steps-item-icon {
  border-color: @primary-color;
}
.ant-steps-item-finish .ant-steps-item-icon > .ant-steps-icon {
  color: @primary-color;
}
.ant-steps-item-finish
  > .ant-steps-item-container
  > .ant-steps-item-content
  > .ant-steps-item-title::after {
  background-color: @primary-color;
}
.ant-steps-item-process .ant-steps-item-icon {
  background: @primary-color;
  border-color: @primary-color;
}
.ant-steps-item-finish
  > .ant-steps-item-container
  > .ant-steps-item-tail::after {
  background-color: @primary-color;
}
</style>