<template>
  <div class="container">
    <PageHeader :title="'ceshi'"></PageHeader>

    <div>
      <span class="green">珠海百智科技</span>
      <span class="grey">公司管理系统</span>
      <p class="en">CMS (Company Management System)</p>
      <hr />
      <div class="mg-s">
        点击<span>服务</span>按钮查看系统后台服务运行状态。
      </div>
      <button @click="toService" class="service-btn">服务</button>
    </div>
  </div>
</template>

<script>
import PageHeader from "./PageHeader.vue";
export default {
  components: {
    PageHeader,
  },
  methods: {
    toService() {
      window.open("https://www.baiz.cn:4433/jobs");
    },
  },
};
</script>

<style lang="scss" scoped>
.service-btn {
  border: 1px solid #28a745;
  border-radius: 4px;
  padding: 4px 10px;
  font-size: 18px;
  color: #28a745;
  &:hover {
    cursor: pointer;
    background: #28a745;
    color: #fff;
  }
}
.container {
  flex-direction: column;
  margin: 6px;
  background: #e9ecef;
  height: 360px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    width: 95%;
    .green {
      font-size: 2.8em;
      color: #28a745;
    }
    .grey {
      color: #6c757d;
      font-size: 2.1em;
    }
    .en {
      margin-top: 20px;
      margin-bottom: 20px;
      font-weight: bold;
      font-size: 1.3em;
    }
    .mg-s {
      margin-top: 15px;
      margin-bottom: 15px;
      color: #999;
      span {
        background-color: #28a745;
        color: white;
        padding: 2px 4px;
        border-radius: 3px;
        margin: 0 3px;
      }
    }
  }
}
</style>