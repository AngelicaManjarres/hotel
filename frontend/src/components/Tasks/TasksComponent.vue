<template>
  <div>
    <div
      v-for="task in tasks"
      :key="task.id"
      class="card mt-3 w-75 mx-auto border-left-red"
    >
      <div class="card-body">
        <div>
          <h4>{{ task.employeeId }}</h4>
          <p>{{ task.description }}</p>
          <p>
            Finalzada:
            <strong v-if="task.finished">{{ task.date }}</strong>
            <strong v-if="!task.finished">-</strong>
          </p>
        </div>
        <div class="icons">
          <button @click="$router.push('/editTasks')" class="btn btn-info p-2">
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
          <button @click.prevent="deleteTask" class="btn btn-danger p-2">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
    <div v-if="alertDisplay" class="alert alert-danger ms-5 w-75 d-flex" role="alert">
      <h4> ¿Esta seguro de que desea eliminar la tarea? </h4>
      <button class="btn btn-light">Sí</button>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      tasks: [],
      alertDisplay:false,
    };
  },
  methods: {
    deleteTask() {
      this.alertDisplay=true;
    },
  },
  async created() {
    try {
      let res = await axios.get("http://localhost:4200/admin/tasks");
      this.tasks = res.data;
      console.log(this.tasks);
    } catch (err) {
      console.log(err);
    }
    console.log(this.$store.state.user);
  },
};
</script>
<style scoped>
.card {
  background: #f4f4f4;
  box-shadow: 0px 4px 15px #333;
}
.card-body {
  display: flex;
  justify-content: space-between;
}
.icons {
  display: flex;
  height: 50px;
}
.alert{
  position:fixed !important;
  top: 300px !important;
}
.border-left-green {
  border-left: 4px solid chartreuse;
}

.border-left-red {
  border-left: 4px solid crimson;
}

</style>

