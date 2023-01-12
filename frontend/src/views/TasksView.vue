<!-- Tasks Alejandra -->
<template>
  <div>
    <Header />
    <Sidebar />
    <div class="container">
      <h2>Tareas</h2>

      <div v-if="user">
        <div v-if="user.role == 'admin'">
          <FilterComponent></FilterComponent>
          <TaskComponent></TaskComponent>
          <AddButton></AddButton>
        </div>

        <div v-if="user.role == 'employee'">
          <p>No tienes tareas asignadas</p>
        </div>
      </div>

      <div v-if="!user">
        <p>There's been a loggin error</p>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/HeaderComponent.vue";
import Sidebar from "../components/SidebarComponent.vue";
import FilterComponent from "../components/Tasks/FiltersComponent";
import TaskComponent from "../components/Tasks/TasksComponent";
import AddButton from "../components/Tasks/AddButtonComponent";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";

export default {
  name: "TaskView",
  components: {
    FilterComponent,
    TaskComponent,
    AddButton,
    Header,
    Sidebar,
  },

  setup() {
    const store = useStore();

    return {
      user: computed(() => store.state.user),
    };
  },
};
</script>




<style scoped>

.container {
  margin-top: 2rem;
  margin-left: 4rem;
}

h2 {
  font-size: 1.7rem;
  
}
</style>
