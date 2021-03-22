<template>
  <div>
    <!-- test
    <draggable v-model="myArray">
      <transition-group>
        <div v-for="element in myArray" :key="element.id" class="fuck">
          {{ element.name }}
        </div>
      </transition-group>
    </draggable> -->
    <avue-form-design
      style="height: 86vh"
      storage
      @submit="handleSubmit"
    ></avue-form-design>
  </div>
</template>

<script>
// import draggable from "vuedraggable";
export default {
  data() {
    return {
      options: "",
      myArray: [
        { id: 1, name: "q" },
        { id: 2, name: "w" },
        {
          id: 3,
          name: "e",
        },
      ],
    };
  },
  components: {
    // draggable,
  },
  methods: {
    handleSubmit() {},
  },
};
</script>

<style lang="scss" scoped>
.fuck {
  width: 100px;
  border: 1px solid red;
  background: yellowgreen;
}
</style>