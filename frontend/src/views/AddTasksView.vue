<template>
  <div>
    <h2 class="mt-5 mb-5 ms-5">Agregar Tarea</h2>
    <AddTasksComponent></AddTasksComponent>
  </div>
</template>
<script>
import  AddTasksComponent  from "../components/Tasks/AddTasksComponent.vue";
export default {
  name: "AddTaskView",
  components: {
    AddTasksComponent,
  },
  setup() {},
};
</script>
<style scoped>
h2 {
  font-size: 1.7rem;
}
</style>
