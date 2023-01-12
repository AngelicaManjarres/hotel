<template>
  <div>
    <div v-for="task in tasks" :key="task.id" class="card mt-3 w-75 mx-auto border-left-red">
      <div class="card-body">
        <h4>{{ task.employeeId }}</h4>
        <p>{{ task.description }}</p>
        <p>Finalzada:
          <strong v-if="task.finished">{{task.date}}</strong>
          <strong v-if="!task.finished">-</strong>
          </p>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      tasks: [],      
    };
  },
  methods: {},
  async created() {
    try {
      let res = await axios.get("http://localhost:4200/admin/tasks");
      this.tasks = res.data;
      console.log(this.tasks);
    } catch (err) {
      console.log(err);
    }
    console.log(this.$store.state.user)
  },
};
</script>
<style scoped>
.card {
  background: #F4F4F4;
  box-shadow: 0px 4px 15px #333;
}

.border-left-green {
  border-left: 4px solid chartreuse;
}

.border-left-red {
  border-left: 4px solid crimson;
}

</style>