<!-- Tasks Alejandra -->
<template>
  <div class="container">
    <h2>Tareas</h2>
    <div>
      <FilterComponent></FilterComponent>
      <TaskComponent></TaskComponent>
      <AddButton></AddButton>
    </div>
    <div>
      <p>No tienes tareas asignadas</p>
    </div>
  </div>
</template>

<script>
import FilterComponent from "../components/Tasks/FiltersComponent";
import TaskComponent from "../components/Tasks/TasksComponent";
import AddButton from "../components/Tasks/AddButtonComponent";
import { useStore } from 'vuex';
import { computed } from '@vue/runtime-core';

export default {
  name: "TaskView",
  components: {
    FilterComponent,
    TaskComponent,
    AddButton,
  },

  setup() {
    const store = useStore()

    return {
      user: computed(() => store.state.user)
    }

  }
};
</script>
<style scoped>
h2 {
  font-size: 1.7rem;
  margin: 2rem 4rem;
}
</style>
