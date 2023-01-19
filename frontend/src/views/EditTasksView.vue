<template>
  <div>
    <Header />
    <Sidebar />
    <div class="ms-5 mt-5">
      <h2 class="ms-3 mb-4">Editar Tarea</h2>
      <EditTasks></EditTasks>
    </div>
  </div>
</template>
<script>
import Header from "../components/HeaderComponent.vue";
import Sidebar from "../components/SidebarComponent.vue";
import EditTasks from "@/components/Tasks/TasksFormComponent.vue";
export default {
  data() {
    return {};
  },
  components: {
    Header,
    Sidebar,
    EditTasks,
  },
};
</script>