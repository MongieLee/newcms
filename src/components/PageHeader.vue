<template>
  <div class="biz-page-header">
    <span>
      {{ title }}
    </span>
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
.biz-page-header {
  display: flex;
  padding-left: 2em;
  align-items: center;
  height: 32px;
  border: 1px solid red;
  background: #e0ecff;
  
}
</style>