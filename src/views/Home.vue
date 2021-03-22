<template>
  <div>
    <div class="f-column" :style="{ height: '100vh' }">
      <div class="f-row f-full">
        <Layout style="width: 100%; height: 100vh; display: flex">
          <LayoutPanel region="north" style="height: 80px">
            <div class="top-header">
              <img
                @click="goHome"
                src="http://www.baiz.cn/bizapi/Content/Images/logo.png"
                alt="biz_logo"
              />
              <div><span>Admin</span>注销</div>
            </div>
          </LayoutPanel>
          <LayoutPanel
            region="west"
            title="菜单"
            :collapsible="true"
            :expander="true"
            style="width: 220px"
          >
            <Tree
              ref="tree"
              selectLeafOnly
              animate
              :data="data"
              @selectionChange="onTreeSelect"
            ></Tree>
          </LayoutPanel>
          <LayoutPanel region="center" style="flex: 1" id="clearBorder">
            <router-view />
          </LayoutPanel>
        </Layout>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  mounted() {},
  data() {
    return {
      title: "百智科技",
      width: 200,
      collapsed: false,
      selectedMenu: null,
      data: this.getData(),
    };
  },
  methods: {
    onTreeSelect(e) {
      console.log("树的一项被选中了");
      this.$router.push(e.path);
    },
    getData() {
      return [
        {
          path: "/",
          text: "数据看板",
        },
        {
          path: "/user",
          text: "客户",
        },
        {
          path: "/wechat",
          text: "微信",
        },
        {
          path: "/test",
          text: "测试",
        },
        {
          text: "考勤管理",
          children: [
            {
              text: "日历",
            },
            {
              text: "日期类型",
            },
            {
              text: "考勤信息",
            },
            {
              text: "考勤区域",
            },
            {
              text: "考勤设置",
            },
          ],
        },
        {
          text: "项目管理",
          children: [
            {
              text: "项目信息",
            },
            {
              text: "项目组结构",
            },
            {
              text: "项目权限",
            },
            {
              text: "项目结构权限",
            },
            {
              text: "项目用户组",
            },
          ],
        },
        {
          text: "资源管理",
        },
        {
          text: "权限管理",
        },
      ];
    },
    goHome() {
      if (this.$route.path === "/") {
        return;
      }
      this.$router.push("/");
    },
  },
};
</script>
<style lang="scss">
@import "https://netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
img {
  max-height: 100%;
}
.top-header {
  height: 100%;
  padding: 4px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.top-header div {
  cursor: pointer;
  color: red;
  border: 1px solid red;
  padding: 6px 8px;
  border-radius: 8px;
  span {
    margin: 2px 0;
    color: white;
    background: #28a745;
    border-radius: 6px;
    margin-right: 3px;
    padding: 2px 4px;
  }
  &:hover {
    background: #dc3545;
    color: white;
  }
}

#clearBorder > .panel-body-noheader {
  border-top-width: 0px;
  border-left-width: 0px;
}

.panel-header.f-noshrink {
  display: flex;
  align-items: center;
  height: 41px;
}

.f-column img {
  cursor: pointer;
}

.tabs-container.f-column {
  height: 100%;
}
</style>