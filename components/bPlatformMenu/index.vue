<template>
  <div>
    <div
      :class="['platform-menu-sidemenu', siderOpen ? 'open' : 'close']"
      v-if="layoutMode === 'sidemenu'"
    >
      <div
        :class="['menu-item', item.active ? 'active' : '']"
        v-for="(item, i) in menu"
        :key="i"
        @click="clickHandle(item)"
      >
        <div class="icon-box">
          <a-icon class="icon" :type="item.icon" />
        </div>
        <p v-if="siderOpen" class="label">{{ item.label }}</p>
      </div>

      <div class="tongji-wrapper">
        <div class="tongji-box">
          <p class="tongji-num">125</p>
          <p class="tongji-label">Users</p>
        </div>
      </div>
      <div class="tongji-wrapper">
        <div class="tongji-box">
          <p class="tongji-num">15</p>
          <p class="tongji-label">Applications</p>
        </div>
      </div>
      <div class="tongji-wrapper">
        <div class="tongji-box">
          <p class="tongji-num">28</p>
          <p class="tongji-label">APIs</p>
        </div>
      </div>
    </div>

    <div
      :class="['platform-menu-topmenu', siderOpen ? 'open' : 'close']"
      v-else
    >
      <div
        :class="['menu-item', item.active ? 'active' : '']"
        v-for="(item, i) in menu"
        :key="i"
        @click="clickHandle(item)"
      >
        <div class="icon-box">
          <a-icon class="icon" :type="item.icon" />
        </div>
        <p v-if="siderOpen" class="label">{{ item.label }}</p>
      </div>

      <div class="tongji-wrapper">
        <div class="tongji-box">
          <p class="tongji-num">125</p>
          <div>Users</div>
        </div>
      </div>
      <div class="tongji-wrapper">
        <div class="tongji-box">
          <p class="tongji-num">15</p>
          <div>Applications</div>
        </div>
      </div>
      <div class="tongji-wrapper">
        <div class="tongji-box">
          <p class="tongji-num">28</p>
          <div>APIs</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Icon } from "ant-design-vue";
import "ant-design-vue/lib/icon/style/index.js";
Vue.use(Icon);

export default {
  name: "BPlaformMenu",
  props: {
    siderOpen: {
      type: Boolean,
      require: false,
      default: true,
    },
    layoutMode: {
      type: String,
      require: false,
      default: "topmenu",
    },
    menu: {
      type: Array,
      require: false,
      default: [],
    },
  },
  methods: {
    clickHandle(item) {
      this.menu.forEach((v) => {
        v.active = false;
      });
      item.active = true;
    },
  },
};
</script>

<style lang="less">
@import "../index.less";
.platform-menu-topmenu {
  display: flex;
  .menu-item {
    margin: 0 1px;
    padding: 10px;
    display: flex;
    .label {
      text-align: center;
      font-size: 12px;
      margin-bottom: 0;
    }
    .icon-box {
      display: flex;
      justify-content: center;
      align-items: center;
      .icon {
        font-size: 15px;
      }
    }
  }

  .tongji-wrapper {
    padding: 10px;
    padding-left: 0px;
    .tongji-box {
      border-right: 1px solid #ddd;
      text-align: center;
      padding: 0 10px;
      .tongji-num {
        font-size: 12px;
        margin-bottom: 0;
      }
    }
  }
}

.platform-menu-sidemenu.open {
  .menu-item {
    padding: 20px;
    margin: 1px 0;
    .label {
      text-align: center;
      font-size: 15px;
      margin-bottom: 0;
    }
    .icon-box {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 10px;
      .icon {
        font-size: 50px;
      }
    }
  }

  .tongji-wrapper {
    padding: 10px;
    .tongji-box {
      border-bottom: 1px solid #ddd;
      text-align: center;
      .tongji-num {
        font-size: 25px;
        margin-bottom: 10px;
      }
      .tongji-label {
        font-size: 15px;
      }
    }
  }
}
.platform-menu-sidemenu.close {
  .menu-item {
    padding: 20px;
    margin: 1px 0;
    .icon-box {
      display: flex;
      justify-content: center;
      align-items: center;
      .icon {
        font-size: 30px;
      }
    }
  }

  .tongji-wrapper {
    padding: 5px;
    .tongji-box {
      border-bottom: 1px solid #ddd;
      text-align: center;
      .tongji-num {
        font-size: 20px;
        margin-bottom: 10px;
      }
      .tongji-label {
        font-size: 12px;
      }
    }
  }
}

.menu-item {
  cursor: pointer;
  background-color: #dfe1e5;
  &:hover {
    background-image: linear-gradient(to bottom right, @primary-color, #fff);
  }
  &.active {
    background-image: linear-gradient(to bottom right, @primary-color, #fff);
    color: #fff;
  }
}
</style>