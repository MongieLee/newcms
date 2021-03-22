<template>
  <div class="biz-layout">
    <div class="biz-page-header">
      <span class="title">
        {{ title }}
      </span>
    </div>
    <div class="biz-content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      require: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.biz-layout {
  border-left: 1px solid #95b8e7;
  height: 100%;
  margin-left: 6px;
  display: flex;
  flex-direction: column;
  .biz-page-header {
    display: flex;
    padding-left: 2em;
    align-items: center;
    height: 32px;
    border-bottom: 1px solid #95b8e7;
    background: #e0ecff;
    border-top: none;
    position: relative;
    .title {
      position: absolute;
      left: 3px;
      bottom: -1px;
      height: 27px;
      font-size: 14px;
      padding: 0 10px;
      color: #0e2d5f;
      font-weight: bold;
      line-height: 27px;
      background: white;
      border: 1px solid #95b8e7;
      border-bottom: white;
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
    }
  }
  .biz-content {
    flex-grow: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    padding: 0 6px;
  }
}
</style>