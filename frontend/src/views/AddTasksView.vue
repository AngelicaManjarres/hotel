<template>
  <div>
    <Header />
    <Sidebar />
    <div class="ms-5 mt-5 ">
      <h2 class="ms-3 mb-4">Agregar Tarea</h2>
      <AddTasksComponent></AddTasksComponent>
    </div>
  </div>
</template>
<script>
import Header from "../components/HeaderComponent.vue";
import Sidebar from "../components/SidebarComponent.vue";
import AddTasksComponent from "../components/Tasks/AddTasksComponent.vue";
export default {
  name: "AddTaskView",
  components: {
    AddTasksComponent,
    Header,
    Sidebar,
  },
  setup() {},
};
</script>
<style scoped>
h2 {
  font-size: 1.7rem;
}
</style>
